<template>
  <h1>Simon Says</h1>
  <div class=game>
    <div class="game-board">
      <div ref="blueCorner" class="corner blue-corner" @click="highlightCorner"></div>
      <div ref="redCorner" class="corner red-corner" @click="highlightCorner"></div>
      <div ref="yellowCorner" class="corner yellow-corner" @click="highlightCorner"></div>
      <div ref="greenCorner" class="corner green-corner" @click="highlightCorner"></div>
    </div>
    <div class="game-table">
      <h2>Round: {{ round }}</h2>
      <button :disabled="startButtonDisabled" @click="startGame">Start</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        round: 0,
        gameKit: [],
        userKit: [],
        delay: 500,
        startButtonDisabled: false
      }
    },
    methods: {
      highlightCorner(event) {
        event.target.classList.add('corner-lite')
        setTimeout(() => event.target.classList.remove('corner-lite'), 400)
      },
      startGame() {
        const randomNumber = Math.floor(Math.random() * 4)
        this.gameKit.push(this.corners[randomNumber])
        this.playKit()
      },
      playKit() {
        this.startButtonDisabled = true
        let delay = 0
        this.gameKit.forEach(corner => {
          setTimeout(() => {
            corner.ref.click()
            corner.sound.play()
          }, delay)
          delay += this.delay
        })
        setTimeout(() => this.startButtonDisabled = false, delay)
      }
    },
    mounted() {
      this.corners = [
        { ref: this.$refs.blueCorner, sound: new Audio(require('./assets/blue_sound.mp3')) },
        { ref: this.$refs.redCorner, sound: new Audio(require('./assets/red_sound.mp3')) },
        { ref: this.$refs.yellowCorner, sound: new Audio(require('./assets/yellow_sound.mp3')) },
        { ref: this.$refs.greenCorner, sound: new Audio(require('./assets/green_sound.mp3')) }
      ]
    }
  }
</script>

<style>
  #app h1 {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 100px;
  }

  .game {
    display: flex;
    justify-content: center;
    column-gap: 90px;
  }

  .game-board {
    display: flex;
    flex-wrap: wrap;
    width: 303px;
    gap: 3px;
  }

  .game-table button {
    margin-top: 20px;
    padding: 10px 50px;
    border-radius: 5px;
    background-color: lightblue;
    font-size: 18px;
    cursor: pointer;
  }

  .game-table button[disabled] {
    background-color: lightgray;
    cursor: default;
  }
</style>
