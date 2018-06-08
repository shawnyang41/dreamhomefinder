<template>
    <div class='search'>
        <div class="search-header-container">
            <div class='place-holder'></div>
            <Searchbar :nob='nob' @changeSearch="changeSearch"/>
        </div>
        <Placesroll :nob='nob'/>

    </div>
</template>


<script>
import Searchbar from '@/components/Searchbar'
import Placesroll from '@/components/Placesroll'
export default {
    name: 'Search',
    data(){
        return {
            nob: 1
        }
    },
    methods: {
        updateNob(){
            console.log('watch!', this.$route.params.nob)
            this.nob = this.$route.params.nob
        },

        changeSearch(payload){
            console.log(payload)
            this.nob = payload.nob
            this.$router.push({name: 'Search', params : {nob : this.nob}})
        }
    },
    components : {
        Searchbar,
        Placesroll
    },

    watch:{
        $route: 'updateNob'
    },
    
    created(){
        this.nob = this.$route.params.nob
    }
}
</script>

<style>
    .search {
        margin: 30px;
        text-align: center;
        width: 61.8%;
        margin-left: auto;
        margin-right: auto;
    }
    .search-header-container{
        height: 80px;
        background-color: rgba(255,255,255,0.4);
    }
    .place-holder{
        height: 20px;
    }
</style>

