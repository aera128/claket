export const state = () => ({
    db: null,
    volume: 0.5,
    playback: true,
    device: null,
    audios: [],
    loop: false,
    paused: true,
    theme: 'dark',
})

export const getters = {
    getDB: state => {
        return state.db
    },
    getVolume: state => {
        return state.volume
    }
}

export const mutations = {
    setDB(state, db) {
        state.db = db
    },
    setTheme(state, theme) {
        state.theme = theme
        document
            .querySelector('html')
            .setAttribute('data-theme', theme)
    },
    setPaused(state, paused) {
        state.paused = paused
    },
    setPlayback(state, playback) {
        state.playback = playback
    },
    setLoop(state, loop) {
        state.loop = loop
    },
    setVolume(state, volume) {
        state.volume = volume
        state.audios.forEach(audio => {
            try {
                audio.volume = state.volume * audio.coef
                if (state.playback === false || state.device === 'default') {
                    audio.playback.volume = 0
                } else {
                    audio.playback.volume = state.volume * audio.coef
                }
            } catch (e) {
                console.error(e);
            }
        })
    },
    changeCoef(state, data) {
        state.audios.forEach(audio => {
            if (audio.soundId.toString() === data.soundId.toString()) {
                try {
                    audio.coef = data.coef
                    audio.volume = state.volume * audio.coef
                    if (state.playback === false || state.device === 'default') {
                        audio.playback.volume = 0
                    } else {
                        audio.playback.volume = state.volume * audio.coef
                    }
                } catch (e) {
                    console.error(e);
                }
            }
        })
    },
    togglePlayback(state) {
        state.playback = !state.playback
        state.audios.forEach(audio => {
            try {
                if (state.playback === false || state.device === 'default') {
                    audio.playback.volume = 0
                } else {
                    audio.playback.volume = state.volume * audio.coef
                }
            } catch (e) {
                console.error(e);
            }
        })
        const db = state.db
        const transaction = db.transaction('Settings', 'readwrite')
        const store = transaction.objectStore('Settings')
        store.add({ id: 'playback', value: state.playback })

        transaction.oncomplete = (event) => { }

        transaction.onerror = (event) => {
            const transaction = db.transaction('Settings', 'readwrite')
            const store = transaction.objectStore('Settings')
            store.put({ id: 'playback', value: state.playback })
        }
    },
    toggleLoop(state) {
        state.loop = !state.loop
        state.audios.forEach(audio => {
            try {
                audio.loop = state.loop
                audio.playback.loop = state.loop
            } catch (e) {
            }
        })
        const db = state.db
        const transaction = db.transaction('Settings', 'readwrite')
        const store = transaction.objectStore('Settings')
        store.add({ id: 'loop', value: state.loop })

        transaction.oncomplete = (event) => { }

        transaction.onerror = (event) => {
            const transaction = db.transaction('Settings', 'readwrite')
            const store = transaction.objectStore('Settings')
            store.put({ id: 'loop', value: state.loop })
        }
    },
    setDevice(state, device) {
        state.device = device
    },
    addAudio(state, audio) {
        state.audios.unshift(audio)
    },
    removeAudio(state, audio) {
        state.audios = state.audios.filter(a => a.uid !== audio.uid)
        audio = null
    },
    removeAllAudio(state) {
        state.audios.forEach(audio => {
            try {
                audio.pause()
                audio.playback.pause()
                audio.currentTime = audio.duration
                this.commit('removeAudio', audio)
            } catch (e) {
                console.error(e);
            }
        })
    },
}

export const actions = {
    playSound(ctx, data) {
        const url = window.URL.createObjectURL(data.file)

        const audio = new Audio()

        audio.addEventListener("ended", () => {
            this.commit('removeAudio', audio)
        });

        if (data.coef === undefined) {
            data.coef = 1
        }
        function guidGenerator() {
            let S4 = () => {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
            };
            return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4())
        }

        audio.uid = guidGenerator()
        audio.soundId = data.soundId
        audio.src = url
        audio.coef = data.coef
        audio.volume = ctx.state.volume * audio.coef
        audio.name = data.file.name
        audio.loop = ctx.state.loop

        audio.playback = audio.cloneNode()
        if (ctx.state.playback === false || ctx.state.device === 'default') {
            audio.playback.volume = 0
        } else {
            audio.playback.volume = ctx.state.volume * audio.coef
        }
        audio.playback.loop = ctx.state.loop
        this.commit('addAudio', audio)
        try{
            audio.setSinkId(ctx.state.device).then(() => {
                audio.play()
                audio.playback.play()
                this.commit('setPaused', false)
            })
        }
        catch(error){
            audio.play()
            audio.playback.play()
            this.commit('setPaused', false)
        }
    },
    pauseAll(ctx) {
        ctx.state.audios.forEach(audio => {
            try {
                audio.pause()
                audio.playback.pause()
            } catch (e) {
            }
        })
        this.commit('setPaused', true)
    },
    resumeAll(ctx) {
        ctx.state.audios.forEach(audio => {
            try {
                audio.play()
                audio.playback.play()
            } catch (e) {
            }
        })
        this.commit('setPaused', false)
    }
}