<template>
    <div class="picture-viewer-container">
        <!-- <div class='picture-holder'>
            <img :src="pictures[nowIndex]" >
        </div> -->

        <div class='picture-holder'>
            <div v-for='(picture, index) in pictures' :key='index' v-bind:class='{omit : omitIndex(index)}'>
                <img :src="picture">
            </div>
        </div>



        <nav>
            <div class='operator-holder nav-wrapper blue-grey'>
                <ul class="hide-on-med-and-down">
                    <li class='left' @click='goLeft()'>
                        <a><i class="material-icons">arrow_back</i></a>
                    </li>
                    <li class='middle-number'>
                        <a class="brand-logo center"> {{nowIndex + 1}} / {{nop}}</a>
                    </li>
                    <li class='right' @click='goRight()'>
                        <a><i class="material-icons">arrow_forward</i></a>
                    </li>
                </ul>
            
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data(){
        return {
            nowIndex : 0,
            nop : 0
        }
    },
    props: ['pictures'],
    created(){
        this.nop = this.pictures.length
    },
    methods:{
        goLeft(){
            this.nowIndex+=this.nop;
            this.nowIndex --;
            this.nowIndex %= this.nop;
            
        },

        goRight(){
            this.nowIndex ++;
            this.nowIndex %= this.nop;
        },
        omitIndex(i){
            return this.nowIndex != i
        }
    }
}
</script>

<style>

    .picture-viewer-container{
        max-width: 100%;
        margin: 0px;
        
    }
    .picture-viewer-container .picture-holder{
        height: 500px;
    }

    .picture-viewer-container .picture-holder div{
        height: 100%;
    }


    .picture-viewer-container .picture-holder img{
        width: auto;
        height: 100%;
    }


    .picture-viewer-container nav{
        width: 15%;
        margin: 0 auto;
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }

    .omit{
        display: none;
    }

</style>

