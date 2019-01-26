<template>
    <div class="main-container">
        <div class="info">
            <div class="rounds-count">
                {{rounds}}
            </div>
            <div class="percent-bar">
                <div class="bar">
                    <div class="fill" v-bind:style="{width:percent+'%'}"></div>
                </div>
            </div>
        </div>
        <div class="grid">
            <div class="flip-card"
                @click="flipCard(card)" 
                v-for="card in cards" 
                v-bind:class="{ flip: card.flipped, done:card.done }"
                v-bind:key="card.id" >
                <div class="flip-card-inner">
                    <div class="card-background flip-card-front">
                        <div class="image-container front">
                            <img class="card-image front" src="../assets/thomasLogo.png"/>
                        </div>
                    </div>
                    <div class="card-background flip-card-back">
                        <div class="image-container">
                            <img class="card-image" v-bind:src="card.url"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
import Card from './Card';
import {getShuffleImages} from './consts';

const DING_SOUND = 'http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3';
const CHEER_SOUND = 'https://freesound.org/data/previews/333/333404_5884138-lq.mp3';


const getCard =(images)=> (val,index)=> {
    const url = require(images[index]);
    return {id:index,title:`A${index}`,flipped:false,url };
}

export default {
    name:"MainWrapper",
    data(){

        const images = [
            require('../assets/minis/MinisClassicBen.jpg'),
            require('../assets/minis/MinisClassicEmily.jpg'),
            require('../assets/minis/MinisClassicFerdinand.jpg'),
            require('../assets/minis/MinisClassicHenry.png'),
            require('../assets/minis/MinisClassicHiro.jpg'),
            require('../assets/minis/MinisClassicJames.jpg'),
            require('../assets/minis/MinisClassicThomas.png'),
            require('../assets/minis/MinisClassicToby.jpg'),
        ];

        const cards = getShuffleImages(images)
            .filter(a=>a)
            .map((imageUrl,index)=> {
            return {id:index,title:`A${index}`,flipped:false,url:imageUrl };
        });

        return {
            cards,
            rounds:0,
            percent:0,
        }
    },
    components:{
        Card
    },
    methods:{
        onUnlock() {
            const flipped = this.cards.filter(card=> card.flipped && !card.done);
            if (flipped[0].url === flipped[1].url) {
                this.$set(flipped[0],"done",true);
                this.$set(flipped[1],"done",true);
                new Audio(CHEER_SOUND).play();
            }
            new Audio(DING_SOUND).play();
            this.cards.forEach(card=> card.flipped = card.done);
            this.locked = false;
            this.rounds++;
            const totalDone  = this.cards.filter(card=>card.done);
            this.percent = (totalDone.length/this.cards.length)*100;
        },
        flipCard (card){
            if (this.locked || card.flipped) return;
            card.flipped = !card.flipped;
            
            
            const flipped = this.cards.filter(card=> card.flipped && !card.done);
            if (flipped.length == 2) {
                this.locked = true;
                setTimeout(this.onUnlock,500);
            }
            
        }
    }
}
</script>

<style>
:root {
  --cardSize: 150px;
  --imageSize: 140px;
  --backColor: #1294CF;
}

.info{
    background-color: var(--backColor);
    color:white;
    margin: 10px 0;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 100px auto;
    height:60px;
}
.rounds-count {
    line-height: 60px;
    font-weight: bolder;
    font-size: 30px;
}
.percent-bar {
    display: flex;
    align-content: center;
    padding: 10px;
}
.bar {
    width: 100%;
    background-color:rgb(10, 71, 100);
    border-radius: 20px;
    overflow: hidden;
    padding: 3px;
}
.fill {
    transition: width 0.2s;
    height: 100%;
    border-radius: 20px;
    background-color: rgb(74, 219, 255);
}

.main-container{
    width: 640px;
    margin: auto;
}
.grid{
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
}

.flip-card {
  background-color: transparent;
  width: var(--cardSize);
  height: var(--cardSize);
  perspective: 1000px;
  border-radius: 15px;
  transition: transform 0.5s,opacity 0.5s;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s,opacity 1s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card.flip .flip-card-inner {
  transform: rotateY(180deg);
}


.flip-card.done {
  opacity: 0;
  transform: scale(1.1);
}


.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-background {
    background-color: var(--backColor);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--cardSize);
    width: var(--cardSize);
}
.flip-card-front {
    z-index: 2;
}

.flip-card-back {
    transition: opacity 1s;
    transform: rotateY(180deg);
    z-index: 1;
}

.image-container{
    position: relative;
    background-color: white;
    overflow: hidden;
    border-radius: 15px;
    width:var(--imageSize);
    height:var(--imageSize);
}

.card-image{
    height: 80%;
    position: absolute;
    margin: auto; 
    min-height: 80%;
    min-width: 80%;
    left: -100%;
    right: -100%;
    top: -100%;
    bottom: -100%;
}
.card-image.front{
    height: 0;
    position: absolute;
    margin: auto; 
    min-height: 50%;
    min-width: 50%;
    left: -100%;
    right: -100%;
    top: -100%;
    bottom: -100%;
}

</style>
