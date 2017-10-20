<template>
	<section class='recm-section w'>
		<h2 class='recom-title'>
			<i class="iconfont icon-cat"></i>签约新秀</h2>
			<ul class='flex-row recom-two'>
			<li v-for='list in intem'>
				<router-link :to="{name:'Book',params:{book_id:list.work.id}}"  class='recom-item'>
				<figure class='cover'>
					<img :src='list.cover'>
						<span class='label-count'>{{list.work.humanize_count
}}</span>
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
	name:'tpRC',
	data:function(argument) {
		return {
			intem:{}
		}
	},
	mounted:function(){
		var that = this;
		axios.get('/recommend/?type=8&limit=6&offset=0&channel=1')
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
.iconfont{
	color:pink;
	font-size: 25px;
	padding-right: 5px;
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
.recom-two li{
	display: inline-block;
    width: 50%;
}
.recom-two li:last-child{
	padding-left: 0.2rem;
	padding-right:0px;
}
.recom-two a{
	    display: flex;
    width: 100%;
      height:2.18533rem;
    margin-bottom: .26667rem;
}
.recom-two .cover{
	    width:50%;
    height: 2.18333rem
}
.recom-two .info{
	margin-left: 0.12667rem;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    overflow: hidden;
}
.recom-two  h3{
	    line-height: 1.2;
	    font-size: 12px;
}
.recom-two  p{
	transform-origin: 10% 50%;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical
}

 </style>