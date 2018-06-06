<template>
    <div class='home'>
        <!-- <i class='material-icons medium'>chevron_left</i> -->
        <div class='left-part'>
            <!-- <span>DREAM</span>
            <span>HOME</span>
            <span>FINDER</span> -->
            <i class="material-icons">chevron_left</i>
            <span>DREAM HOME FINDER</span>
            <i class="material-icons">chevron_right</i>
            <span class="blinker"></span>
        </div>
        <Searchbar/>
    </div>
</template>


<script>
import Searchbar from '@/components/Searchbar'
export default {
    name: 'Home',
    data(){
        return {
        }
    },
    methods: {
        
    },
    computed:{
    },
    components: {
        Searchbar
    }
}
</script>

<style>
.home{
    margin-top: 35vh;
    background: rgba(255, 255, 255, .5);
    text-align: cneter;
}



.home .left-part{
    font-family: 'Quicksand', sans-serif;
    font-weight: lighter;
    font-size: 5em;
    color: black;
    /* width: 400px; */
    line-height: 100px;
    margin-left : 40px;
    margin-right: 0px;
}


.left-part i{
    font-size: 65px;
    position:relative;
    top: 10px;
}



.blinker { 
  animation-name: blinker;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(1,0,0,1);
  animation-duration: 1s;
  display: inline-block;
  width: 8px;
  height: 60px;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(black,.3);
  background-color: orange;
  position:relative;
  top: 5px;
  
}



@keyframes blinker { 
  from { opacity: 1.0; } to { opacity: 0.0; }
}

</style>


