<template>
<div>
	
<section class='base-info'>
<div class='zhbg'></div>
<div class='bg'>
	<figure class='cover'>
		<img :src="film.cover">
		<span class='label-count'>{{film.humanize_count}}</span>
	</figure>
	<aside class='aside-info'>
		<span class='book-tag tag-san' v-if='film.rank==3'>白银</span>
		<span v-else-if='film.rank==4' class='book-tag tag-si'>黄金</span>
		<span class='book-tag tag-state' v-if='film.status<6||film.status>4'>连载</span>
		<span class='book-tag tag-pay' v-if='film.need_pay'>付费</span>
		<h3>{{film.title}}</h3>
		<div class='category-list'>
			<span class="category-tag"  v-for='list in film.categories'>{{list.name}}</span>
		</div>
		<p>信仰:{{film.belief}}&nbsp;战力{{film.combat}}</p>
		<p>更新时间:{{film.updated_time}}</p>
	</aside>
</div>
</section>
	<section class='summary-info'>
	<p class='summary-info-total'>{{film.coin}}&nbsp;轻石/{{film.gold}}&nbsp;重石/{{film.views}}&nbsp;人气/{{film.follow_count}}&nbsp;收藏</p>
	<p>简介:{{film.intro}}</p>
</section>
</section>
	<section class='author-info'>
	<figure class='avatar'>
		<img :src='item.avatar' v-for='item in film.author'>
	</figure>
	<div class='author-info-middle'>
		<p v-for='item in film.author'>{{item.username}}</p>
		<p  v-for='item in film.author'>{{item.signature}}</p>
	</div>
	<div class='btn-follow'>关注</div>
</section>
<div class='split'></div>
<section class='section-module'>
	<i class="iconfont icon-cat icon" style='color:pink'></i>
	<span class='grow-1'>讨论</span>
	<span>共{{brands.count}}条&gt;</span>
</section>
<div class='split'></div>
<section class='section-module'>
	<i class="iconfont icon-cat icon" style='color:blue'></i>
	<span class='grow-1'>目录</span>
	<span>共{{film.chapter_count}}章&gt;</span>
</section>
<div class='split'></div>
<section class='sect-six'>
	<div class='section-module section-modules'>
		<i class="iconfont icon-cat icon" style='color:yellow'></i>
		<span class='grow-1'>信仰殿堂</span>
		<span class='ckmore'>查看更多</span>
	</div>
		<ul class='hy'>
			<li v-for='listc in comm.results'>
				<figure class='avatar'>
					<img :src='listc.user.avatar'>
				</figure>
				<div class='username'>{{listc.user.username}}</div>
			</li>
		</ul>
</section>
<div class='split'></div>
<section class='sect-six'>
	<div class='section-module section-modules'>
		<i class="iconfont icon-cat icon"  style='color:red'></i>
		<span class='grow-1'>订阅动态</span>
	</div>
		<ul class='hy hys' v-if='subs'>
			<li v-for='lists in subs'>
				<figure class='avatar'>
					<img :src='lists.user.avatar'>
				</figure>
				<span class='sbuss'>{{lists.user.username}}订阅了本作品</span>
			</li>
		</ul>
</section>
<div class='split'></div>
<section class='sect-six'>
	<div class='section-module section-modules' >
		<i class="iconfont icon-cat icon" style='color:purple'></i>
		<span class='grow-1'>投石动态</span>
	</div>
		<ul class='hy hys' v-if='subs'>
			<li v-for='lista in awad'>
				<figure class='avatar'>
					<img :src='lista.user.avatar'>
				</figure>
				<span class='sbuss'>{{lista.user.username}}打赏了{{lista.gold}}重石</span>
			</li>
		</ul>
</section>
	<login></login>
</div>
</template>
<script type="text/javascript">
import axios from 'axios'
export default{
	name:'book',
	data:function(){
		return {
			film:{},
			brands:{},
			comm:{},
			subs:{},
			awad:{}
		}
	},
	mounted:function() {
		var that=this;
		axios.get(`/book/${this.$route.params.book_id}/api/`)
		.then(function(rep){
			that.film = rep.data;
			document.querySelector('.zhbg').style.backgroundImage="url("+that.film.cover+")";
			axios.get(`/brand/${rep.data.bf}/post_list/?limit=1&offset=0`)
			.then(function(repb){
				that.brands = repb.data;
			})
		})
		.catch(function(err){
			console.log('err');
		})
		axios.get(`/book/${this.$route.params.book_id}/points/?limit=5`)
		.then(function(rep){
			 that.comm = rep.data;
		})
		axios.get(`/subscriber/${this.$route.params.book_id}/book_new_feed/?limit=3`)
		.then(function(rep){
			if(rep.data){
				that.subs = rep.data.results;
			}
			 
		})
		axios.get(`/book/${this.$route.params.book_id}/award_new_feed/?limit=3`)
		.then(function(rep){
			if(rep.data){
				that.awad = rep.data.results;
			}
			 
		})
	}


}

</script>
<style type="text/css">
.base-info{
	position: relative;
	top:0.935867rem;
    display: flex;
    height: 4.12667rem;
    z-index: 1;
    color: #fff;
    overflow: hidden;
}

.zhbg{
	position: absolute;
	background-repeat:no-repeat; 
    background-size:cover;
    background-position: 0px 40%;
    width: 100%;
    height: 4.12667rem;
  	z-index: -1;
  	filter: blur(.26667rem)
}
.bg{
	display: flex;
	position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: .66rem .1333rem 0 .48333rem;
    height: 100%;
    z-index: 2;
}
.cover{
	position: relative;
    flex-shrink: 0;
    width: 2.67rem;
    height:100%;
    margin-right: .24667rem;
}
.cover img{
	width: 100%;
	height: 100%;
}
.aside-info{
	padding-top: .50rem;
    overflow: hidden;
}
.book-tag{
	display: inline-block;
    line-height: 1.5;
    padding: 0 .8em;
    background-color: #a5bbd4;
    color: #fff;
    border-radius: 1em;
    margin-top: .10667rem;
}
.aside-info h3{
	line-height: 1;
    padding-top: .20667rem;
    padding-bottom: .06833rem;
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.aside-info p{
	font-size: 12px;
	letter-spacing: 1px;

}
.category-list{
	margin-top: .34667rem;
    margin-bottom: .26667rem;
}
.category-tag{
	display: inline-block;
    border: 1px solid;
    border-radius: .05333rem;
    padding: 0.02rem .05rem;
    margin-right: .13333rem;
}
.tag-si{
	background: #e6ca70;
}
.tag-state{
	background: #7ac3f5;
}
.tag-pay{
	background: #fa8490;
}

.summary-info{
	position: relative;
	top: 0.94rem;
    padding: .18667rem;
    background: #fff;
    border: 1px solid #eaeaea;
}
.username{
	white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.summary-info p{
	line-height: 1.6;
}
.summary-info-total{
    margin: .13333rem 0;
}
.author-info{

	position: relative;
	top:  0.94rem;
	background: #fff;
display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    height:  1.1067rem;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 0 .26667rem;
}
.avatar{
	    display: inline-block;
    border-radius: 100%;
    overflow: hidden;
    vertical-align: middle;
    width: .56667rem;
    height: .56667rem;
    margin-right: .18667rem;
}
.author-info-middle{
	-webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    overflow: hidden;
    padding: 0 1.17333rem 0 .18667rem;
}
.avatar img {
    width: 100%;
    height: 100%;
}
.avatar  p{
	white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
 .btn-follow{width: 1.68rem;
    height: .54rem;
    line-height: .64rem;
    color: #fa8e9b;
    border: 1px solid #fa8e9b;
    border-radius: .05333rem;
    text-align: center;
   }
   .split{
   	height: .08rem;
    background-color: #e4e4e4;
   }
   .section-module{
   	position: relative;
    top: 0.94rem;
   	padding: 0 .26667rem;
   	background: #fff;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 0.8rem;
   }
   .icon{
   	font-size:.4rem;
	display: inline-block;
    width: .45333rem;
    height: .45333rem;
    margin-right: .29333rem;
    background-size: cover;
}
.grow-1 {
    flex: 1;
}

.section-modules{
	width: 100%;
	top: 0;
	padding:0;
}
.sect-six{
	padding: 0 .26667rem;
	top: 0.95rem;
	position: relative;
	display: flex;
	flex-direction:column;
	background: #fff;
}
.hy{
	border-top: 1px solid #ccc;
	display: flex;
}
.hys{
	flex-direction: column;
}
.hys li{
	width: 20%;
    padding: .18667rem .5em;
	display: flex;
}
.author-info-middle p{
	    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
section:nth-of-type(7) .hys li{
	width: 100%;
}
section:nth-of-type(8) .hys li{
	width: 100%;
}
.sbuss{
	line-height: .66667rem;
}
.hy li{
	width: 20%;
    padding: .18667rem .5em;
    text-align: center;
}

</style>