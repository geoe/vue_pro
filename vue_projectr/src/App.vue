<template>
  <div id="app">
        <headerC></headerC>
        <router-view/>
   	</div>
</template>

<script>

export default {
  name: 'app',
  data:function(){
    return {
      ccc:''
    }
  },
  mounted:function() {
      if(this.$route.path=='/read'){
        this.ccc = 'isread';
        console.log(this.ccc);
      }else{
        this.ccc = 'notread'
        console.log(this.ccc);
      }
    }
  
}
</script>

<style>
.label-count {
    position: absolute;
    right: 0;
    top: 0;
    width: 0.7rem;
    height: .30333rem;
    line-height: .30333rem;
    text-align: center;
    color: #fff;
    background: rgba(251,155,188,.8);
    font-size: 8px;
    border-radius: 0 .05333rem 0 .13333rem;
}
.tes{
  margin-top:500px; 
}
</style>
