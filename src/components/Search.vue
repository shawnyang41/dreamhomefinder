<template>
    <div class='search'>
        <div class="search-header-container">
            <div class='place-holder'></div>
            <Searchbar/>
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
            nob: this.$route.params.nob
        }
    },
    methods: {
        updateNob(){
            this.nob = this.$route.params.nob
        }
    },
    components : {
        Searchbar,
        Placesroll
    },
    watch: {
        $route: 'updateNob'
    }
}
</script>

<style>
    .search {
        margin: 30px;
        text-align: center;
        width: 75%;
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

