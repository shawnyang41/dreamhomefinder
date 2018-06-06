<template>
    <div class='navbar'>
        <div class='navbar-content'>
            <div id='web-name'>
                <i class='material-icons'>chevron_left</i>
                <span>DREAM HOME FINDER</span>
                <i class='material-icons'>chevron_right</i>
            </div>
            <router-link :to="{name : 'Home'}"> <span>Home</span></router-link>
            <router-link :to="{name : 'Search', params : { nob : 0}}"> <span>Search</span></router-link>
            <router-link :to="{name : 'About'}"> <span>About</span></router-link>
            <router-link :to="{name : 'Contact'}"> <span>Contact</span></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return{

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


