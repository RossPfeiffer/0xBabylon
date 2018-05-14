<template>
	<md-toolbar id="ghost-bar" class="md-primary md-elevation-6">
			<div class="deep-space-bg"></div>
			<div class="cosmic-belt-bg"></div>		
			<div class="content-column">
				<nav id="logo-holder">
				<h2 class="md-title"><img id="lugo" src="../assets/butterfly.png">0xBabylon</h2></nav>
				<nav id="more-nav">
					
					<a href="/"><md-button >Home</md-button></a>
					<a href="#" @click="jumpToExchange"><md-button >Exchange</md-button></a>
					<a href="https://discord.gg/3MmeM4U" target="_blank"><md-button >Community</md-button></a>
				</nav>
			</div>	
			<div id="social-nav-container" class="slick-lay">
				<div class="content-column">
					<nav id="social-nav">
						<!--<drop id="languages" droplistname="languageslist" orientation="bottom-end">
							<span slot="dropper">English</span>
							<md-menu-item>English</md-menu-item>
							<md-menu-item>Spanish</md-menu-item>
							<md-menu-item>German</md-menu-item>
							<md-menu-item>Chinese</md-menu-item>
						</drop>-->
						<!--<a href="https://discord.gg/mG9ug6G" target="_blank"><icon class="icon-discord"/></a>
						<a href="https://gab.ai/soulecule" target="_blank"><icon class="icon-gab"/></a>
						<a href="https://8ch.net/soulecule" target="_blank"><icon class="icon-8chan"/></a>-->
					</nav>
				</div>
			</div>
		</md-toolbar>
</template>

<style lang="scss" scoped>
	#lugo{
		width:32px;
		margin-right:7px;
	}
	#ghost-bar{
		position:fixed;
		background:#ffffff00;
		height:48px;
		padding:0;
    	overflow: hidden;
	}
	.deep-space-bg{		background-image:url('../assets/jagged-deep-warp-space.jpg');	}
	.cosmic-belt-bg{		background-image:url('../assets/dark-blue-nebula-stars-of-soul.jpg');		opacity: 0.4;		filter: alpha(opacity=40);	}	
	#ghost-bar .deep-space-bg,	#ghost-bar .cosmic-belt-bg{		position:absolute;		min-width:100%;		min-height:100%;		background-size: cover;		background-position: center;}
	#ghost-bar h2{ display:inline-block; font-family:verdana;}
	#ghost-bar{
		z-index:6;
	}

	.content-column > nav{display:inline-block;}
	#ghost-bar #ghost-drawer{
		width:40px;
		overflow:hidden;
		display:inline-block;
	}
	#ghost-bar #ghost-drawer .dropper{
		position:relative;
		left: -24px;
	}
	#logo-holder{
    	position: relative;
    	top: 9px;
    }
	#home-nav{
		position: relative;
		top: 6px;
	}
	#nav-home-content{
		max-height:none;
		background:#aaa;
		z-index:7;
	}

	#social-nav-container{text-align:right}
	#social-nav{
		width:250px;
		padding-top:20px;
	}
	#social-nav a{
		width:48px;
		display:block;
		float:right;
		text-align:center;
	}
	#languages{
		display: block;
		float:right;
	}
	#social-nav a .icon{
		margin:0 auto;
	}
	#more-nav{
		float:right;
	}
	#more-nav a{
		color:white;
		text-decoration:none;
	}
	@media only screen and (max-width: 945px) {
	}
	@media only screen and (min-width: 667px) {
		#ghost-bar #ghost-drawer{display:none}
	}
	@media only screen and (max-width: 666px) {/*some devil worship for good measure*/
		#ghost-bar{grid-template-columns:160px auto;}
		/*#more-nav,#home-nav,#social-nav a{display:none}*/
		#logo-holder{ top: 0px;}
		#logo-holder h2{line-height: 40px;}
		#languages{  position: relative;bottom: 6px;}
	}

</style>
	
<script>
export default{
	name: 'PathCard',
	data:()=>({
		navHomeOpened: false
	}),
	props:{
		name:""
	},
	methods:{
		tabTo:function(to){
			this.tab = to;
		},
		jumpToExchange:function(){
			var fff = window.location.href.toLowerCase().indexOf('pyrconnect');
			if( fff>= 0 ){
				window.location.assign("https://pyrlink.com/#/Exchange");
				console.log('jump to pyrlink...')
				console.log(fff);
				console.log(window.location.href);
			}else{
				window.location.assign("https://pyrconnect.com/#/Exchange");
				console.log('jump to pyrconnect...')
				console.log(fff);
				console.log(window.location.href);
			}
		}
	},
	created:function(){
		
	}
}
</script>