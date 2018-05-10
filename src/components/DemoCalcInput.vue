<template>	
	<div class="calc-input">
		<span class="calc-label">{{label}}</span>
		<input type="number" class="demo-calc-input" v-bind:placeholder="placeholder" v-model="equationNumber"/>
	</div>
</template>

<style lang="scss" scoped>
.calc-input{display:inline-block; width:100px;text-align:left; }
.calc-input span{display:block;}
.calc-input input{display:block; width:100%; height:30px; padding-left:4px; padding-right:4px;}
.calc-label{font-weight:600;font-size:10px;}
</style>

<script>
export default {
	name: 'CalcInput',
	data: () => ({
		equationNumber: 0
	}),
	props:{	
		label: String,
		placeholder: String
	}
}
</script>