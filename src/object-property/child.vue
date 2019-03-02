<template>
  <div>
    <h3>child component</h3>
    <p>{{objPropString}}</p>
  </div>
</template>
<script>
export default {
  props: {
    objProp: {
      type: Object
    }
  },
  watch: {
    /* watcher of the object property */
    objProp: {
      /* from the demo result, 
      if the "deep" flag is false (default case), 
      only when the object reference is changed then this handler will be fired.
      if the "deep" flag is true, 
      the handler will be fired when either of these happen:
      1. the object reference being changed
      2. the object property being changed *
      但是注意，只有给对象赋值时具有的属性，才会触发deep handler，也就是说给props赋值后再给对象添加的属性，将不会触发deep handler，也就是不会有响应式。
      */
      handler: function(val) {
        console.debug("new obj prop value received:", val);
      }
      // deep: true
    }
  },
  /* 对象属性的计算属性
  从行为上可以看出，computed属性对于对象prop，默认就是启用了deep watch模式
  也就是说，对象prop中已经存在的属性，当值发生变化时，会触发计算属性值的运算
  */
  computed: {
    objPropString() {
      return JSON.stringify(this.objProp);
    }
  }
};
</script>