<template>
	<section class='recm-section w'>
		<h2 class='recom-title'>
			<i class="iconfont icon-tuijianfuzhi"></i>主编强推</h2>
			<ul class='flex-row recom-top'>
			<li  v-for='item in rec'>
				<router-link :to="{name:'Book',params:{book_id:item.work.id}}" >
					<figure class='cover'>
						<img :src="item.cover">
					</figure>
				<p class='recom-p'><span v-if='item.work.rank==3' class='tag-san'>银</span><span v-else-if='item.work.rank==4' class='tag-si'>金</span><span v-else-if='item.work.need_pay' class='needpay'>付</span>{{item.work.title}}</p>
			</router-link>
			</li>
			</ul>
	</section>
</template>

<script type="text/javascript">
import axios from 'axios'
export default{
	name:'edRc',
	data:function(argument) {
		return {
			rec:{},
			ifpay:""
		}
	},
	mounted:function(){
			var that = this;
				axios.get('/recommend/?type=3&limit=6&offset=0&channel=1')
				.then(function(response){
					that.rec = response.data.results;
				})
				.catch(function(error){
					console.log(error);
				})
			}
	}

</script>
<style type="text/css">

.recm-section {
    padding: 0.29333rem;
    background: #fff;
    padding-top: 0px;
    padding-bottom: 0px;
}
.recom-title{
    line-height: .62667rem;
   	font-size: 12px;
}
.flex-row{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around
}
.flex-row li{
	padding-right: 0.2rem;
	display: inline-block;
    width: 33.33333%;
}
.flex-row a{
	display: block;
    width: 100%;
}
.flex-row .cover {

    position: relative;
    border: 1px solid #e3e3e3;
    border-radius: .05333rem;
    overflow: hidden;
}
.flex-row img {
  	width: 100%;
    height: 100%;  
  }
 .recom-p{
 	    height: .66667rem;
    line-height: .66667rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
.recom-p span{
	display: inline-block;
    width: 1.2em;
    height: 1.2em;
    line-height: 1.2em;
    text-align: center;
    color: #fff;
    font-weight: 400;
    border-radius: .02667rem;
    margin-right: 10px;
}
.nonneed{
	background-color: #a5bbd4;
}
.needpay{
	    background-color: #fa8490
}
 </style>