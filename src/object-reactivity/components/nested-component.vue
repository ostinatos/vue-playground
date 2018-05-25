<template>
    <div>
        <p>watcher for foods.basket.apple (nested component)</p>
        <p class="dynamic-content">{{innerBasket.apple}}</p>
        <p>foods in a list (nested component)</p>
        <p v-for="food in innerFoods" :key="food">
            {{food}}
        </p>
    </div>
</template>
<script>
export default {
    props:{
        basket:{
            type: Object,
            default(){
                return {};
            }
        },
        foods:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    data(){
        return {
            innerBasket: this.basket,
            innerFoods: this.foods
        }
    }
}
</script>

<style scoped>
.dynamic-content{
    color:red;
}
</style>
