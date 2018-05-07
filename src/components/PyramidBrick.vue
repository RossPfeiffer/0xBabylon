<template>
	<button  @click="elaborated = true;">
		<md-card class="pyramid-task" md-with-hover>
		  <md-ripple>
		    <md-card-header>
		      <div class="md-title">{{title}}</div>
		      <div class="md-subhead">{{category}}</div>
		    </md-card-header><!--
		    <div class="measured-progress"><md-progress-bar md-mode="determinate" :md-value="percent"></md-progress-bar><span class="numeric-percent">{{percent}}%</span></div>-->
		  </md-ripple>
		  <md-dialog class="task-modal" :md-active.sync="elaborated">
			<md-dialog-title>{{title}}<div class="md-subhead">{{category}}</div></md-dialog-title>
	      	<md-content><p><slot/></p></md-content>

	      	<md-dialog-actions><md-button class="" @click="elaborated=false" >Close</md-button></md-dialog-actions>
	      </md-dialog>
		</md-card>
		</button>
</template>

<style lang="scss" scoped>
button{background:none;border:none;padding:0;}
.pyramid-task{width:200px;height:95px;display:inline-block;text-align:left;margin-left:6px;margin-right:6px;}
.pyramid-task .md-card-header{padding:8px;padding-left:16px;}
.pyramid-task .md-card-header .md-title{margin-top:0;font-size:18px;}
.measured-progress {width:80%;margin:0 auto;display:block;}
.pyramid-task .measured-progress .md-progress-bar{display:inline-block;width:75%;position:relative;top:-2px;}
.pyramid-task .measured-progress span.numeric-percent{display:inline-block;width:25%;text-align:center;}
.md-dialog-title.md-title{margin-bottom:15px;}
.task-modal p{text-indent:20px;padding:0;margin:0;}
.task-modal .md-content{padding-left:20px;padding-right:20px;padding-bottom:20px;}
.task-modal .md-subhead{font-size:70%;color:#666;}
</style>

<script>
export default {
	name: 'PyramidBrick',
	data: () => ({
		elaborated:false,
	}),
	props:{	
		title: String,
		category: String,
		percent: Number
	}
}
</script>