<template>
    <div>
        <h4>configuration panel</h4>
        <button @click="handleShowMore">show more</button>
    </div>
</template>
<script>
export default {
    methods: {
        handleShowMore(){
            this.$store.state.showExtendedPanel = true;
        }
    },
}
</script>
