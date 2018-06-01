<template>
    <div>
        <p>watcher for foods.basket.apple</p>
        <p class="dynamic-content">{{foods.basket.apple}}</p>
        <p>foods in a list</p>
        <p v-for="food in foods.list" :key="food">
            {{food}}
        </p>
        <nested-component :basket="foods.basket" :foods="foods.list"></nested-component>
        <nested-readonly-component :basket="foods.basket" :foods="foods.list"></nested-readonly-component>
        <nested-render-component :basket="foods.basket" ></nested-render-component>
    </div>
</template>
<script>
import nestedComponent from './components/nested-component.vue'
import nestedReadonlyComponent from './components/nested-readonly-component.vue'
import nestedRenderComponent from './components/nested-render-component'
export default {
    components:{
        nestedComponent,
        nestedReadonlyComponent,
        nestedRenderComponent
    },
    data(){
        return {
            foods:{
                basket:{
                    apple: "apple in a basket"
                },
                list:[
                    "potato","tomato", "pizza"
                ]
            }
        }
    },
    mounted(){
        window.foods = this.foods;

        /* 
        try following assignment, to see which will retain reactivity.

        window.foods.basket.apple = "new apple in the basket."

        Vue.set(foods.basket, "apple", "new apple");

        window.foods.basket = {apple: "new apple in the basket"};

        Vue.set(foods, "basket", {apple:"new apple"});
         */
    }
}
</script>
<style scoped>
.dynamic-content{
    color:red;
}
</style>
