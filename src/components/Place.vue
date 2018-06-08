<template>
    <div class="place card horizontal " @click='showMore()'>
            <div class="card-image">
                <img :src="place.pictures[0]">
            </div>

            <div id= 'left-part' class="card-stack left-part" >
                <div class="first-line">
                    <span class="card-title title">{{place.nob}} Bedroom</span>
                    <span class="card-title address"> @ {{place.address}}
                        <iframe class='drop-down-content'
                        width="450"
                        height="250"
                        frameborder="0" style="border:0"
                        :src="googleMapSrc()" allowfullscreen>
                        </iframe>
                    </span>   
                </div>
                <div id= 'price-holder' class="card-content">
                    Monthly Price: <span class='price'> {{place.price.price}}</span>
                    <span class='date'>From <span class='price'>{{place.start}}</span></span>
                </div>
                <!-- <div id='text-desc' class="card-content">
                    <p>{{place.description}}</p>
                </div> -->
                
                <div class='card-bottom-part'>
                    <span class="chip blue-grey darken-1 tag-card" v-for='(tag, index) in place.tags' :key='index'>
                        {{tag}}
                    </span>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name : 'Place',
    data(){
        return {

        }
    },
    methods : {
        showMore(){
            this.$router.push({name: 'Viewplace', params : {id : this.place.id}})
        },
        googleMapSrc(){
            return 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCEPmad6ExmcZ_741R0NzdCNta73umo1Zc&q=' + this.place.addressSlug
        }
    },
    props : ['place'],
    created(){
        // console.log(this.place)
    }
}
</script>

<style scoped>

.place{
    margin:0px;
    min-height: 100px;
    height: 140px;
    transition: transform .2s;
}

.place:hover{
    background-color: lightgray;
    cursor: pointer;
    position:relative;
    width: 105%;
    zoom: 1.05;
    z-index: 100;
    left: -2.5%;
    transform: scale(1.05);
}
.place .card-image{
    min-width: 20%;
    max-width: 20%;
    border-right: 2px solid oldlace;
}


.place .card-image img{
    max-width: 100%;
    max-height: 100px;
    border: 4px solid #ddd;
    border-radius: 4px;
    position: absolute;
    margin: auto;
}

.card-action{
    text-align: left;
}

.card-stack{
    padding: 0px;
}

.card-stack .title{
    font-size: 0.7em;

}

#text-desc{
    width: 100%;
    padding: 0px 0px 0px 40px;
    text-align: left;
}

.address{
    font-size: 0.5em;
    color:dodgerblue;
}

#price-holder{
    display: inline-block;
    font-size: 20px;
    margin: 0px;
    padding: 0px 0px 0px 40px;
    width: 100%;
    position: relative;
    left: 0px;
    text-align: center;
}

.first-line{
    text-align: center;
    margin: 0px;
    padding: 0px;
}

.price{
    font-size: 1em;
    color: orange;
}

.drop-down-content{
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
    top: -230px;
    right: 30px;
}
.address:hover .drop-down-content {
    display: block;
}
.date{
    position:relative;
    left: 10px;
}

#left-part{
    display: inline-block;
    width: 100%;

}



.go-icon{
    position: relative;
    top: 35%;
}
.card-bottom-part{
    text-align: center;
    padding: 5px 0px;
}

.card-bottom-part .chip{
    color: white;
}



</style>

