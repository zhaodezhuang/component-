<template>
	<div class="container">
		
	  <div class="hello">
	  	<mt-swipe :auto='0' ref="swiperWrapper" @change="handleChange">
	  		<mt-swipe-item><img src="http://qidian.qpic.cn/qidian_common/349573/909abf2138cac49dfee57d96b96fd361/0" alt="" /></mt-swipe-item>
	  		<mt-swipe-item><img src="http://qidian.qpic.cn/qidian_common/349573/399190e3cdf29322a68bfda385709f73/0" alt="" /></mt-swipe-item>
	  	</mt-swipe>
	  	<div class="button-wrapper">
	  		<button class="prev-button flex-item" @click="prev">prev</button>
	  		<button class="next-button flex-item" @click="next">next</button>  
	  	</div>
	  </div>
	  <!--父级向子组件传值goodList-->
	<p class="fuji-bg">{{titlep}}</p>  
  	<good-list  :goods="goodList"   @goodTitle='listenChildF'></good-list>	
  	<book-list></book-list>
  	<div class="imgList">
  		<img src="http://qidian.qpic.cn/qidian_common/349573/909abf2138cac49dfee57d96b96fd361/0"  @error="loadImg($event)"  />	
  	</div>
  	
  	
  	<recommend></recommend>
		
	<loading v-show="loadMake"></loading>	
	</div>
</template>
<script>
	
	
	import Recommend from './comon/footCom.vue'
	import GoodList from './comon/goodList.vue'
	import BookList from './comon/booklist.vue'
	import Loading from './comon/Loading.vue'
	

export default {
  name: 'HelloWorld',
  data () {
    return {
    	titlep:'产品列表',
   		dataContent:{},
   		goodList:[{
   			name:'子组件1',
   			list:"你好啊哈"  			
   		},
   		{
   			name:'子组件1',
   			list:"你好啊哈"  			
   		}],
   		loadMake:false
   		
   		
    }
  },
  created(){
  		this.loadMake = true;
  		this.getData();
  	
  },
  components:{	//组件注册后能引用
  		Recommend,
  		GoodList,
  		Loading,
  		BookList
  	}
  ,
  methods:{
  	
  		getData(){
  			var _this = this;
  			_this.$http.get(`${_this.customF.api}/v1/goods`,{
  				params:{
  					token:'9996abefe8a0a2f79eeb07ff4a6d060653fe9b386b68ce2d644a4e12268eb560',
  					id:16  					
  				} 				
  			}).then(res=>{
  				if(res.status = "10000"){
  					
  					_this.loadMake = false;
  					_this.dataContent = res.body;
  					
  				}
  				
  			}).catch(error=>{
  				
  				alert(error)
  			})
  			
  		},
  		prev(){
  			
  			this.$refs.swiperWrapper.prev();
  			
  		},
  		next(){
  				this.$refs.swiperWrapper.next();
  		},
  		handleChange(index){
  			
  			console.log(index)
  			
  		},
  		loadImg(e){
  			
  			this.customF.defaultImg(e);
  		}
  		,
  		listenChildF(data){
  			this.titlep = data;
  			console.log(data)
  			
  		}
  	
  	
  	
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>

body{
	margin: 0;
}	
	
.hello{
	height: 200px;
	position: relative;
	img{
		height: 100%;
	}
}
.flex-item{
	width: 40px;
	height: 20px;
	font-size: 0.24rem;
	color: #ffffff;
	background: #000;
	position: absolute;
	top: 50%;
	margin-top: -10px;
}
.prev-button{
		left: 0;
	}
.next-button{
	right: 0;
}
.imgList{
	width: 100%;
	height:60px ;
	img{
		width: 100%;
		height: 100%;
	}
}
.fuji-bg{
	background: #000000;
	color: #FFFFFF;
}
</style>
