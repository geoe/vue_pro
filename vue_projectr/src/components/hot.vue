<template>
	<section class='recm-section w'>
		<h2 class='recom-title'>
			<i class="iconfont icon-remen"></i>热门作品</h2>
			<ul class='flex-row recom-two'>
			<li v-for='list in intem'>
				<router-link :to="{name:'Book',params:{book_id:list.work.id}}"  class='recom-item'>
				<figure class='cover'>
					<img :src='list.cover'>
						<span class='label-count'>{{list.work.humanize_count
}}</span>
				</figure>
				<div class='info'>
					<h3 class='recom-p'><span v-if='list.work.need_pay==0' class='nonneed'>银</span>
					<span v-else class='needpay'>付</span>{{list.title}}</h3>
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
	name:'hot',
	data:function(argument) {
		return {
			intem:{}
		}
	},
	mounted:function(){
		var that = this;
		axios.get('/recommend/?type=7&limit=2&offset=0&channel=1')
		.then(function(rep){

			that.intem = rep.data.results
		})
		.catch(function(err){
			console.log(err);
		})
	}
	}

</script>
<style type="text/css">

 </style>