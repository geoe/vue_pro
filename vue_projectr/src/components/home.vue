<template>
	<div class='home w'>
		<div class='he-nav'>推荐</div>
		<mt-swipe :show-indicators="false" class='swip'>
		  <mt-swipe-item v-for='item in list'>
		  	<img :src="item.cover"/>
		 </mt-swipe-item>
		</mt-swipe>
		<edRc></edRc>
		<div class='split'></div>
		<tpRC></tpRC>
		<div class='split'></div>
		<pyr></pyr>
		<div class='split'></div>
		<hot></hot>
		<div class='split'></div>
		<youhui></youhui>
		<div class='split'></div>
		<fenqu></fenqu>
		<div class='split'></div>
		<lately></lately>
		<login></login>
	</div>

</template>

<script>
	import axios from 'axios'
	export default{
		name:'home',
		data:function(){
			return {
				list:{}
			}
		},
		mounted:function() {

				var that = this;
				axios.get('/recommend/?type=2&limit=10&offset=0&channel=1')
				.then(function(response){
					that.list = response.data.results;
				})
				.catch(function(error){
					console.log(error);
				})
			}
	}

</script>


<style>
a{
	color: #000;
	text-decoration:none;
}
.home{
	margin-top:0.925867rem;
	position: relative;
	top: -3px;
}

.he-nav{
	background: #fff;
	font-size: 16px;
    color: #fa8e9b;
    text-align: center;
    line-height: .58667rem;
    border-bottom: 1px solid #d2d2d2;
}
.swip{
	    height: 4rem;
    background: #eaeaea;
}
.swip img{
	height: 100%;
	width: 100%;
}
.split{
	height: .08rem;
    background-color: #e4e4e4;
}


</style>