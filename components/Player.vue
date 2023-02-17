<template>
  <div class="flex my-2">
    <button class="btn btn-square mx-2" @click="togglePause">
      <span v-if="audio.paused" class="text-2xl mdi mdi-play"></span>
      <span v-else class="text-2xl mdi mdi-pause"></span>
    </button>
    <button class="btn btn-square mr-2" @click="stopAudio">
      <span class="text-2xl mdi mdi-stop"></span>
    </button>
    <div class="w-full">
      <input type="range" class="range range-sm" v-model="currentTime" :max="duration" min="0" step="0.00001"
        @mousedown="mouseDown" @mouseup="mouseUp" @input="changeCurrentTime" />
      <p class="text-xs -mt-1">{{ audio.name }}</p>
      <p class="text-xs">{{ formatTime }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    audio: {
      type: HTMLAudioElement,
    },
  },
  data() {
    return {
      interval: null,
      currentTime: 0,
      duration: 0,
      click: false,
      clickWhilePlaying: false,
      wasPausedWhileClick: false,
    }
  },
  methods: {
    togglePause() {
      if (this.audio.paused) {
        this.audio.play()
        this.audio.playback.play()
        this.wasPausedWhileClick = this.audio.paused
        this.$store.commit('setPaused', false)
        return
      }
      this.audio.pause()
      this.audio.playback.pause()
      this.wasPausedWhileClick = this.audio.paused
    },
    stopAudio() {
      this.audio.pause()
      this.audio.playback.pause()
      this.audio.currentTime = this.audio.duration
      this.audio.playback.currentTime = this.audio.playback.duration
      this.$store.commit('removeAudio', this.audio)
    },
    changeCurrentTime() {
      if (this.click) {
        this.audio.currentTime = this.currentTime
        this.audio.playback.currentTime = this.currentTime
        this.currentTime = this.audio.currentTime
      }
    },
    mouseDown() {
      this.click = true
      if (!this.audio.paused) {
        this.audio.pause()
        this.audio.playback.pause()
        this.clickWhilePlaying = true
      }
      this.changeCurrentTime()
    },
    mouseUp() {
      this.click = false
      if (
        this.audio.paused &&
        this.clickWhilePlaying &&
        !this.wasPausedWhileClick
      ) {
        this.audio.play()
        this.audio.playback.play()
        this.clickWhilePlaying = false
      }
      this.changeCurrentTime()
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentTime = this.audio.currentTime
      this.duration = this.audio.duration
    }, 5)
  },
  computed: {
    formatTime() {
      let minutes_c = Math.floor(this.currentTime / 60)
      minutes_c = minutes_c >= 10 ? minutes_c : '0' + minutes_c
      let seconds_c = Math.floor(this.currentTime % 60)
      seconds_c = seconds_c >= 10 ? seconds_c : '0' + seconds_c

      let minutes_d = Math.floor(this.duration / 60)
      minutes_d = minutes_d >= 10 ? minutes_d : '0' + minutes_d
      let seconds_d = Math.floor(this.duration % 60)
      seconds_d = seconds_d >= 10 ? seconds_d : '0' + seconds_d
      return minutes_c + ':' + seconds_c + ' / ' + minutes_d + ':' + seconds_d
    },
  },
  destroyed() {
    clearInterval(this.interval)
  },
}
</script>

<style lang="scss" scoped></style>
