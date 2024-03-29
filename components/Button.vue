<template>
  <div class="m-2">
    <button :class="'btn btn-claket w-full ' + (isDrag ? 'brightness-125 scale-105 z-50' : '')" @click="clickInput" v-if="sound === null"
      @drop.prevent="loadFile" @dragover.prevent @dragenter.prevent="onDrag" @dragleave.prevent="onDrag">
      <span class="pointer-events-none text-4xl mdi mdi-download animate__animated animate__rubberBand" v-if="isDrag" />
      <span class="pointer-events-none text-3xl mdi mdi-plus" v-else />
      <input type="file" hidden ref="inputFile" @change="loadFile" accept="audio/*" />
    </button>
    <div v-else>
      <button class="btn btn-claket w-full break-all line-clamp-1" v-if="!isMenu" @click.left="playSound"
        @click.right="toggleMenu">
        {{ sound.name }}
      </button>
      <div v-if="isMenu">
        <button class="btn btn-menu w-full break-all line-clamp-1 mb-6" @click.left="removeSound">
          <span class="text-3xl mdi mdi-delete" />
        </button>

        <input v-model="coef" type="range" min="0" max="1" step="0.001" class="range range-sm flex-grow my-5"
          @change="saveFile(sound)" @input="changeCoef" />
        <button class="btn btn-menu w-full break-all line-clamp-1 mt-4" @click.left="toggleMenu">
          <span class="text-lg">Close</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      default: 1,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      sound: null,
      coef: 0.5,
      file: null,
      isMenu: false,
      isDrag: false,
    }
  },
  mounted() {
    this.getSound()
    this.$root.$on('refresh', () => {
      this.getSound()
    })
  },
  methods: {
    onDrag(e) {
      this.isDrag = e.type === "dragenter"
    },
    getSound() {
      this.isMenu = false
      const db = this.$store.getters.getDB
      const transaction = db.transaction(['Sounds'])
      const objectStore = transaction.objectStore('Sounds')
      const request = objectStore.get([this.page, this.index])
      request.onerror = () => {
        this.sound = null
        this.coef = 0.5
      }

      request.onsuccess = () => {
        if (request.result) {
          this.sound = request.result.file
          this.coef = request.result.coef
        } else {
          this.sound = null
          this.coef = 0.5
        }
      }
    },
    removeSound() {
      const db = this.$store.getters.getDB
      const transaction = db.transaction('Sounds', 'readwrite')
      const store = transaction.objectStore('Sounds')
      store.delete([this.page, this.index])
      transaction.oncomplete = () => {
        this.sound = null
        this.coef = 0.5
        this.isMenu = !this.isMenu
      }
    },
    clickInput() {
      this.$refs.inputFile.click()
    },
    loadFile(e) {
      this.isDrag = false
      this.file = null
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      try {
        this.saveFile(files[0])
      } catch (error) {
        console.error(error)
      }
    },
    saveFile(file) {
      const db = this.$store.getters.getDB
      const transaction = db.transaction('Sounds', 'readwrite')
      const store = transaction.objectStore('Sounds')
      store.add({ id: [this.page, this.index], file: file, coef: this.coef })

      transaction.oncomplete = () => {
        this.sound = file
      }

      transaction.onerror = () => {
        const transaction = db.transaction('Sounds', 'readwrite')
        const store = transaction.objectStore('Sounds')
        store.put({ id: [this.page, this.index], file: file, coef: this.coef })
      }
    },
    playSound() {
      this.$store.dispatch('playSound', {
        soundId: [this.page, this.index],
        file: this.sound,
        coef: this.coef,
      })
    },
    changeCoef() {
      this.$store.commit('changeCoef', {
        soundId: [this.page, this.index],
        coef: this.coef,
      })
    },
    toggleMenu(e) {
      e.preventDefault()
      this.isMenu = !this.isMenu
    },
  },
  watch: {
    page() {
      this.getSound()
    },
  },
}
</script>

<style lang="scss" scoped>
.btn-claket {
  height: 200px;
}

.btn-menu {
  height: 50px;
}
</style>
