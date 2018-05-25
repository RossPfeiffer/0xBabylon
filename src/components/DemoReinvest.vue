<template>	
	<div id="demo-reinvest" class="demo-calc">
		<div class="eq-part">
			<demo-calc-input label="Masternode Pipeline" placeholder="Imported ETH" v-bind:eqNum.sync="demoVariableD"></demo-calc-input>
		</div>
		<div class="eq-part"><div class="big-operator">/</div></div>
		<div class="eq-part">
			<demo-calc-input label="Total Invested ETH" placeholder="Imported ETH" v-bind:eqNum.sync="demoVariableB"></demo-calc-input>
		</div>
		
		<div class="eq-part"><div class="big-operator">=</div></div>
		<div class="eq-part">{{demoVariableD/demoVariableB  *100}}%</div>
	</div>
</template>

<style lang="scss" scoped>
#demo-reinvest{text-indent:0;display:grid;grid-template-columns:auto auto auto auto auto;margin:0 auto;margin-top:40px;}
.mathblock-division{text-align:center; width:130px;}
.mathblock-division hr{border-width:1px;border-style:solid;}
.big-operator{font-size:25px;vertical-align:middle;padding-top:15px;}
</style>

<script>
export default {
	name: 'DemoFlux',
	
	data: () => ({
		demoVariableA: 3,
		demoVariableB: 4,
		demoVariableD: 2
	})
}
</script>