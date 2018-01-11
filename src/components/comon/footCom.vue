<template>
	<div class="foot">
		<ul >
			<li>1页</li>
			<li>2页</li>
			<li>3页</li>
			<li>4页</li>
		</ul>
	</div>
</template>
<script>

export default {
  name: 'He',
  data () {
    return {
   
    }
  },
  created(){
  	
  	
  },
  methods:{
  	
  	
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
	ul,li{
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.foot{
		height: 40px;
		width: 100%;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
		box-shadow: 0 0 6px #ccc;
		ul{
			height: 100%;
			display: flex;
			li{
				
				flex-grow: 1;
				line-height: 40px;				
			}
		}
	}
	

</style>
