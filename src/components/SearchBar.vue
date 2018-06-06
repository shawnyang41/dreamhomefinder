<template>
    <div class='searchbar'>
            <ul @mouseout='clearHover()'>
                <li v-for= 'index in 7' :key='index'>
                    <i class = 'material-icons' @click='clicked(index)' @mouseover='hover(index)'
                    v-bind:class = '{selected : isSelected(index), 
                    unselected : isUnSelected(index),
                    hovered: isHovered(index)}'>
                    favorite_border
                    </i>
                </li>
            </ul>
            <div class='bedroom-number slim'>
                {{badnumber}} 
            </div>
            <div class='bedroom-number'>
                beds
            </div>
            <a class="waves-effect waves-light btn-large go-btn blue-grey darken-1 pulse" @click='go()'>Easy Search</a>
        </div>
</template>

<script>
export default {
    name: 'Searchbar',
    data(){
        return {
            nob : 1,
            hovered: 0
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
            this.$router.push({name: 'Search', params : {nob : this.nob}})
        }
    },
    computed:{
        badnumber(){
            if (this.hovered === 0) return this.nob;
            return this.hovered;
        }
    },
    props: ['initnob']

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
    font-size: 45px;
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
    font-size: 40px;
    font-family: 'Quicksand', sans-serif;
    text-align: left;
    display: inline-block;
    margin: 0px;
    padding: 0px 0px 0px 20px;
    top: -10px;
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


