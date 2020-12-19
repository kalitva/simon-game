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
      <div v-if="gameOver" class="message">{{ message }}</div>
      <div class="level">
        <h3>Level:</h3>
        <label for="easy">Easy</label>
        <input v-model="delay" v-bind:value="1500" name="level" id="easy" type="radio" :disabled="!gameOver">
        <label for="medium">Medium</label>
        <input v-model="delay" v-bind:value="1000" name="level" id="medium" type="radio" :disabled="!gameOver">
        <label for="hard">Hard</label>
        <input v-model="delay" v-bind:value="400" name="level" id="hard" type="radio" :disabled="!gameOver">
      </div>
    </div>
  </div>
</template>

<script>
  const CORNERS_COUNT = 4
  export default {
    data() {
      return {
        round: 1,
        level: 'medium',
        corners: null,
        gameKit: [],
        userKit: [],
        delay: 1000,
        message: '',
        gameOver: true,
        lockedClicks: true
      }
    },
    methods: {
      handleClick(event) {
        if (this.lockedClicks) {
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
          this.toNextRound()
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
      toNextRound() {
        this.round += 1
        this.addCase()
        setTimeout(() => this.playKit(), 1000)
        this.userKit = []
      },
      finishGame() {
        this.message = `Sorry, you lost after ${this.round} rounds`
        this.round = 1
        this.gameKit = []
        this.userKit = []
        this.lockedClicks = true
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
    margin-bottom: 50px;
  }

  .game {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 90px;
  }

  .game-board {
    display: flex;
    flex-wrap: wrap;
    width: 303px;
    gap: 3px;
  }

  .game-table {
    margin-top: 30px;
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

  .message {
    margin-top: 15px;
    color: red;
  }

  .level h3 {
    margin-top: 50px;
    margin-bottom: 15px;
  }

  .level input {
    vertical-align: middle;
    margin-left: 5px;
    margin-right: 15px;
  }
</style>
