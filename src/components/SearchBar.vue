<template>
    <div class='searchbar'>
            <ul @mouseout='clearHover()'>
                <li v-for= 'index in 6' :key='index'>
                    <i class = 'material-icons' @click='clicked(index)' @mouseover='hover(index)'
                    v-bind:class = '{selected : isSelected(index), 
                    unselected : isUnSelected(index),
                    hovered: isHovered(index)}'>
                    favorite_border
                    </i>
                </li>
            </ul>
            <div id='bedroom-number' class='bedroom-number slim' @click='goZero()'>
                {{badnumber}} 
            </div>
            <div class='bedroom-number'>
                Bedrooms
            </div>
            <a class="waves-effect waves-light btn-large go-btn blue-grey darken-1 pulse" @click='go()'>Easy Search</a>
        </div>
</template>

<script>
export default {
    name: 'Searchbar',
    data(){
        return {
            hovered: 0,
            nob: 1
        }
    },
    methods: {
        clicked(nob){
            // console.log('clicked', nob)
            this.nob = nob
        },
        isSelected(index){
            // console.log('here', index)
            return index <= this.nob
        },
        isUnSelected(index){
            // console.log('here', index)
            return !this.isSelected(index)
        },
        hover(index){
            // console.log('hovered', index)
            this.hovered = index
        },
        isHovered(index){
            return index <= this.hovered
        },
        clearHover(){
            this.hovered = 0
        },

        go(){
            // this.$router.push({name: 'Search', params : {nob : this.nob}})
            this.$emit('changeSearch', {nob:this.nob})
        },
        
        updateNob(){
            this.nob = this.$route.params.nob
        },
        goZero(){
            this.nob = 0;
            this.$router.push({name: 'Search', params : {nob : this.nob}})
        }
    },
    computed:{
        badnumber(){
            if (this.hovered === 0){
                if(this.nob == 0) return 'ALL'
                return this.nob;
            }
            return this.hovered;
        }
    },
    watch:{
        $route : 'updateNob'
    },

    created(){
        if (this.$route.params.nob != undefined) this.nob = this.$route.params.nob
    }
}
</script>

<style>

.searchbar{
    
    /* border: 1px black solid; */
    margin: 0px 0px;
}

.searchbar li{
    display: inline-block;
    cursor: pointer;
    
}

.searchbar i{
    font-size: 3em;
}



.searchbar i.unselected{
    color: white;
    transition: color 0.7s;
}


.searchbar i.hovered{
    color: grey;

}

.searchbar i.selected{
    color:  black;
    transition: color 0.7s;
}



.searchbar ul{
    margin: 0px;
    display: inline-block;
    
}

.bedroom-number{
    position: relative;
    color : black;
    font-size: 2.5em;
    font-family: 'Quicksand', sans-serif;
    text-align: left;
    display: inline-block;
    margin: 0px;
    padding: 0px 0px 0px 20px;
    top: -10px;
}

#bedroom-number{
    cursor: pointer;
}

.bedroom-number.slim{
    text-align: center;
    width: 100px;
}

a.go-btn{
    display: inline-block;
    margin: 0px 0px 0px 30px;
    position: relative;
    top: -20px;
    border-radius: 30px;
}

a.go-btn:hover{
    color: black;
}
</style>


