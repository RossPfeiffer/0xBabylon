<template>	
	<div id="demo-flux" class="demo-calc">
		<div class="eq-part"><demo-calc-input label="Tokens Sold" placeholder="Contract ETH" v-bind:eqNum.sync="demoVariableA" ></demo-calc-input></div>
		<div class="eq-part"><div class="big-operator">*</div></div>
		<div class="mathblock-division">
			<demo-calc-input label="Price Bought At" placeholder="Bought @" v-bind:eqNum.sync="demoVariableB" ></demo-calc-input>
			<hr/>
			<demo-calc-input label="Price Sold At" placeholder="Sold @" v-bind:eqNum.sync="demoVariableC"></demo-calc-input>
		</div>
		<div class="eq-part"><div class="big-operator">=</div></div>
		<div class="eq-part">{{demoVariableA * demoVariableB/demoVariableC }} Tokens</div>
	</div>
</template>

<style lang="scss" scoped>
#demo-flux{text-indent:0;display:grid;grid-template-columns:auto auto auto auto auto;margin:0 auto;margin-top:40px;}
.mathblock-division{text-align:center; width:130px;}
.mathblock-division hr{border-width:1px;border-style:solid;}
.big-operator{font-size:25px;vertical-align:middle;}
</style>

<script>
export default {
	name: 'DemoFlux',
	
	data: () => ({
		demoVariableA: 30,
		demoVariableB: 4,
		demoVariableC: 40
	})
}
</script>