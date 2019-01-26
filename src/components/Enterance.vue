<template>
    <div>
        <button class="start-button" @click="start">התחל</button>
        <img class="moving-train" src="../assets/movingTrain.png"/>
        <img src="../assets/cloud.png" class="cloud"/>
        <img src="../assets/cloud.png" class="cloud secondery"/>
    </div>
</template>

<script>

const CLICK_SOUND = 'http://soundbible.com/mp3/Click2-Sebastian-759472264.mp3';
const MUSIC = 'https://instrumentalfx.co/wp-content/upload/10/Thomas-The-Tank-Engine-Theme-Song.mp3';

export default {
    name:"Enterance",
    created:async()=>{
        const media = new Audio(MUSIC);
        const playPromise = media.play();
        if (playPromise !== null){
            playPromise.catch(() => { media.play(); })
        }
    },
    methods:{
        start(){
            new Audio(CLICK_SOUND).play();
            this.onStart();
        }
    },
    props:{
        onStart:Function
    }
}
</script>

<style>
.start-button{
    width: 300px;
    height: 100px;
    box-shadow: 0px 0px 30px white;
    border-radius: 15px;
    color:  var(--backColor);
    font-size: 50px;
    font-weight: 900;

    outline: none;
    cursor: pointer;
}
.start-button:active {
    box-shadow: 0px 0px 50px white;
    border: none;
}

@keyframes enterance{
    0% {
    right:-400px;
  }
  /* Adding a step in the middle */
  50% {
    right:-400px;
  }
  100% {
    right:0;
  }
}

@keyframes squash{
    0% {
    height: 248px;
  }
  /* Adding a step in the middle */
  90% {
    height: 248px;
  }
  95% {
    height: 230px;
  }
  100% {
    height: 248px;
  }
}

@keyframes goUp{
    0% {
    opacity: 0;
  }
  /* Adding a step in the middle */
  10% {
    width: 20px;
    height: 20px;
    transform: rotate(0deg);
    bottom: 230px;
    right: 240px;
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  50% {
    opacity: 0;
    bottom: 380px;
    width: 60px;
    height: 60px;
    transform: rotate(40deg);
  }
  100% {
    opacity: 0;
  }
}

@keyframes goUp2{
    0% {
    opacity: 0;
  }
  /* Adding a step in the middle */
  12% {
    width: 20px;
    height: 20px;
    transform: rotate(0deg);
    bottom: 230px;
    right: 240px;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  40% {
    opacity: 0;
    bottom: 300px;
    right: 180px;
    width: 60px;
    height: 60px;
    transform: rotate(40deg);
  }
  100% {
    opacity: 0;
  }
}

.moving-train{
    position: fixed;
    bottom: 0;
    width: 400px;
    right: 0;
    animation: enterance 2s, squash 4s infinite;
}

.cloud {
    position: fixed;
    bottom: 230px;
    width: 40px;
    height: 40px;
    display: block;
    right: 225px;
    z-index: 100;
    opacity: 0;
    animation: goUp 4s linear 3.6s infinite;
}

.cloud.secondery {
    animation: goUp2 4s linear 3.6s infinite;
}
</style>
