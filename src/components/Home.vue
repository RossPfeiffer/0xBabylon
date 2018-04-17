<template>
	<div class="page-container">
		<nav-bar/>
		<splash-section/>
		<features-section/>
		<pyramid-section/>
		<faqs-section/>
		<footer-section/>
	</div>
</template>

<style lang="scss" scoped>
	section{
		margin:0;
	}
</style>

<script>
export default {
	name: 'IDK',
	methods	:{
		tabTo:function(to){
			this.tab = to;
		}
	},
	created: function(){
	}
}
</script>