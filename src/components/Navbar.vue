<template>
    <div class='navbar'>
        <div class='navbar-content'>
            <div id='web-name'>
                <i class='material-icons'>chevron_left</i>
                <span>DREAM HOME FINDER</span>
                <i class='material-icons'>chevron_right</i>
            </div>
            <router-link :to="{name : 'Home'}"> <span>Home</span></router-link>
            <router-link :to="{name : 'Search', params : { nob : 1}}"> <span>Search</span></router-link>
            <router-link :to="{name : 'About'}"> <span>About</span></router-link>
            <router-link :to="{name : 'Contact'}"> <span>Contact</span></router-link>
            <!-- <button @click='add()'>add</button> -->
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
export default {
    name: 'Navbar',
    data(){
        return{
            

        }
    },
    methods : {

        add(){
            db.collection('places').add({
                            
                description : '如图',
                tags :['Bus stop', 'Big beds', 'No somking', 'Quite', 'No pet', 'Near gym'],
                nob: 1,
                address: '419 Beaver Creek Rd., Waterloo',
                price: { 
                    price: '450 $',
                    included: ['Hydro', 'Water']
                },
                start: 'Any Time',
                // leaseDuration: 12,
                // extendable: true,
                addressSlug: '419+Beaver+Creek+Rd',
                pictures: [
                    'http://cloud.uwcssa.com/forum/201805/08/113333qr9jjybuy11ynhse.jpg',
                    'http://cloud.uwcssa.com/forum/201805/08/113345uihfhmdbmki5a5wb.jpg',
                    'http://cloud.uwcssa.com/forum/201805/08/113351o57benojzn1nc7so.jpg',
                    'http://cloud.uwcssa.com/forum/201805/08/113357ls5fu35blkk5okuz.jpg',
                    'http://cloud.uwcssa.com/forum/201805/08/113402l5ogioqolousikli.jpg',
                    'http://cloud.uwcssa.com/forum/201805/08/113409f0d91bzp49zsdd44.jpg',
                    'http://cloud.uwcssa.com/forum/201805/08/113432qkoacpkva93gcico.jpg'
                ],
                contact: {
                    name : 'No Name',
                    phone: '5198944586',
                    weChat: '12263399066',
                    email: ''
                }
            }).then(docRef =>{
                    console.log(docRef.id);
                }
            ).catch(
                err => {
                    console.log(err)
                }
            )
        }
    }
}
</script>


<style>
    .navbar{
        height: 40px;
        
    }

    .navbar-content{
        height: 40px;
        margin: 0px 80px;
        text-align: right;
        text-align: center;
        

        /* border: 1px solid black; */
    }

    .navbar-content a{
        font-family: 'Quicksand', sans-serif;
        display: inline-block;
        color: white;
        margin: 0px 30px;
        padding: 10px;
        
        height: 40px;
        font-size: 1.5em;
        /* border: 1px solid black; */
        transition: color 0.7s;
    }

    .navbar-content a:hover{
        color: black;
        background-color: white;
        
    }

    .navbar-content a.router-link-exact-active{
        color: black;
        background-color: white;
        
    }

    .navbar-content #web-name{
        
        font-family: 'Quicksand', sans-serif;
        display: inline-block;
        
        
        font-size: 1.5em;
    }

    .navbar-content i{
        position: relative;
        top: 6px;
    }
    
</style>


