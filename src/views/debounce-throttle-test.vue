<template>
  <div>
    <!-- <div>
      <p>current event handing mode: {{eventMode}}</p>
      <button @click="eventMode='native'">native</button>
      <button @click="eventMode='debounce'">debounce</button>
      <button @click="eventMode='throttle'">throttle</button>
    </div>-->
    <div class="showcase-container" @scroll="handleScroll" ref="showcaseContainer">
      <div v-for="item in showcaseItems" :key="item.key" class="showcase-item"></div>
    </div>
    <div class="stat panel">
      <p>number of scroll events executed: {{handlerTriggerCount}}</p>
      <p>number of getNewItems executed: {{getNewItemInvokeCount}}</p>
    </div>
  </div>
</template>
<script>
import { advDebounce as debounce } from "@/utils/debounce";
import { throttle } from "@/utils/throttle";
// import { throttle } from "lodash";
export default {
  data() {
    return {
      showcaseItems: [],
      handlerTriggerCount: 0,
      getNewItemInvokeCount: 0,
      handleScroll: throttle(this.scrollLogic, 300),
      //   handleScroll: this.scrollLogic,
      eventMode: "native" // native, debounce, throttle
    };
  },
  created() {
    //   init showcase items
    this.getNewItems();
  },
  methods: {
    // handleScroll() {
    //   this.scrollLogic();
    // },
    scrollLogic() {
      this.handlerTriggerCount++;
      //   console.log("executing handleScroll...");
      let distance =
        this.$refs.showcaseContainer.scrollHeight -
        this.$refs.showcaseContainer.scrollTop -
        this.$refs.showcaseContainer.clientHeight;
      // console.log("distance: ", distance)
      if (distance < 400) {
        this.getNewItems();
      }
    },
    getNewItems() {
      this.getNewItemInvokeCount++;
      let now = new Date().getTime();
      for (let i = 0; i <= 5; i++) {
        this.showcaseItems.push({
          key: now + i
        });
      }
    }
  }
};
</script>
<style scoped>
.showcase-container {
  background: lightslategrey;
  width: 400px;
  height: 500px;
  float: left;
  margin: 2em;
  overflow-y: auto;
}

.showcase-item {
  width: 250px;
  height: 200px;
  background: lightblue;
  margin: 1em;
}

.stat-panel {
  float: left;
}
</style>
