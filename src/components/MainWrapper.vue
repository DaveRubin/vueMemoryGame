<template>
    <div class="main-container">
        <h1>
            title
        </h1>
        <div class="grid">
            <div class="flip-card" 
                @click="flipCard(card)" 
                v-for="card in cards" 
                v-bind:class="{ flip: card.flipped }"
                v-bind:key="card.id" >
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img class="card-image" v-bind:src="card.url"/>
                    </div>
                    <div class="flip-card-back">
                    {{card.title}}
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import Card from './Card';
export default {
    name:"MainWrapper",
    data(){
        return {
        cards: [
            {id:0,title:"A",flipped:false,url:require("../assets/thomas.jpg")},
            {id:1,title:"A",flipped:false,url:require("../assets/thomas.jpg")},
            {id:2,title:"A",flipped:false,url:require("../assets/thomas.jpg")},
            {id:3,title:"A",flipped:false,url:require("../assets/thomas.jpg")},
        ],
        }
    },
    components:{
        Card
    },
    methods:{
        flipCard (card){
            if (this.locked || card.flipped) return;
            card.flipped = !card.flipped;
            const flipped = this.cards.reduce((acc,current)=>current.flipped?acc+1:acc,0);
            if (flipped == 2) {
                this.locked = true;
                setTimeout(()=>{
                    this.cards.forEach(card=>card.flipped = false);
                    this.locked = false;
                },1000);
            }
            console.log(this.cards);
        }
    }
}
</script>

<style>
.main-container{
    width: 400px;
    margin: auto;
}
.grid{
    display: grid;
    grid-template-columns: auto auto ;
    grid-gap: 10px;
}

.flip-card {
  background-color: transparent;
  width: 200px;
  height: 200px;
  perspective: 1000px;
  border-radius: 15px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card.flip .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
    background-color: darksalmon;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 200px;
    z-index: 2;
}

.flip-card-back {
    background-color: darksalmon;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 200px;
    z-index: 2;
  transform: rotateY(180deg);
  z-index: 1;
}

.card-image{
    border-radius: 15px;
    width:180px;
    height:180px;
}

.card-container {
    background-color: darksalmon;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 200px;
}
</style>
