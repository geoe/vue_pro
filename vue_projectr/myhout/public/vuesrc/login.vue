<template>	
	<div>
		<div class='login' v-if='islogin' :cur='log'>
			<div class='form'>
			<div class='he'><h3>登陆</h3><span @click='qx'>X</span></div>
				<label><span>用户名</span><input type="text" name="user"  placeholde='用户名' v-model='user'></label>
				<label><span>密码</span><input type="pw" name="pw" placeholde='MOMA' v-model='pw'></label>
				<button @click='subs()'>登陆</button>
				<div class='zhuce' @click='zc'>注册账号<span v-if='isenter'>登陆失败</span></div>
			</div>
		</div>
		<div class='login' v-if='isreg' :cur='reg'>
			<div class='form'>
			<div class='he'><h3>注册</h3><span @click='qx'>X</span></div>
				<label><span>用户名</span><input type="text" name="user"  placeholde='用户名' v-model='user'></label>
				<label><span>密码</span><input type="pw" name="pw" placeholde='MOMA' v-model='pw'></label>
				<label><span>邮箱</span><input type="text" name="em" placeholde='MOMA' v-model='em'></label>
				<button @click='subs()'>注册</button>
				<div @click='denglu()'>登陆账号<span v-if='isenter'>登陆失败</span></div>
			</div>
		</div>
</div>
</template>

<script type="text/javascript">
import axios from 'axios';
export	default{
	name:'login',
	data:function(){
		return {isShow: true,user:'',pw:'',isenter:false,islogin:true,isreg:false,log:'',reg:'',em:'',cur:'delu'}
	},
	methods:{
		qx:function(){
			document.querySelector('.login').style.display='none';
			document.querySelector('.bdos').remove()
		},
		denglu:function(){
			this.isreg = false;
			this.islogin = true;
			this.cur = 'delu'
		},
		zc:function(){
			this.isreg = true;
			this.islogin = false;
			this.cur = 'zhuce';
		},
		subs:function(){
			var that = this;
		if(this.cur == 'zhuce'){
			axios.post('/login/reg',{
  			user:that.user,
  			em:that.em,
  			pw:that.pw})
  			.then(function(res){
  			if(res.data.success==true){
  				that.denglu();
  			}else{
  				
  			}
		})
  			.catch(function(err){
  			console.log(err);
		})
		}else if(this.cur == 'delu'){
			var that = this;
			axios.post('/login',{
  			user:that.user,
  			pw:that.pw})
  			.then(function(res){
  			if(res.data.success==true){
  				that.isenter = false;
  				location.href = '/'
  			}else{
  				that.isenter = true;
  			}
		})
  			.catch(function(err){
  			console.log(err);
		})
		}
		
		
	
		}
	}
}

</script>
<style type="text/css">
.login{
	display: none;
	opacity: 0;
	position: fixed;
	top: 30%;
	left: 50%;
	margin-left: -2rem;
	margin-top: -.15rem;
	z-index:999;
}

.login .form{
		padding: .2rem;
		border-radius: .1rem;
		background: rgba(255,255,255,.8);
	display: flex;
	flex-direction: column;
	width: 4rem;
}
.login label{
	display: flex;

}
.login label span{
	display: block;
	width: 20%;
	line-height: .4rem;
}
.login  input{

	width: 70%;
	font-size: 15px;
	text-indent: .1rem;
	border:1px solid #ccc;
	margin: .07rem;
	height: .4rem;
	border-radius: .2rem
}
.login label:nth-of-type(1) input{
	margin-left: .18rem;
}
.login label:nth-of-type(2) input{
	margin-left: .18rem;
}
.login label:nth-of-type(3) input{
	margin-left: .18rem;
}
.login  .he{
	display: flex;
}
.login  .he span{
	display: inline-block;
	text-align: center;
}
.login  h3{
	flex: 1;
	text-align: center;
}

.login  button{
	display: block;
	height: .4rem;
    width: 100%;
    margin: .1rem auto;
    color: #fff;
    background: #fa8e9b;
    border-radius: .3rem;
    border:1px solid #ccc;
}
.res{
	text-align: right;
	margin-top: .1rem;
}
.zhuce{
	text-align: right;
    position: relative;
}
.zhuce span{
	position: absolute;
	left: 0;
	color:red;
}
</style>