<template>
  <div id="app">
    <div class="background">
        <img src="./assets/backgrounds/back1.jpg"/>
    </div>
    <Enterance :on-start="onStart" v-if="state === 'ENTERANCE'"/>
    <MainWrapper :on-end="onEnd" v-if="state === 'GAME'"/>
    <Ending :replay="onRestart" :score="score" v-if="state === 'END'"/>
  </div>
</template>

<script>
import MainWrapper from './components/MainWrapper.vue'
import Enterance from './components/Enterance.vue'
import Ending from './components/Ending.vue'
const MUSIC = 'https://instrumentalfx.co/wp-content/upload/10/Thomas-The-Tank-Engine-Theme-Song.mp3';

const STATES = {
  ENTERANCE:"ENTERANCE",
  GAME:"GAME",
  END:"END",
}

export default {
  name: 'app',
  created: async()=>{
      const media = new Audio(MUSIC);
      media.addEventListener('canplaythrough', ()=>{
          media.loop = true;
          media.play();
      }, false);
  },
  data:()=>({
    state:STATES.ENTERANCE,
    score:0,
  }),
  methods:{
    onStart(){
      this.state = STATES.GAME;
    },
    onEnd(score){
      this.score = score;
      this.state = STATES.END;
    },
    onRestart(){
      this.state = STATES.ENTERANCE;
    }
  },
  components: {
    MainWrapper,
    Enterance,
    Ending
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
