<template>
    <div>
        <p>watcher for foods.basket.apple (nested readonly component)</p>
        <p class="dynamic-content">{{basket.apple}}</p>
        <p>foods in a list (nested readonly component)</p>
        <p v-for="food in foods" :key="food">
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
    }
}
</script>

<style scoped>
.dynamic-content{
    color:red;
}
</style>
