<template>
    <div class='placesroll'>
        <div v-for='card in cards' :key=card>
            <Place :id='card'/>
        </div>
    </div>
</template>

<script>
import Place from '@/components/Place'
export default {
    name : 'Placesroll',
    data(){
        return {
            cards : [1,2,3,4,5,6,7]
        }
    },
    components:{
        Place
    }
}
</script>

<style>
    .placesroll{
        /* background-color:rgba(255, 255, 255, 0.7);; */
        margin: 0px 0px;
        padding: 0px 0px;

    }
</style>


