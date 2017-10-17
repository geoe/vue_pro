<template>
    <header class="top">
        <a class="logo" href="/"></a> 
        <span class="grow-1"></span>
        <figure class="header-avatar">
            <img src="static/h2t.png"alt=""></figure>
            <a class="open-app" data-open-app="">打开客户端</a>
    </header>
</template>
<script type="text/javascript">
export default{
	name:'headerC',
}

</script>
<style type="text/css">
        .top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    height:0.935867rem;
    padding: .22333rem .48rem .22333rem .48333rem;
    border-bottom: 1px solid #d2d2d2;
    background: #fff;
    }
    .top::before{
        content:'';
        position: absolute;
        height: 1px;
        font-size: 12px;
        width: 708px;
        background: #fff;
        top: 0.9235867rem;
        left: 20px;
        z-index: 999;
        left: 348px;
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
</style>