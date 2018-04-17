<template>
	<div>
		<div class="assoc-toppo" v-if="controllerOrigin=='left'">
			<div class="assoc-toppo-cell glyph left"><img v-bind:src="'../assets/'+startGlyph+'.png'"/></div>
			<div class="assoc-toppo-cell flow">--</div>
			<div class="assoc-toppo-cell function">[*&^]</div>
			<div class="assoc-toppo-cell flow">--</div>
			<div class="assoc-toppo-cell glyph right"><img v-bind:src="'../assets/'+endGlyph+'.png'"/></div>
		</div>
		<div class="assoc-toppo" v-if="controllerOrigin=='right'">
			<div class="assoc-toppo-cell glyph left"><img v-bind:src="'../assets/'+startGlyph+'.png'"/></div>
			<div class="assoc-toppo-cell flow">--</div>
			<div class="assoc-toppo-cell function">[*&^]</div>
			<div class="assoc-toppo-cell flow">--</div>
			<div class="assoc-toppo-cell glyph right"><img v-bind:src="'../assets/'+endGlyph+'.png'"/></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.assoc-toppo{display:grid;grid-template-columns:auto auto auto auto auto;}
.assoc-toppo .assoc-toppo-cell {}
</style>

<script>
export default{
	name: 'PathCard',
	props:{
		controllerOrigin:"",
		startGlyph:"",
		endGlyph:""
	},
	methods:{},
	created:function(){
	}
}
</script>