<template>
	<p class="fuji-bg" @click="chuan1">子组件2</p>
</template>

<script>
	import Connect from '@/assets/js/connect.js'
	export default{
		data(){
			
			return{
				
				
			}
			
		},
		created(){
			
			
			
		},
		methods:{
			
			chuan1(){
				
				Connect.$emit("chuanzhi","同级组件传值");
				
			}
			
			
		}
		
		
		
		
	}
	
	
	
</script>

<style>
</style>