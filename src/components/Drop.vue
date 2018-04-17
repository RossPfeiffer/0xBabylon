<template>
	<md-menu class="dropper" :md-direction="orientation" md-align-trigger :md-active.sync="navHomeOpened">
		<slot name="dropper"/>
		<md-menu-content class="drop-these" v-bind:id="droplistname">
			<slot />
		</md-menu-content>
	</md-menu>
</template>

<style lang="scss" scoped>
.drop-these{max-height:none;}
</style>

<script>
export default{
	name: 'DropDown',
	data:()=>({
		navHomeOpened: false
	}),
	props:{
		droplistname:"",
		orientation:{type:String,default:"bottom-start"}
	},
	created:function(){

		var VUE_STATE = this;
		function withinElement(parent, child) {
				 var node = child;
				 while (node != null) {
						 if (node == parent) {
								 return true;
						 }
						 node = node.parentNode;
				 }
				 return false;
		}
		setTimeout(function(){
			var homeNavBtn = VUE_STATE.$el;
			var closingTimer;
			window.addEventListener("mouseover", function( event ) {
				var target = event.target;
				var homeNavDropdown = document.getElementById(VUE_STATE.droplistname);
				if(withinElement(homeNavBtn,target) || withinElement(homeNavDropdown,target)){
					VUE_STATE.navHomeOpened = true;
					clearTimeout(closingTimer);
				}
			});
			window.addEventListener("mouseout", function( event ){
				var target = event.target;	
				var homeNavDropdown = document.getElementById(VUE_STATE.droplistname)
				if(withinElement(homeNavBtn,target) || withinElement(homeNavDropdown,target)){
					closingTimer = setTimeout(function(){
						VUE_STATE.navHomeOpened = false;
					},100);
				}
			}); 
		},1);
	}
}
</script>