<template>
  <div class="flex mt-5">
    <button class="btn btn-square mr-2 flex-shrink" @click="toggleVolume">
      <span v-if="volume > 0.33" class="text-2xl mdi mdi-volume-high"></span>
      <span v-if="volume <= 0.33 && 0 < volume" class="text-2xl mdi mdi-volume-medium"></span>
      <span v-if="volume <= 0" class="text-2xl mdi mdi-volume-off"></span>
    </button>
    <input v-model="volume" type="range" min="0" max="1" step="0.001" class="range range-sm flex-grow mt-3"
      @input="changeVolume" @change="saveVolume" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.getVolume()
    window.addEventListener('keydown', (e) => {
      switch (e.code) {
        case 'KeyM':
        case 'Semicolon':
          e.preventDefault()
          this.toggleVolume()
          break
        case 'NumpadSubtract':
          e.preventDefault()
          this.volume - 0.1 < 0 ? this.volume = 0 : this.volume -= 0.1
          this.changeVolume()
          this.saveVolume()
          break
        case 'NumpadAdd':
          e.preventDefault()
          this.volume + 0.1 > 1 ? this.volume = 1 : this.volume += 0.1
          this.changeVolume()
          this.saveVolume()
          break
      }
    })
  },
  data() {
    return {
      volume: 0.5,
      volumeBackup: 0,
    }
  },
  methods: {
    getVolume() {
      const db = this.$store.getters.getDB
      const transaction = db.transaction(['Settings'])
      const objectStore = transaction.objectStore('Settings')
      const request = objectStore.get('volume')
      request.onerror = () => {
        this.volume = 0.5
      }

      request.onsuccess = () => {
        if (request.result) {
          this.volume = request.result.value
          this.$store.commit('setVolume', this.volume)
        } else {
          this.volume = 0.5
        }
      }
    },
    toggleVolume() {
      if (this.volume > 0) {
        this.volumeBackup = this.volume
        this.volume = 0
      } else {
        this.volume = this.volumeBackup
      }
      this.saveVolume()
    },
    changeVolume() {
      this.$store.commit('setVolume', this.volume)
    },
    saveVolume() {
      const db = this.$store.getters.getDB
      const transaction = db.transaction('Settings', 'readwrite')
      const store = transaction.objectStore('Settings')
      store.add({ id: 'volume', value: this.volume })

      transaction.oncomplete = () => {
        this.$store.commit('setVolume', this.volume)
      }

      transaction.onerror = () => {
        const transaction = db.transaction('Settings', 'readwrite')
        const store = transaction.objectStore('Settings')
        store.put({ id: 'volume', value: this.volume })
        this.$store.commit('setVolume', this.volume)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
