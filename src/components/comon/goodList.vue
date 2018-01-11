<template>
	<div class="goodList">
		<p>{{dataLi}}</p>
		<ul>
			<router-link to='/' tag='li'  v-for="(item,index) in goods" @click.native="F(item.name)">
				<p>{{item.name}}</p>
				<p>{{item.list}}</p>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import Connect from '@/assets/js/connect.js'
	
	export default{
		data(){
			
			return{
				dataLi:"你好啊"
				
			}
			
		},
		props:['goods']
		,
		created(){
			
			
			this.receive();
			
		}
		,
		methods:{			
			F(index){
				
				console.log(index)
				this.$emit('goodTitle',index);
			},
			receive(){	//同级传值接受
				var _this = this;
				Connect.$on('chuanzhi',data=>{
					
					_this.dataLi = data;
					console.log(data)
					
				})
				
			}
			
			
		}
		
		
	}
	
</script>

<style lang="less" scoped>
	li{
		border-bottom: 1px solid #f2f2f2;
	}
	
	
	
	
	
	
</style>