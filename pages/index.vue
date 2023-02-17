<template>
  <section class="min-h-screen bg-base-100 overflow-x-hidden">
    <Palette v-if="ready" />
    <div class="hero min-h-screen bg-base-200" v-if="error">
      <div class="text-center hero-content animate__animated animate__zoomIn">
        <div class="max-w-xl">
          <h1 class="mb-5 text-5xl font-bold">Browser not supported :(</h1>
          <p class="mb-5">
            Please use Claket with a supported browser or with
            <a href="https://github.com/nativefier/nativefier" class="link" target="_blank">Nativefier</a>
          </p>
          <div class="
                  grid grid-cols-3
                  justify-items-center
                  animate__animated animate__slideInUp
                ">
            <a href="https://www.chromium.org/" target="_blank">
              <img class="w-20" src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Chromium_Material_Icon.svg"  alt="wikipedia"/>
            </a>
            <a href="https://brave.com" target="_blank">
              <img class="w-20" src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Brave_lion.png"  alt="brave"/>
            </a>
            <img class="w-20" src="https://upload.wikimedia.org/wikipedia/fr/2/20/Logo_Microsoft_Edge.png"  alt="edge"/>
          </div>
        </div>
      </div>
    </div>
    <div v-if="$store.state.audios.length > 0" class="
            fixed
            bottom-0
            bg-base-200
            w-full
            max-h-96
            overflow-y-auto
            animate__animated animate__slideInUp
          " style="animation-duration: 300ms">
      <div class="container mx-auto">
        <div v-for="(audio, index) in $store.state.audios" :key="index">
          <div v-if="index === 0" class="flex">
            <Player :audio="audio" class="w-full" />
            <button class="btn btn-square mt-2 ml-2" @click="collapse = !collapse" :disabled="haveEnoughAudio">
              <span class="text-2xl mdi mdi-arrow-up" v-if="collapse"></span>
              <span class="text-2xl mdi mdi-arrow-down" v-else></span>
            </button>
          </div>
          <div v-if="!collapse" class="animate__animated animate__zoomIn" style="animation-duration: 300ms">
            <Player :audio="audio" v-if="index > 0" class="pr-14" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ready: false,
      error: false,
      collapse: true,
    }
  },
  computed: {
    haveEnoughAudio() {
      return this.$store.state.audios.length < 2
    },
  },
  mounted() {
    document
      .querySelector('html')
      .setAttribute('data-theme', this.$store.state.theme)

    document.onkeydown = function (e) {
      return !(
        e.ctrlKey &&
        (e.keyCode === 65 ||
          e.keyCode === 67 ||
          e.keyCode === 80 ||
          e.keyCode === 86 ||
          e.keyCode === 85 ||
          e.keyCode === 87 ||
          e.keyCode === 70 ||
          e.keyCode === 117)
      )
    }
    document.addEventListener('contextmenu', (event) => event.preventDefault())

    if (window.indexedDB) {
      let request = window.indexedDB.open('claketSoundboard', 1)
      request.onerror = () => {
        alert('Error with IndexedDB')
        this.error = true
      }

      request.onupgradeneeded = (event) => {
        let db = event.target.result
        db.createObjectStore('Sounds', {
          keyPath: 'id',
        })
        db.createObjectStore('Settings', {
          keyPath: 'id',
        })
        this.$store.commit('setDB', db)
        setTimeout(() => {
          this.ready = true
        }, 1000)
      }

      request.onsuccess = (event) => {
        let db = event.target.result
        try {
          db.createObjectStore('Sounds', {
            keyPath: 'id',
          })
          db.createObjectStore('Settings', {
            keyPath: 'id',
          })
        } catch (error) { }

        this.$store.commit('setDB', db)
        this.ready = true
      }
    } else {
      this.error = true
    }
  },
  methods: {
    openDB() { },
  },
}
</script>

