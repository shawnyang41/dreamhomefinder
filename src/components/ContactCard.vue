<template>
    <div class="contact-card">
        <ul class="">
            <li id = 'name' class='' >
                <span class="title">{{contact.name}}</span>
            </li>
            <li id='wechat' class="" v-bind:class="{omit : omitWeChat()}">
                <img class='circle' src="../assets/wechat.png" alt="">
                <span class="title">{{contact.weChat}}</span>
            </li>
            
            <li id='email' class="" v-bind:class="{omit : omitEmail()}">
                <i class= 'material-icons'>email</i>
                <span class="title">{{contact.email}}</span>
            </li>

            <li id='phone' class="" v-bind:class="{omit : omitPhone()}">
                <i class= 'material-icons'>phone</i>
                <span class="title">{{contact.phone}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    props:['contact'],
    methods:{
        omitPhone(){
            return this.contact.phone === ""
        },
        omitWeChat(){
            
            return this.contact.weChat === ""
        },
        omitEmail(){
            
            return this.contact.email === ""
        }
    }
}
</script>

<style scoped>
    .contact-card{
        display: inline-block;
        min-width: 30%;
        font-family: 'Quicksand', sans-serif;
        font-weight: lighter;
        font-size: 2vw;
        margin: 0px;
        
    }

    .contact-card ul{
        margin: 0;
    }


    #wechat img{
        width: 40px;
    }

    .omit{
        display: none;
    }

</style>


