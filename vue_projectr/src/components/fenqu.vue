<template>
	<section class='recm-section w'>
		<h2 class='recom-title'>
			<i class="iconfont icon-cat"></i>分区推荐</h2>
			<ul class='flex-row recom-two'>
			<li v-for='list in intem'>
				<router-link :to="{name:'Book',params:{book_id:list.work.id}}" >
				<figure class='cover'>
					<img :src='list.cover'>
						<span class='label-count' v-if='list.work.humanize_count'>{{list.work.humanize_count}}</span>
						<span class='label-count' v-else>{{list.work.scene_count}}幕</span>
				</figure>
				<div class='info'>
					<h3 class='recom-p'><span v-if='list.work.rank==3' class='tag-san'>银</span><span v-else-if='list.work.rank==4' class='tag-si'>金</span><span v-else-if='list.work.need_pay' class='needpay'>付</span>{{list.title}}</h3>
					<p>{{list.recommend_words}}</p>
				</div>
				</router-link>
			</li>
			</ul>
	</section>
</template>

<script type="text/javascript">
import axios from 'axios'
export default{
	name:'fenqu',
	data:function(argument) {
		return {
			intem:{},
		}
	},
	methods:{
		
	},
	mounted:function(){
		var that = this;
		axios.get('/recommend/?type=11&limit=10&offset=0&channel=1')
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
.tag-si{
	background: #e6ca70;
}
.tag-san{
	background: #7ac3f5;
}

 </style>