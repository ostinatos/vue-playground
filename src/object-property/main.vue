<template>
  <div>
    <h2>object property test</h2>
    <button @click="handleClick">click to change the whole obj reference</button>
    <button @click="handlePartialUpdate">click to change some prop of the obj</button>
    <!-- pass object to child component -->
    <child-comp :objProp="objData"></child-comp>
  </div>
</template>
<script>
/* 
this demo is for evaluating the reactivity of object property.
*/
import childComp from "./child.vue";
export default {
  components: {
    childComp
  },
  data() {
    return {
      objData: { foo: 1, bar: 2 }
    };
  },
  methods: {
    /* here we change the object reference. */
    handleClick() {
      this.objData = { math: 1, rock: 2 };
    },
    /* here we change some prop of the object, while maintain the reference of the objectÎ */
    handlePartialUpdate() {
        /* 注意切换下面两句，以观察对象属性在赋值前后是否存在带来的响应式的区别 */
    //   this.objData.foo = Math.round(Math.random()*10);
      this.objData.rock = Math.round(Math.random()*10);
    }
  }
};
</script>
