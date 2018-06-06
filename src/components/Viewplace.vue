<template>
    <div class="view-place">
        <title></title>
    </div>
</template>

<script>
export default {
    name: 'Viewplace',
    data(){
        return{
            place:{
                description : 'Top Floor Penthouse with amazing view, near by McDonald\'s and seve eleven. with Gym and study rooms. bla bla bla bla bla bla bla bla bla bla bla bla, bla bla bla, bla bla bla bla, bla.',
                tags :['Pet Friendly', 'Big Bed', 'Bus Stop'],
                nob: 2,
                address: '1 Columbia St., Wateroo, ON',
                price: '1600',
                start: 'DEC 2018',
                addressSlug: '1+Columbia+St',
                pictures: [
                    'https://circaoldhouses.com/wp-content/uploads/2017/10/key-hole-house-1.jpg',
                    'https://images.adsttc.com/media/images/59a4/c3f0/b22e/38a2/dc00/054b/slideshow/MHA.JR_201708_030.jpg?1503970242',
                    'https://bt-wpstatic.freetls.fastly.net/wp-content/blogs.dir/1322/files/2018/01/adv_advice-home-homeownershipcosts_img.jpg',
                    'https://www.discoverydreamhomes.com/wp-content/uploads/Model-Features-Copper-House.jpg'
                ]
            }
        }
    }
}
</script>

<style>
.view-place{
    width: 75%;
    margin: 0 auto;
    background-color: rgba(255,255,255,0.3);
}
</style>

