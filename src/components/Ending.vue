<template>
    <div>
        <h1 dir="rtl"  class="endingScore">כל הכבוד!</h1>
        <h1 dir="rtl"  class="endingScore">סיימת ב  {{score}} סיבובים</h1>
        <button class="start-button" @click="replayClicked">שחק שוב</button>
    </div>
</template>

<script>
export default {
    name:"Ending",
    props:{
        score:String,
        replay:Function
    },
    methods:{

        replayClicked(){
            this.replay();
        }
    },
}
</script>

<style>
.endingScore {
    font-size: 80px;
    padding: 0;
    margin: 0;
    color: white;
    text-shadow: 0px 0px 40px;
}
</style>
