<template>
  <div class="loading-component">
    <img src="../../assets/load.gif"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    
  }
</script>

<style lang="less" type="text/less" scoped="scoped">
	.loading-component{
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		background: #2b2c30;
		img{
			width: 100%;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
		}
	}
</style>
