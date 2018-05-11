<template>
	<div class="content-column">
		<div id="pyramid-roadmap" v-if="FUCK">
			<div id="progress-pyramid" class="section-container">
				<img class="lugo" src="../assets/butterfly.png">
				<div class="pyramid-task-row">
					<div class="task-level-divider"></div>
					<label><h3>Project</h3></label>
					<template slot-scope=""><slot name="whatone-task"/></template>
				</div>
				<div class="pyramid-task-row">
					<div class="task-level-divider"></div>
					<label><h3>FinTech</h3></label>
					<template slot-scope=""><slot name="bonustwo-task"/></template>
				</div>
				<div class="pyramid-task-row">
					<div class="task-level-divider"></div>
					<label><h3>Road Map</h3></label>
					<template slot-scope=""><slot name="criticalthree-task"/></template>
				</div>
				<div class="pyramid-task-row">
					<div class="task-level-divider"></div>
					<label><h3>FAQs</h3></label>
					<template slot-scope=""><slot name="basefour-task"/></template>
				</div>
			</div>
		</div>
		<div id="compressed-roadmap" v-if="!FUCK">
			  <div>
			    <md-steppers md-vertical>
			      <md-step class="whatone-task" md-label="Project">
			        <template slot-scope=""><slot name="whatone-task" /></template>
			      </md-step>

			      <md-step class="bonustwo-tasks" md-label="FinTech">
			        <template slot-scope=""><slot name="bonustwo-task" /></template>
			      </md-step>
			      
			      <md-step class="criticalthree-tasks" md-label="Road Map">
			        <template slot-scope=""><slot name="criticalthree-task" /></template>
			      </md-step>

			      <md-step class="basefloor-tasks" md-label="FAQs">
			        <template slot-scope=""><slot name="basefour-task" /></template>
			      </md-step>

			    </md-steppers>
			  </div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	#pyramid-roadmap{
		padding-top:130px;
		padding-bottom:19px;
		position:relative;
	}
	.pyramid-task-row{
		text-align:center;
		margin-top:4px;
		margin-bottom:4px;
	}
	.lugo{display:block; width:32px; margin:0 auto;position:relative;top:-60px;}
	.pyramid-task-row label{
		width:0;
		height:0;
		position:relative;
		top:-100px;
		left:-100px;
		margin:0;
		display:inline-block;
		color:white;
	}
	.pyramid-task-row h3{margin:0;width:200px;}
	#compressed-roadmap{
	    padding-top: 60px;
	    padding-bottom: 30px;
	}
	#compressed-roadmap .md-stepper-number svg{
	    display: none !important;
	    width:0px;height:0px;
	}
	.md-stepper-editable{display: none !important;
	    width:0px;height:0px;}
</style>
<script>
export default {
	name: 'PyramidRoadmapResponder',
	data:()=>({
		FUCK: false,
		windowWidth:0
	}),
	mounted(){
		this.$nextTick(function(){
			window.addEventListener('resize',this.getWindowWidth);
			this.getWindowWidth();
		})
	},
	methods:{
		getWindowWidth(event){
			this.windowWidth = document.documentElement.clientWidth;
			if (this.windowWidth < 960){
				this.FUCK = false;
			}else{
				this.FUCK = true;
			}
		}
	}
}
</script>