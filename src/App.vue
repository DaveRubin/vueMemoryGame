<template>
  <div id="app">
    <div class="background">
        <img src="./assets/backgrounds/back1.jpg"/>
    </div>
    <MainWrapper v-if="state === 'GAME'"/>
    <Enterance :on-start="onStart" v-if="state === 'ENTERANCE'"/>
  </div>
</template>

<script>
import MainWrapper from './components/MainWrapper.vue'
import Enterance from './components/Enterance.vue'

const STATES = {
  ENTERANCE:"ENTERANCE",
  GAME:"GAME",
}

export default {
  name: 'app',
  data:()=>({
    state:STATES.ENTERANCE
    // state:STATES.GAME
  }),
  methods:{
    onStart(){
      this.state = STATES.GAME;
    }
  },
  components: {
    MainWrapper,
    Enterance
  }
}
</script>

<style>
body{
  position: fixed;
  margin: 0;
  height: 100%;
  top: 0;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.background{
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1000;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: var(--backColor);
}
.background img{
    min-width: 100%;
    min-height: 100%;
    opacity: 0.4;
}
</style>
