<template>
    <div class='placesroll'>
        <div v-for='place in getPlaces' :key=place.id>
            <Place :place='place'/>
        </div>
        <div class="progress" v-bind:class='{ omit : doneLoading}'>
            <div class="indeterminate" ></div>
        </div>
        
    </div>
</template>

<script>
import Place from '@/components/Place'
import db from '@/firebase/init'
export default {
    name : 'Placesroll',
    data(){
        return {
            places : [],
            doneLoading: false
        }
    },

    components:{
        Place
    },

    computed:{
        getPlaces(){
            console.log('placeroll:', this.nob)
            console.log(this.places)
            if (this.nob == 0) return this.places
            return this.places.filter(place => {
                return place.nob == this.nob;
            })
        }
    },

    props:['nob'],

    created(){
        var placeRef = db.collection("places");
        var that = this
        placeRef.get().then(
            (querySnapshot) => {
                querySnapshot.forEach(function(doc) {
                    var jsonData = doc.data()
                    jsonData.id = doc.id
                    // console.log(jsonData)
                    that.places.push(jsonData)
                    // console.log(doc.id, " => ", doc.data());
                    });
                this.doneLoading = true;
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        )
        console.log('created')
    }
}
</script>

<style>
    .placesroll{
        /* background-color:rgba(255, 255, 255, 0.7);; */
        margin: 0px 0px;
        padding: 0px 0px;
        width: 100%;       
    }

    .omit {
        display: none;
    }
</style>


