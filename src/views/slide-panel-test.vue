<template>
  <div>
    <h1>slide panel test</h1>
    <div>
      <button @click="showPanel">show</button>
      <button @click="showExtPanel">show extend panel</button>
    </div>
    <div class="extend-panel" :style="extPanelStyle">
      <span class="close" @click="handleExtClose">x</span>
    </div>
    <div class="panel" :style="panelStyle">
      <span class="close" @click="handleClose">x</span>
      <panel-content></panel-content>
    </div>
  </div>
</template>
<script>
import panelContent from "@/components/panel-content";
import { mapState } from "vuex";
export default {
  components: {
    panelContent
  },
  computed: {
    ...mapState(["showExtendedPanel"])
  },
  watch: {
    showExtendedPanel(val) {
      if (val) {
        this.extPanelStyle.right = "200px";
      } else {
        this.extPanelStyle.right = "-200px";
      }
    }
  },
  methods: {
    showPanel() {
      this.panelStyle.right = "0";
    },
    showExtPanel() {
      this.$store.state.showExtendedPanel = true;
    },
    handleClose() {
      this.panelStyle.right = "-200px";
    },
    handleExtClose() {
      this.$store.state.showExtendedPanel = false;
    }
  },
  data() {
    return {
      panelStyle: {
        right: "-200px"
      },
      extPanelStyle: {
        right: "-200px"
      }
    };
  }
};
</script>

<style scoped>
.close {
  position: absolute;
  top: 0;
  right: 0.5em;
  cursor: pointer;
}
.panel {
  background: azure;
  width: 200px;
  height: 100vh;
  position: fixed;
  top: 0;
  transition: right 0.5s;
}
.extend-panel {
  background: rgb(162, 252, 252);
  width: 200px;
  height: 100vh;
  position: fixed;
  top: 0;
  transition: right 0.5s;
}
</style>
