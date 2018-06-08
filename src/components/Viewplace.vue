<template>

    <div class="view-place">
        
        <div class="progress" v-bind:class='{omit : doneLoading}'>
            <div class="indeterminate" ></div>
        </div>        
        
        <div class="left-buttons">
            <button class='btn-large light-blue' @click='goBack(e)'>Back</button>
            <button  class='btn-large cyan' @click='goMap(e)'>Map</button>
            <button  class='btn-large teal'>Contact</button>
        </div>



        <div class="first-line">
            <span>{{place.nob}} Bedroom</span>
            <span class='address'> @ {{place.address}}</span>
        </div>
        <div class='first-container'><Pictureviewer :pictures='place.pictures'/></div>
        <div class='price-line'>
            <div class='price'>
                <div class="price-left">Monthly Price: <span class='price'>{{place.price.price}}</span></div>
                <div class='price-right'>From: <span class="startDate">{{place.start}}</span></div>
                <div class="price-tags">
                    <div class="chip blue-grey lighten-3" v-for='(tag, index) in place.price.included' :key=index>
                    {{tag}}
                    <i class='material-icons check'>check</i>
                </div>
                </div>
            </div>

            <div class="period">
                <span class="minimum-lease " v-bind:class="{omit : omitDuration()}">
                    Minimum Lease Required: {{place.leaseDuration}} Months
                </span>
                <div class='chip blue-grey lighten-3' v-bind:class="{omit : omitExtendable()}">Extendable</div>
            </div>
        </div>
        <div class="description">
            
            <div class='right-part'>{{place.description}}</div>
        </div>
        <div class="tags">
            Tags:
            <div class="chip" v-for='(tag, index) in place.tags' :key='index'>
                {{tag}}
            </div>
        </div>


        <div id='map-mark' class="map-section">
            <iframe
                width="600"
                height="450"
                frameborder="0" style="border:0"
                :src="googleMapSrc()" allowfullscreen>
            </iframe>
        </div>

        <div id='contact-mark' class="contact-part">
            <ContactCard :contact='place.contact'/>
        </div>
    </div>
</template>

<script>
import Pictureviewer from '@/components/Pictureviewer'
import ContactCard from '@/components/ContactCard'
import db from '@/firebase/init'

export default {
    name: 'Viewplace',
    components:{
        Pictureviewer,
        ContactCard
    },

    data(){
        return{
            omitContact: true,
            place : {},
            doneLoading : false
            
            // place:{
            //     description : 'Top Floor Penthouse with amazing view, near by McDonald\'s and seve eleven. with Gym and study rooms. bla bla bla bla bla bla bla bla bla bla bla bla, bla bla bla, bla bla bla bla, bla.',
            //     tags :['Pet Friendly', 'Big Bed', 'Bus Stop'],
            //     nob: 2,
            //     address: '1 Columbia St., Wateroo, ON',
            //     price: { 
            //         price: '1600',
            //         included: ['Internet', 'Hydro', 'Water', 'Heat']
            //     },
            //     start: 'DEC 2018',
            //     leaseDuration: 4,
            //     extendable: true,
            //     addressSlug: '1+Columbia+St',
            //     pictures: [
            //         'https://circaoldhouses.com/wp-content/uploads/2017/10/key-hole-house-1.jpg',
            //         'https://images.adsttc.com/media/images/59a4/c3f0/b22e/38a2/dc00/054b/slideshow/MHA.JR_201708_030.jpg?1503970242',
            //         'https://bt-wpstatic.freetls.fastly.net/wp-content/blogs.dir/1322/files/2018/01/adv_advice-home-homeownershipcosts_img.jpg',
            //         'https://www.discoverydreamhomes.com/wp-content/uploads/Model-Features-Copper-House.jpg'
            //     ],
            //     contact: {
            //     name : 'Shawn',
            //     phone: '5197812397',
            //     weChat: '651725756',
            //     email: 'shawnyang41@gmail.com'
            //     }
            // }
        }
    },
    methods:{
        omitDuration(){
            if(this.place.leaseDuration === null) return true
            return false
        },

        omitExtendable(){
            return !this.place.extendable
        },
        googleMapSrc(){
            return 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCEPmad6ExmcZ_741R0NzdCNta73umo1Zc&q=' + this.place.addressSlug
        },
        toggleContact(){
            this.omitContact = !this.omitContact;
        },
        goBack(){
            this.$router.go(-1);
        }

    },
    created(){
        var id = this.$route.params.id
        db.collection('places').doc(id).get().then( 
            (doc) => {
                if(doc.exists){
                    this.place = doc.data()
                    console.log(this.place)
                    this.doneLoading = true
                }
                else console.log('No such document!')
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }

}
</script>

<style>



.view-place{
    width: 75%;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 1);
    margin-top: 30px;
}

.view-place progress{
    height: 40px;
}


.first-line{
    font-size: 40px;
    
}

.first-container{
    width: 100%;
    margin: 10px auto;
}



.price-line .price{
    font-family: 'Quicksand', sans-serif;
    font-weight: lighter;
    font-size: 1.5vw;
    margin-right: 40px;

}

.price-left{
    display: inline-block;
}

.price-right{
    display: inline-block;
}

.price-line .price .price{
    color: orange;
    font-size: 2vw;
}

.view-place .period{
    font-family: 'Quicksand', sans-serif;
    font-weight: lighter;
    font-size: 1.5vw;
    margin-right: 40px;
    text-align: center;
}

.view-place .startDate{
    color: orange;
    font-size: 2vw;
}

.view-place .period .minimum-lease{
    position: relative;
    

}

.price-line .chip{
    font-size: 1vw;
}

.price-line i{
    position: relative;
    top: 5px;
}

.first-line .address{
    color: #42a5f5;
}

.view-place .omit{
    display: none;
}

.view-place .description{
    margin-top: 30px;
}

.view-place .description .right-part{
    margin: 0px;
    display: inline-block;
    width: 50%;
    height: 100%;
    vertical-align: top;
    font-family: 'Quicksand', sans-serif;
    font-weight: lighter;
    font-size: 2.5vh;
}

.chip{
    font-weight: bold;
}

.map-section{
    margin: 20px;
}

.view-place .contact-button {
    position: fixed;
    right: 15%;
    top: 15%
}

.view-place .contact-button .btn-large{
    position: fixed;
    right: 15%;
    top: 15%;
    border-radius: 30px;
    width: 7vw;
    font-size: 1vw;
    text-align: center;
    padding: 0px;
}

.view-place .left-buttons{
    position:fixed;
    left: 12.5%;
    top: 130px;
    border-radius: 30px;
    width: 10%;
    text-align: left;
}

.view-place .left-buttons .btn-large{
    margin: 10px;
    display: block;
    width: 150px;
}




.view-place .tags{
    margin-top: 30px;
    font-size: 20px;
}
.view-place .tags .chip{
    font-size: 20px;
    font-family: 'Quicksand', sans-serif;
    font-weight: lighter;
}

.omit{
    display: none;
}
</style>

