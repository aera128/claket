<template>
  <div class="max-h-screen overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-base-content" ref="palette">
    <input type="checkbox" id="modal-delete" class="modal-toggle" />
    <label for="modal-delete" class="modal cursor-pointer">
      <label class="modal-box relative">
        <h3 class="font-bold text-lg">Delete current page ?</h3>
        <div class="modal-action">
          <label for="modal-delete" class="btn">close</label>
          <label for="modal-delete" class="btn btn-error" @click="resetPage">Delete</label>
        </div>
      </label>
    </label>
    <section class="container mx-auto px-1 md:px-0 transition-all duration-300">
      <div class="grid grid-cols-1 md:grid-cols-2 mx-2">
        <svg class="w-full md:w-11/12 mt-10 transition-all duration-300 animate__animated animate__fadeInLeft"
          viewBox="0 0 381 163" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.8 1.93888C0 5.67222 0.133333 5.00555 0 81.0056C0 133.272 0.4 152.872 1.6 155.406C4.93333 162.739 5.2 162.739 73.3333 162.739C141.467 162.739 141.733 162.739 145.067 155.406C146.267 152.872 146.667 133.272 146.667 81.2722C146.667 4.60555 146.667 5.00555 139.333 1.67222C134 -0.727784 11.2 -0.461117 6.8 1.93888ZM97.4667 30.6056C107.333 34.3389 115.2 41.2722 118 48.7389C122 59.1389 117.467 66.7389 107.2 66.7389C100.133 66.7389 95.2 62.8722 88.8 52.3389C82.8 42.4722 78.8 38.8722 73.0667 37.9389C66.9333 36.8722 61.0667 39.9389 57.0667 46.3389C54.4 50.8722 54 53.0056 54.1333 65.4056C54.1333 76.6056 54.8 80.8722 57.0667 86.8722C62.9333 101.672 74.1333 110.739 86.5333 110.739C96 110.739 99.7333 108.872 107.733 100.339C113.6 94.0722 115.2 93.0056 117.067 94.2056C122.667 97.8056 118.933 112.472 110 122.472C101.867 131.406 92.8 135.139 78 135.139C68.6667 135.272 66.1333 134.739 58.4 131.139C30 117.806 18.2667 81.4056 33.2 52.4722C39.2 40.7389 49.6 32.2056 62.5333 28.4722C71.0667 26.0722 88.2667 27.1389 97.4667 30.6056Z"
            style="fill: hsla(var(--bc))" />
          <path
            d="M191.848 98.8207C194.791 98.8207 196.262 97.7908 196.262 95.731V90.5448H206.855V96.7241C206.855 99.2988 205.531 101.322 202.883 102.793C200.455 104.264 197.476 105 193.945 105H186.552C180.887 105 176.915 103.418 174.634 100.255C173.899 99.2253 173.531 98.0483 173.531 96.7241V67.0414C173.531 64.5402 174.782 62.554 177.283 61.0827C179.857 59.5379 182.947 58.7655 186.552 58.7655H193.945C197.476 58.7655 200.492 59.5011 202.993 60.9724C205.568 62.4437 206.855 64.4667 206.855 67.0414V73.2207H196.262V68.0345C196.262 65.9747 194.791 64.9448 191.848 64.9448H188.648C185.632 64.9448 184.124 65.9747 184.124 68.0345V95.731C184.124 97.7908 185.632 98.8207 188.648 98.8207H191.848Z"
            style="fill: hsla(var(--bc))" />
          <path d="M215.101 105V60.7517H225.694V105H215.101Z" style="fill: hsla(var(--bc))" />
          <path
            d="M252.852 98.8207C255.795 98.8207 257.266 97.7908 257.266 95.731V92.3103C257.119 90.3241 255.648 89.331 252.852 89.331H249.211C246.195 89.331 244.687 90.3609 244.687 92.4207V95.731C244.687 97.7908 246.195 98.8207 249.211 98.8207H252.852ZM249.652 76.6414C246.636 76.6414 245.128 77.6712 245.128 79.731V80.8345H234.535V78.6276C234.535 76.1264 235.785 74.1402 238.287 72.669C240.861 71.1977 243.914 70.4621 247.445 70.4621H254.949C258.48 70.4621 261.496 71.1977 263.997 72.669C266.572 74.1402 267.859 76.1264 267.859 78.6276V105H257.266V104.007C255.648 104.669 253.845 105 251.859 105H247.114C241.45 105 237.477 103.418 235.197 100.255C234.461 99.2253 234.094 98.085 234.094 96.8345V91.3172C234.094 88.8896 235.344 86.9402 237.845 85.469C240.42 83.9241 243.51 83.1517 247.114 83.1517H252.411C254.397 83.1517 256.015 83.5563 257.266 84.3655V79.731C257.266 77.6712 255.795 76.6414 252.852 76.6414H249.652Z"
            style="fill: hsla(var(--bc))" />
          <path
            d="M275.812 105V59.869H286.405V87.2345L299.647 70.4621H310.902L297.44 87.5655L310.902 105H299.647L286.405 88.0069V105H275.812Z"
            style="fill: hsla(var(--bc))" />
          <path
            d="M331.711 76.531C328.695 76.531 327.187 77.5609 327.187 79.6207V82.8207H339.325V79.6207C339.325 77.5609 337.853 76.531 334.911 76.531H331.711ZM334.911 98.8207C337.853 98.8207 339.325 97.7908 339.325 95.731V93.5241H349.918V96.7241C349.918 99.2988 348.594 101.322 345.945 102.793C343.518 104.264 340.538 105 337.007 105H329.614C323.95 105 319.977 103.418 317.697 100.255C316.961 99.2253 316.594 98.0483 316.594 96.7241V78.6276C316.594 76.1264 317.844 74.1402 320.345 72.669C322.92 71.1241 326.01 70.3517 329.614 70.3517H337.007C340.538 70.3517 343.518 71.0873 345.945 72.5586C348.594 74.0299 349.918 76.0529 349.918 78.6276V89H327.187V95.731C327.187 97.7908 328.695 98.8207 331.711 98.8207H334.911Z"
            style="fill: hsla(var(--bc))" />
          <path
            d="M373.386 95.731C373.386 97.7908 374.857 98.8207 377.799 98.8207H380.558V105H375.703C370.038 105 366.066 103.418 363.786 100.255C363.05 99.2253 362.682 98.0483 362.682 96.7241V76.6414H356.282V70.4621H362.682V62.6276H373.386V70.4621H380.117V76.6414H373.386V95.731Z"
            style="fill: hsla(var(--bc))" />
        </svg>
        <div>
          <select class="select select-bordered w-full mt-5 bg-base-100 animate__animated animate__fadeInDown"
            @click="loadDevices" v-model="device" @change="changeDevice">
            <option v-for="device in devices" :key="device.deviceId" :value="device.deviceId">
              {{ device.label }}
            </option>
          </select>
          <select class="select select-bordered w-full mt-5 animate__animated animate__fadeInDown" v-model="theme"
            @change="changeTheme">
            <option v-for="theme in themes" :key="theme" :value="theme">
              {{ theme.charAt(0).toUpperCase() + theme.slice(1) }}
            </option>
          </select>
          <Volume class="animate__animated animate__fadeInRight" />
        </div>
      </div>
      <div
        class="pb-3 pt-4 mr-2 animate__animated animate__fadeInRight sticky -top-2 z-50 bg-base-100 flex items-center justify-end gap-1">
        <button class="btn btn-square flex-shrink tooltip tooltip-bottom" @click="lastPage" :disabled="isFirstPage"
          data-tip="Previous Page">
          <span class="text-2xl mdi mdi-arrow-left"></span>
        </button>
        <span class="font-mono text-4xl countdown" @wheel="onScrollPage">
          <span :style="'--value: ' + page" class="page-count"></span>
        </span>
        <button class="btn btn-square flex-shrink tooltip tooltip-bottom" @click="nextPage" :disabled="isLastPage"
          data-tip="Next Page">
          <span class="text-2xl mdi mdi-arrow-right"></span>
        </button>
        <button class="btn btn-square tooltip tooltip-bottom"
          v-if="$store.state.paused || $store.state.audios.length === 0" :disabled="haveAudio" @click="playAll"
          data-tip="Resume">
          <span class="text-2xl mdi mdi-play"></span>
        </button>
        <button class="btn btn-square tooltip tooltip-bottom" v-else @click="pauseAll" data-tip="Pause">
          <span class="text-2xl mdi mdi-pause"></span>
        </button>
        <button class="btn btn-square tooltip tooltip-bottom" @click="stopAll" data-tip="Stop">
          <span class="text-2xl mdi mdi-stop"></span>
        </button>
        <button class="btn btn-square tooltip tooltip-bottom" @click="toggleLoop" data-tip="Loop">
          <span class="text-2xl mdi mdi-sync" v-if="$store.state.loop"></span>
          <span class="text-2xl mdi mdi-sync-off" v-else></span>
        </button>
        <button class="btn btn-square tooltip tooltip-bottom" @click="togglePlayback" data-tip="Playback">
          <span class="text-2xl mdi mdi-speaker" v-if="$store.state.playback"></span>
          <span class="text-2xl mdi mdi-speaker-off" v-else></span>
        </button>
        <label for="modal-delete" class="flex justify-center items-center btn btn-square tooltip tooltip-bottom"
          data-tip="Delete Page">
          <span class="text-2xl mdi mdi-delete"></span>
        </label>

      </div>
      <div :class="`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 mt-5 transition-all duration-300 ${!haveAudio ? 'mb-20' : ''
        }`">
        <Button v-for="n in 24" :key="n" :page="page" :index="n" class="animate__animated animate__zoomIn"
          :style="'animation-delay: ' + n * 30 + 'ms'" />
      </div>
    </section>
  </div>
</template>

<script>
import Button from './Button.vue'
export default {
  components: { Button },
  props: {},
  mounted() {
    this.loadDevices()
    this.loadTheme()
    this.loadPlayback()
    this.loadLoop()
    window.addEventListener('keydown', (e) => {
      switch (e.code) {
        case 'ArrowLeft':
        case 'ArrowDown':
        case 'KeyA':
        case 'KeyS':
          e.preventDefault()
          this.lastPage()
          break
        case 'ArrowRight':
        case 'ArrowUp':
        case 'KeyD':
        case 'KeyW':
          e.preventDefault()
          this.nextPage()
          break
        case 'Space':
          e.preventDefault()
          this.$store.state.paused || this.$store.state.audios.length === 0
            ? this.playAll()
            : this.pauseAll()
          break
        case 'KeyR':
          e.preventDefault()
          this.stopAll()
          break
        case 'KeyL':
          e.preventDefault()
          this.toggleLoop()
          break
        case 'KeyP':
          e.preventDefault()
          this.togglePlayback()
          break
        case 'KeyM':
          e.preventDefault()
          break
        case 'Delete':
          e.preventDefault()
          if(confirm("Delete page ?")){
            this.resetPage()
          }
          break
      }
    })
  },
  data() {
    return {
      page: 1,
      devices: [],
      device: {},
      theme: '',
      themes: [
        'light',
        'dark',
        'cupcake',
        'bumblebee',
        'emerald',
        'corporate',
        'synthwave',
        'retro',
        'cyberpunk',
        'valentine',
        'halloween',
        'garden',
        'forest',
        'aqua',
        'lofi',
        'pastel',
        'fantasy',
        'wireframe',
        'black',
        'luxury',
        'dracula',
        'cmyk',
        'autumn',
        'business',
        'acid',
        'lemonade',
        'night',
        'coffee',
        'winter',
      ],
    }
  },
  computed: {
    isFirstPage() {
      return this.page === 1
    },
    isLastPage() {
      return this.page === 99
    },
    haveAudio() {
      return this.$store.state.audios.length === 0
    },
  },
  methods: {
    onScrollPage(e) {
      e.preventDefault()
      e.deltaY > 0 ? this.lastPage() : this.nextPage()
    },
    pauseAll() {
      this.$store.dispatch('pauseAll')
    },
    playAll() {
      this.$store.dispatch('resumeAll')
    },
    stopAll() {
      this.$store.commit('removeAllAudio')
    },
    togglePlayback() {
      this.$store.commit('togglePlayback')
    },
    toggleLoop() {
      this.$store.commit('toggleLoop')
    },
    nextPage() {
      if (this.page + 1 > 99) {
        this.page = 99
        return
      }
      this.page++
    },
    lastPage() {
      if (this.page - 1 < 1) {
        this.page = 1
        return
      }
      this.page--
    },
    changeDevice() {
      const db = this.$store.getters.getDB
      const transaction = db.transaction('Settings', 'readwrite')
      const store = transaction.objectStore('Settings')
      store.add({ id: 'deviceId', value: this.device })
      this.$store.commit('setDevice', this.device)

      transaction.oncomplete = () => { }

      transaction.onerror = () => {
        const transaction = db.transaction('Settings', 'readwrite')
        const store = transaction.objectStore('Settings')
        store.put({ id: 'deviceId', value: this.device })
        this.$store.commit('setDevice', this.device)
      }
    },
    changeTheme() {
      const db = this.$store.getters.getDB
      const transaction = db.transaction('Settings', 'readwrite')
      const store = transaction.objectStore('Settings')
      store.add({ id: 'theme', value: this.theme })
      this.$store.commit('setTheme', this.theme)

      transaction.oncomplete = () => { }

      transaction.onerror = () => {
        const transaction = db.transaction('Settings', 'readwrite')
        const store = transaction.objectStore('Settings')
        store.put({ id: 'theme', value: this.theme })
        this.$store.commit('setTheme', this.theme)
      }
    },
    loadTheme() {
      const db = this.$store.getters.getDB
      const transaction = db.transaction(['Settings'])
      const objectStore = transaction.objectStore('Settings')
      const request = objectStore.get('theme')
      request.onerror = () => {
        this.theme = this.$store.state.theme
        this.$store.commit('setTheme', this.theme)
      }

      request.onsuccess = () => {
        if (request.result) {
          this.theme = request.result.value
        } else {
          this.theme = this.$store.state.theme
        }
        this.$store.commit('setTheme', this.theme)
      }
    },
    loadLoop() {
      const db = this.$store.getters.getDB
      const transaction = db.transaction(['Settings'])
      const objectStore = transaction.objectStore('Settings')
      const request = objectStore.get('loop')

      request.onsuccess = () => {
        if (request.result) {
          this.$store.commit('setLoop', request.result.value)
        }
      }
    },
    loadPlayback() {
      const db = this.$store.getters.getDB
      const transaction = db.transaction(['Settings'])
      const objectStore = transaction.objectStore('Settings')
      const request = objectStore.get('playback')

      request.onsuccess = () => {
        if (request.result) {
          this.$store.commit('setPlayback', request.result.value)
        }
      }
    },
    loadDevices() {
      if (this.devices.length > 0) {
        return
      }

      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(() => {
          navigator.mediaDevices.enumerateDevices().then(async (devices) => {
            this.devices = devices
              .filter((d) => d.kind === 'audiooutput')

            const db = this.$store.getters.getDB
            const transaction = db.transaction(['Settings'])
            const objectStore = transaction.objectStore('Settings')
            const request = objectStore.get('deviceId')
            request.onerror = () => {
              try {
                this.device = this.devices[0].deviceId
              } catch (error) { }
              this.$store.commit('setDevice', this.device)
            }

            request.onsuccess = () => {
              if (request.result) {
                this.device = request.result.value
              } else {
                try {
                  this.device = this.devices[0].deviceId
                } catch (error) { }
              }
              this.$store.commit('setDevice', this.device)
            }
          })
        })
        .catch(() => { })
    },
    resetPage() {
      const db = this.$store.getters.getDB
      const transaction = db.transaction(['Sounds'], 'readwrite')
      const objectStore = transaction.objectStore('Sounds')
      for (let i = 1; i <= 24; i++) {
        objectStore.delete([this.page, i])
      }
      this.$root.$emit('refresh')
    },
  },
}
</script>

<style lang="scss" scoped>
.page-count::before {
  transition: all 0.2s ease-in-out;
}
</style>
