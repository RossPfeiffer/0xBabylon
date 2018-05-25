<template>	
	<div class="labeled-number">
		<div class="iconage">
			<slot/>
		</div>
		<div class="written">
			<span class="ln-label">{{label}}</span>
			<span class="ln-number" v-if="!isInput"><i>{{number}}</i>{{unit}}</span>
			<span class="ln-number" v-if="isInput"><input type="number" v-bind:placeholder="number"></span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.labeled-number{
	display:grid;
	grid-template-columns:32px auto;
	grid-column-gap: 4px;
	text-align:left;
	margin-top:16px;
}
.labeled-number.mini-label{
	margin-top:3px;
}
.no-icon.labeled-number{
	grid-template-columns: 0 auto;
}
.iconage{padding-top:6px;}
.written, .iconage{
	display: inline-block;
	height: 42px;
	/*
	border-style:solid;
	border-width:1px;*/
}
.written > span{
	display: block;/*
	border-style:solid;
	border-width:1px;*/
}
.ln-label{
	font-size:10px;
}
.ln-number{
	font-size:18px;	
}
.mini-label .ln-number{
	font-size:14px;
}
</style>

<script>
export default {
	name: 'labeled-number',
	props:{	
		label: String,
		unit: String,
		number: String,
		isInput: Boolean
	}
}
</script>