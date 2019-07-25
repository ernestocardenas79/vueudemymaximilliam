<template >
    <div>
        <div class="progress" :style="[{'width':progressWidth}]">
            <h6>{{progress}}/{{limitProgress}}</h6>
        </div>
    </div>
</template>
<script>
import {QuotesAppBus} from '../main';
export default {
    data:function(){
        return{
            progress:0,
            limitProgress:0
        }
    },
    computed:{
        progressWidth(){
            return (this.progress*10)+'%';
        }
    },
    methods:{
        increaseProgress(){
            if(this.progress < this.limitProgress){
            this.progress +=1; 
            }
        },
        decreaseProgress(){
            if(this.progress > 0){
                this.progress -=1; 
            }
        }
    },
    created(){
        this.limitProgress = QuotesAppBus.quotesLimit;

        QuotesAppBus.$on('addQuote',()=>{
            this.increaseProgress();
            if(this.progress == this.limitProgress){
                QuotesAppBus.$emit('limitReach');
            }
        });

        QuotesAppBus.$on('deleteQuote',()=>{
            this.decreaseProgress();
        });
    }
}
</script>
<style scoped>
    div{
        width:100%;
        background-color: azure;
        border-top-right-radius:6px;
        border-bottom-right-radius:6px;
    }

    .progress{
        height: 40px;
        background: red;
        transition: 500ms width;
    }

    h6{
        text-align: center;
        height: 100%;
        margin: 5px auto;
        color: rgb(209, 228, 228);
        font-size:2em;
    }
</style>

