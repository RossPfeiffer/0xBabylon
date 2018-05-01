<template>
	<section id="progress-section" class="md-elevation-8">
		<div class="cosmic-belt-bg"></div>
		<h2>Agenda</h2>
		<responsive-roadmap>
			<pyramid-brick slot="whatone-task" title="Helix Particle" category="Theoretical"  percent="1">
				Waves
			</pyramid-brick>


			<pyramid-brick slot="bonustwo-task" title="Initiatives" category="Pioneers & Partnerships" percent=0 >
				Work closely with social leaders to adopt and deploy initiative programs into test communities.
			</pyramid-brick>
			<pyramid-brick slot="bonustwo-task" title="Laboratory" category="Research" percent=0 >
				Transform the core governing community of 0xBabylon into a cutting edge research agency for advances related to decentralizing society.
			</pyramid-brick>
			


			<pyramid-brick slot="criticalthree-task" title="Culture Brands" category="Loyalty Marketing" percent="0" >
				Provide creatives in the community with tools and training to sell goods that are backed and branded on grassroots cultures.
			</pyramid-brick>
			<pyramid-brick slot="criticalthree-task" title="Community Contract" category="Smart Contract" percent="0" >
				This is the core product of this project. A contract that allows members of a community to come together and govern themselves through a system of highly connected and meaningfully anchored contracts.
			</pyramid-brick>
			<pyramid-brick slot="criticalthree-task" title="Glocalize" category="Global Strategy" percent="0" >
				These are Weapons of Mass Production, and it's within every country's right to preserve their identity and sovereignty through the self assembling collective of resposible citizens.
			</pyramid-brick>




			<pyramid-brick slot="basefour-task" title="Accessibility Suite" category="Market Reach" percent="2" >
				Make the ecosystem as accessible as possible by building native apps on all devices and ensuring compatibility with multiple gateways.
			</pyramid-brick>
			<pyramid-brick slot="basefour-task" title="ICO's" category="Proof of Economy" percent="10" >
				Intercept existing startups that are considering the use of an ICO and persuade them to use the improved PoWH model. PoWH is perfect for adding an extension of value to the economy because the tokens minted are directly tied to the economic interest of the project. <br/><br/>This is solely to get the public accustomed to this new way of thinking.
			</pyramid-brick>
			<pyramid-brick slot="basefour-task" title="Open Source" category="Transparency & Growth" percent="7" >
				
			</pyramid-brick>
			<pyramid-brick slot="basefour-task" title="Internationalization" category="Globalization" percent="4" >
				This initiative involves translations for the website and a campaign for a diverse community out reach. These efforts will solidify a rich variety of early adopting subcultures.
			</pyramid-brick>

		</responsive-roadmap>
	</section>
</template>

<style lang="scss" scoped>
	h2{
		font-size:35px;
		line-height:35px;
		text-align:center;
		padding-top:50px;
		color:white;
		position:absolute;
		width:100%;
		margin-top:0;
		height:50px;
	}
	.cosmic-belt-bg{
		position: absolute;
		width:100%;
		height:100%;
		background-image:url('../assets/dark-blue-nebula-stars-of-soul.jpg');
		background-size: cover;
		opacity: 0.85;
		filter: brightness(.4);
	}
	
	#progress-section{
		background:#152e43;
		background-image:url('../assets/helix-mirror-pool.jpg');
		background-size:cover;
		background-position:center;
		position:relative;
		overflow: hidden !important;
	}
	#progress-pyramid{
	}
	.pyramid-task-row task-level-divider{
		border-style:solid;
		border-color:#555;
		border-width:1px;
		width:100%;
		height:3px;
		display:block;
	}

</style>

<script>
export default {
	name: 'PyramidRoadmap',
	data: () => ({
		progress: {
			topJob:6,
			
			leftTopJob:11,
			rightTopJob:13,
			
			leftSupport:25,
			centerSupport:31,
			rightSupport:18,

			farLeftBase:32,
			leftBase:60,
			farRightBase:52,
			rightBase:45
		}
	}),
	methods	:{
	},
	created: function(){
	}
}
</script>