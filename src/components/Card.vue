<template>
    <div class="card-container"> 
        {{data.title}}
    </div>
</template>

<script>
export default {
    name:"Card",
    props:{
        data:Object,
    }
}
</script>

<style>
</style>
