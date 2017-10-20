<template>
    <header class="top">
        <a class="logo" href="/"></a> 
        <span class="grow-1"></span>
        <figure class="header-avatar" @click='login'>
            <img src="static/h2t.png"alt=""></figure>
            <a class="open-app" data-open-app="">打开客户端</a>
    </header>
</template>
<script type="text/javascript">
export default{
	name:'headerC',
    data:function(){
        return {
            
        }
    },
    methods:{
       login:function(argument) {
            document.querySelector('.login').style.display='block';
            document.querySelector('.login').style.opacity='1';
            var qdiv=document.createElement('div');
            qdiv.className = 'bdos';
            var heig=document.body.scrollHeight;
            var bbo=document.querySelector('.top');
            bbo.appendChild(qdiv);
            qdiv.style.height = heig+'px';
       }     
    }
}

</script>
<style type="text/css">
  .top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    height:0.935867rem;
    padding: .22333rem .48rem .22333rem .48333rem;
    border-bottom: 1px solid #d2d2d2;
    background: #fff;
    }
   
    .logo{
    width: 1.05667rem;
    height: .45667rem;
    background-image: url('/static/logo.png');
    background-size: 100% 100%;
    }
    .header-avatar {
        width: .45667rem;
    height: .45667rem;
    margin-right: .20667rem;
    border-radius: 50%;
    overflow: hidden;
}   
    .grow-1{
        flex: 1;
    }
    .header-avatar img{
        height: 100%;
        width: 100%;
    }
.open-app {
    font-size: 12px;
    padding: 0 .23333rem;
    line-height: .45667rem;
    color: #fff;
    background: #fa8e9b;
    border-radius: .06667rem;
}
.bdos{
    width: 100%;
    background: #000;
    opacity: .5;
    position: absolute;
    top: 0;
    left:0;
    z-index: 998;
}
</style>