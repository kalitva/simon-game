<template>
  <div class="game-board">
    <BlueCorner />
    <RedCorner />
    <YellowCorner />
    <GreenCorner />
  </div>
</template>

<script>
  import RedCorner from './components/RedCorner'
  import BlueCorner from './components/BlueCorner'
  import YellowCorner from './components/YellowCorner'
  import GreenCorner from './components/GreenCorner'

  export default {
    components: { BlueCorner, RedCorner, YellowCorner, GreenCorner }
  }
</script>

<style>
  #app {
    display: flex;
    height: 100vh;
  }

  .game-board {
    display: flex;
    flex-wrap: wrap;
    width: 303px;
    margin: auto auto;
    gap: 3px;
  }
</style>
