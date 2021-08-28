<template>
  <section class="container mx-auto px-1 md:px-0">
    <div class="grid grid-cols-1 md:grid-cols-2 mx-2">
      <svg
        class="min-w-full animate__animated animate__backInDown"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 350.000000 138.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,138.000000) scale(0.100000,-0.100000)"
          style="fill: hsla(var(--bc))"
          stroke="none"
        >
          <path
            d="M131 1286 c-51 -28 -50 -23 -51 -593 0 -392 3 -539 12 -558 25 -55
27 -55 538 -55 511 0 513 0 538 55 9 19 12 166 12 556 0 575 0 572 -55 597
-40 18 -961 16 -994 -2z m680 -215 c74 -28 133 -80 154 -136 30 -78 -4 -135
-81 -135 -53 0 -90 29 -138 108 -45 74 -75 101 -118 108 -46 8 -90 -15 -120
-63 -20 -34 -23 -50 -22 -143 0 -84 5 -116 22 -161 44 -111 128 -179 221 -179
71 0 99 14 159 78 44 47 56 55 70 46 42 -27 14 -137 -53 -212 -61 -67 -129
-95 -240 -95 -70 -1 -89 3 -147 30 -213 100 -301 373 -189 590 45 88 123 152
220 180 64 18 193 10 262 -16z"
          />
          <path
            d="M1546 925 c-174 -66 -221 -283 -89 -412 45 -43 116 -73 173 -73 35 0
120 27 144 45 19 14 19 15 2 34 -18 20 -18 20 -54 0 -91 -48 -216 -8 -261 83
-57 118 9 250 139 279 32 7 53 5 98 -10 55 -19 58 -19 75 -2 18 18 17 19 -29
42 -59 28 -144 34 -198 14z"
          />
          <path
            d="M1860 695 l0 -245 25 0 25 0 0 245 0 245 -25 0 -25 0 0 -245z"
          />
          <path
            d="M2420 695 l0 -245 30 0 c30 0 30 1 30 53 0 44 4 58 25 77 l26 24 78
-78 c66 -66 82 -77 107 -74 29 3 28 4 -58 95 -49 50 -88 95 -88 100 0 5 32 40
70 78 39 38 70 73 70 77 0 5 -13 8 -29 8 -24 0 -45 -17 -115 -92 l-86 -92 0
157 0 157 -30 0 -30 0 0 -245z"
          />
          <path
            d="M3250 850 c0 -36 -2 -40 -25 -40 -20 0 -25 -5 -25 -25 0 -20 5 -25
25 -25 l25 0 0 -134 c0 -74 3 -142 6 -151 9 -23 50 -37 90 -29 28 5 34 11 34
31 0 22 -3 24 -26 19 -48 -12 -54 5 -54 140 l0 124 40 0 c36 0 40 3 40 25 0
23 -4 25 -40 25 l-40 0 0 40 c0 36 -2 40 -25 40 -22 0 -25 -4 -25 -40z"
          />
          <path
            d="M2065 787 c-61 -34 -87 -87 -83 -169 4 -75 21 -107 78 -145 65 -45
151 -39 204 13 l26 27 0 -32 c0 -26 4 -31 25 -31 l25 0 0 180 0 180 -25 0
c-21 0 -25 -5 -25 -32 l0 -31 -22 20 c-37 33 -64 43 -115 43 -31 0 -62 -8 -88
-23z m183 -61 c35 -32 37 -38 37 -94 0 -72 -23 -110 -78 -131 -104 -39 -201
59 -168 169 17 57 61 90 122 90 42 0 55 -5 87 -34z"
          />
          <path
            d="M2895 796 c-66 -29 -111 -114 -102 -192 13 -120 144 -195 261 -150
56 21 73 40 56 60 -10 13 -17 12 -51 -6 -62 -32 -133 -22 -176 26 -18 19 -33
45 -33 56 0 19 6 20 150 20 l150 0 0 38 c0 51 -37 112 -85 139 -46 26 -122 30
-170 9z m132 -45 c38 -18 73 -61 73 -91 0 -6 -44 -10 -125 -10 -81 0 -125 4
-125 10 0 37 50 91 95 103 33 8 39 7 82 -12z"
          />
        </g>
      </svg>
      <div>
        <select
          class="
            select select-bordered
            w-full
            mt-5
            bg-base-100
            animate__animated animate__backInDown
          "
          @click="loadDevices"
          v-model="device"
          @change="changeDevice"
          v-if="devices.length > 1"
        >
          <option
            v-for="device in devices"
            :key="device.deviceId"
            :value="device.deviceId"
          >
            {{ device.kind === 'audioinput' ? 'INPUT' : 'OUTPUT' }} -
            {{ device.label }}
          </option>
        </select>
        <select
          class="
            select select-bordered
            w-full
            mt-5
            animate__animated animate__backInDown
          "
          v-model="theme"
          @change="changeTheme"
        >
          <option v-for="theme in themes" :key="theme" :value="theme">
            {{ theme.charAt(0).toUpperCase() + theme.slice(1) }}
          </option>
        </select>
        <Volume class="animate__animated animate__backInDown" />
      </div>
    </div>
    <div class="mt-2 text-right mr-2 animate__animated animate__backInUp">
      <button
        class="btn btn-square flex-shrink tooltip"
        @click="lastPage"
        :disabled="isFirstPage"
        data-tip="Previous Page"
      >
        <span class="text-2xl mdi mdi-arrow-left"></span>
      </button>
      <span class="font-mono text-4xl countdown mt-5">
        <span :style="'--value: ' + page" class="page-count"></span>
      </span>
      <button
        class="btn btn-square flex-shrink tooltip"
        @click="nextPage"
        :disabled="isLastPage"
        data-tip="Next Page"
      >
        <span class="text-2xl mdi mdi-arrow-right"></span>
      </button>
      <button
        class="btn btn-square tooltip"
        v-if="$store.state.paused || $store.state.audios.length === 0"
        :disabled="haveAudio"
        @click="playAll"
        data-tip="Resume"
      >
        <span class="text-2xl mdi mdi-play"></span>
      </button>
      <button
        class="btn btn-square tooltip"
        v-else
        @click="pauseAll"
        data-tip="Pause"
      >
        <span class="text-2xl mdi mdi-pause"></span>
      </button>
      <button class="btn btn-square tooltip" @click="stopAll" data-tip="Stop">
        <span class="text-2xl mdi mdi-stop"></span>
      </button>
      <button
        class="btn btn-square tooltip"
        @click="toggleLoop"
        data-tip="Loop"
      >
        <span class="text-2xl mdi mdi-sync" v-if="$store.state.loop"></span>
        <span class="text-2xl mdi mdi-sync-off" v-else></span>
      </button>
      <button
        class="btn btn-square tooltip"
        @click="togglePlayback"
        data-tip="Playback"
      >
        <span
          class="text-2xl mdi mdi-speaker"
          v-if="$store.state.playback"
        ></span>
        <span class="text-2xl mdi mdi-speaker-off" v-else></span>
      </button>
      <button
        class="btn btn-square tooltip"
        @click="resetPage"
        data-tip="Delete Page"
      >
        <span class="text-2xl mdi mdi-delete"></span>
      </button>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 mt-5">
      <Button
        v-for="n in 24"
        :key="n"
        :page="page"
        :index="n"
        class="animate__animated animate__backInUp"
        :style="'animation-delay: ' + n * 20 + 'ms'"
      />
    </div>
  </section>
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

      transaction.oncomplete = (event) => {}

      transaction.onerror = (event) => {
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

      transaction.oncomplete = (event) => {}

      transaction.onerror = (event) => {
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
      request.onerror = (event) => {
        this.theme = this.$store.state.theme
        this.$store.commit('setTheme', this.theme)
      }

      request.onsuccess = (event) => {
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

      request.onsuccess = (event) => {
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

      request.onsuccess = (event) => {
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
              .map(
                (d) =>
                  (d = {
                    deviceId: d.deviceId,
                    kind: d.kind,
                    label: d.label,
                    groupId: d.groupId,
                  })
              )

            if (this.devices.length === 0) {
              this.devices = devices
                .filter((d) => d.kind === 'audioinput')
                .map(
                  (d) =>
                    (d = {
                      deviceId: d.deviceId,
                      kind: d.kind,
                      label: d.label,
                      groupId: d.groupId,
                    })
                )
            }
            const db = this.$store.getters.getDB
            const transaction = db.transaction(['Settings'])
            const objectStore = transaction.objectStore('Settings')
            const request = objectStore.get('deviceId')
            request.onerror = (event) => {
              try {
                this.device = this.devices[0].deviceId
              } catch (error) {}
              this.$store.commit('setDevice', this.device)
            }

            request.onsuccess = (event) => {
              if (request.result) {
                this.device = request.result.value
              } else {
                try {
                  this.device = this.devices[0].deviceId
                } catch (error) {}
              }
              this.$store.commit('setDevice', this.device)
            }
          })
        })
        .catch(() => {})
    },
    resetPage() {
      const db = this.$store.getters.getDB
      const transaction = db.transaction(['Sounds'], 'readwrite')
      const objectStore = transaction.objectStore('Sounds')
      for (let i = 1; i <= 24; i++) {
        let request = objectStore.delete([this.page, i])
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
