<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
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
    // state:STATES.ENTERANCE
    state:STATES.GAME
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
