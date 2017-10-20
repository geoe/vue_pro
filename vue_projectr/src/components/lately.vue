<template>
	<section class='recm-section w'>
		<h2 class='recom-title'>
			<i class="iconfont icon-cat"></i>最近更新</h2>
			<ul class='flex-row recom-two la'>
			<li v-for='list in intem'>
				<router-link :to="{name:'Book',params:{book_id:list.id}}" class='recom-item'>
				<figure class='cover'>
					<img :src='list.cover'>
					<span class='label-count'>{{list.humanize_count}}</span>
				</figure>
				<div class='info'>
					<h3 class='recom-p'>{{list.title}}</h3>
					<p>作者:{{list.author_name}}<br>信仰{{list.belief}}<br>战力:{{list.combat}}</p>
				</div>
				</router-link>
				<span class='fl'></span>
			</li>
			</ul>
			
			<div class='load-more'>
				<span @click='loadMore()'>点击加载更多</span>
			</div>
	</section>
</template>

<script type="text/javascript">
import axios from 'axios'
export default{
	name:'lately',
	data:function(argument) {
		return {
			intem:{},
			more:{}
		}
	},
	methods:{
		loadMore:function(){
			var that = this;
			this.count+=1;
			axios.get('/book/last/?limit=10&offset='+this.count*10+'')
			.then(function(rep){
				for(var i=0; i<rep.data.results.length;i++){
					that.intem.push(rep.data.results[i]);
				}
			})
			.catch(function(err){
			console.log(err);
		})
		}
	},
	mounted:function(){
		var that = this;
		this.count = 1;
		axios.get('/book/last/?limit=10&offset=0')
		.then(function(rep){
			that.intem = rep.data.results;
		})
		.catch(function(err){
			console.log(err);
		})
	}
	}

</script>
<style type="text/css">
.la li{
	margin-right: 2px; 
	width: 100%;
}
.la .cover{
	width: 25%;
}
.fl{
	display: block;
	width: 100%;
	height: 1px;
	background: #ccc;
	margin-bottom: .26667rem
}
.fl:last-child{
	padding-bottom: 0px;
}
.load-more{
	    line-height: .32rem;
    padding: .26667rem;
    height: .88rem;
    text-align: center;
    background-color: #f8f8f8;
    color: #fa8e9b;
    margin: .2rem 0;
}
 </style>