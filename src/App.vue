<template>
  <h1>Simon Says</h1>
  <div class=game>
    <div class="game-board">
      <div ref="blueCorner" class="corner blue-corner" @click="handleClick"></div>
      <div ref="redCorner" class="corner red-corner" @click="handleClick"></div>
      <div ref="yellowCorner" class="corner yellow-corner" @click="handleClick"></div>
      <div ref="greenCorner" class="corner green-corner" @click="handleClick"></div>
    </div>
    <div class="game-table">
      <h2>Round: {{ round }}</h2>
      <button :disabled="!gameOver" @click="startGame">Start</button>
    </div>
  </div>
</template>

<script>
  const CORNERS_COUNT = 4
  export default {
    data() {
      return {
        round: 1,
        corners: null,
        gameKit: [],
        userKit: [],
        delay: 1000,
        gameOver: true,
        lockedClicks: true
      }
    },
    methods: {
      handleClick(event) {
        if (this.beingPlayed) {
          return
        }
        this.highlightCorner(event.target)
        this.userKit.push(event.target)
        this.checkUserClicks()
      },
      highlightCorner(corner) {
        corner.classList.add('corner-lite')
        corner.sound.play()
        setTimeout(() => corner.classList.remove('corner-lite'), 300)
      },
      startGame() {
        this.gameOver = false
        this.addCase()
        this.playKit()
      },
      addCase() {
        const randomNumber = Math.floor(Math.random() * CORNERS_COUNT)
        this.gameKit.push(this.corners[randomNumber])
      },
      playKit() {
        let delay = 0
        this.lockedClicks = true
        this.gameKit.forEach(corner => {
          setTimeout(() => this.highlightCorner(corner), delay)
          delay += this.delay
        })
        setTimeout(() => this.lockedClicks = false, delay)
      },
      checkUserClicks() {
        const [gameKitString, userKitString] = this.kitsToString()
        if (gameKitString === userKitString) {
          this.nextRound()
        }
        if (!gameKitString.startsWith(userKitString)) {
          this.finishGame()
        }
      },
      kitsToString() {
        return [
          this.gameKit.map(corner => corner.id).join``,
          this.userKit.map(corner => corner.id).join``
        ]
      },
      nextRound() {
        this.round += 1
        this.addCase()
        setTimeout(() => this.playKit(), this.delay)
        this.userKit = []
      },
      finishGame() {
        this.round = 1
        this.gameKit = []
        this.userKit = []
        this.gameOver = true
      }
    },
    mounted() {
      this.corners = [
        this.$refs.blueCorner, this.$refs.redCorner, this.$refs.yellowCorner, this.$refs.greenCorner
      ]
      this.corners.forEach((corner, index) => corner.id = index)
      this.$refs.blueCorner.sound = new Audio(require('./assets/blue_sound.mp3'))
      this.$refs.redCorner.sound = new Audio(require('./assets/red_sound.mp3'))
      this.$refs.yellowCorner.sound = new Audio(require('./assets/yellow_sound.mp3'))
      this.$refs.greenCorner.sound = new Audio(require('./assets/green_sound.mp3'))
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
