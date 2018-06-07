<template>
    <div class="place card horizontal">
        
            <div class="card-image">
                <img :src="place.pictures[0]">
            </div>
            <div class="card-stack left-part">
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
                <div id='text-desc' class="card-content">
                    <p>{{place.description}}</p>
                </div>
                
                <div class='card-bottom-part'>
                    <span class="chip blue-grey darken-1 tag-card" v-for='(tag, index) in place.tags' :key='index'>
                        {{tag}}
                    </span>
                </div>
            </div>
            <div class='card right-part' @click='showMore()'>
                <i class='material-icons medium go-icon'>arrow_forward</i>
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
        console.log(this.place)
    }

}
</script>

<style scoped>

.place{
    margin-bottom:30px;
    min-height: 100px;
}
.card-image{
    width: 25%;
}

.card-image img{
    margin: auto;
}

.card-image img{
    width:150px;
    height: 150px;
    border: 4px solid #ddd;
    border-radius: 4px;
}

.card-action{
    text-align: left;
}

.card-stack .title{
    font-size: 40px;

}

#text-desc{
    width: 100%;
    padding: 0px 0px 0px 40px;
    text-align: left;
}

.address{
    font-size: 20px;
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
    text-align: left;
}

.first-line{
    margin: 0px;
    padding: 0px;
}

.price{
    font-size: 30px;
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

.leftpart{
    display: inline-block;
    width: 75%;
}

.right-part{
    display:inline-block;
    width: 10%;
    padding: 0px;
    margin: 0px;
    cursor: pointer;
    
}

.place:hover .right-part{
    background-color: #546e7a;
}

.go-icon{
    position: relative;
    top: 35%;
}
.card-bottom-part{
    text-align: left;
    padding: 10px 40px;
}

.card-bottom-part .chip{
    color: white;
}



</style>

