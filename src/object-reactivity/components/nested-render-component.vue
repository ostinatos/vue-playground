<script>
/* eslint-disable */ 
export default {
    render(h){
        console.debug("nested-render-component render() executed. ");
        return h('div', this.basket.apple)
    },
    props:{
        basket:{
            type:Object,
            default(){
                return {};
            }
        }
    },
    watch:{
        basket(val){
            console.debug("props basket has been mutated!")
        }
    }
}
</script>
