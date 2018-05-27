<template>
	<section id="progress-section" class="md-elevation-8">
		<div class="cosmic-belt-bg"></div>
		<responsive-roadmap>
			<pyramid-brick slot="whatone-task" title="0xBabylon" category="Revolutionizing FinTech for a decentralized Future"  percent="1">
				0xBabylon is a "Virtual Deposit" smart contract that represents the stock/bonds of the Babylon project. This project aims to deliver a revolutionary monetizing model that will empower individual creators.
			</pyramid-brick>


			<pyramid-brick slot="bonustwo-task" title="Flux Fee" category="A dynamic fee based on invested ethereum" percent=0 >
			The fee fluctuates based on the volume of ETH entering and leaving the contract.<br>
				<demo-flux></demo-flux>
			</pyramid-brick>
			<pyramid-brick slot="bonustwo-task" title="Resolve Tokens" category="Licensing assets to build onto the ecosystem" percent=0 >
			Resolve tokens are rewarded to investors after they sell bonds. The amount of resolve tokens is based on the average prices you bought them for and sold them at.
				<demo-resolver></demo-resolver>
			</pyramid-brick>
			


			<pyramid-brick slot="criticalthree-task" title="Test Economies" category="Virtual simulations to test the FinTech Hypothesis" percent="0" >
				There are currently 3 ideas for projects that will test the utility of the resolve token.
				<ul>
					<li>Social Media Advertising</li>
					<li>Small Business Stock Market</li>
					<li>MMO Gaming</li>
				</ul>
			</pyramid-brick>
			<pyramid-brick slot="criticalthree-task" title="EcoSystem Contract" category="Development of the ecosystem smart contract" percent="0" >
				This is the core product of this project. A contract that allows members of a community to come together and govern themselves through a system of highly connected and meaningfully anchored contracts.
			</pyramid-brick>
			<pyramid-brick slot="criticalthree-task" title="Glocalize" category="A Global Strategy with cultural precision" percent="0" >
				Adapt the project to cultures around the world. Everything from user experience and app design to language and customs.
			</pyramid-brick>




			<pyramid-brick slot="basefour-task" title="How can I Buy-in?" category="Learn how to buy bonds & license resolve tokens." percent="2" >
				You will need Ethereum (ETH) and <a href="https://metamask.io" target="_blank">Metamask</a> in order to interact with the contract through this website.
			</pyramid-brick>
			<pyramid-brick slot="basefour-task" title="How is this an ICO?" category="A new type of ICO that regulates itself" percent="7" >
				<p>This ICO works very differently than regular ICO's. It uses the Bancor formula to increase the value of each bond in the contract & pays dividends (in ETH) to existing bond holders when anyone buys or sells. With founders at the center of the project, this means that they will recieve most of the earnings coming from the buy and sell fees.</p>
				<p>When you've decided to sell out of the contract you will receive Resolve Tokens along with your ETH bond value. This is the erc20 ICO token. These tokens will be used with the ecosystem. The Resolve Tokens will allow users to create their own bonds contract that can receive tax benefits from the ecosystem.</p>
			</pyramid-brick>
			<pyramid-brick slot="basefour-task" title="How can I Earn?" category="Learn how you can earn a chain of commissions" percent="4" >
				<p>The primary way to earn right now is by holding your bonds as people buy and sell theirs. You will earn dividends based on the amount of bonds you hold in comparison to everyone else. The dividends paid out to holders comes from the fee associated with the buy and sell actions.</p>
				<p>You can also earn by referring people to the platform with your masternode link. This can be found at the bottom of the exchange page. You must be holding at least 1000 BONDs for your referral link to work.</p>
				<p>When someone uses your mastenode referral link, 33% of the fee is applied to the masternode upstream. 22% of which is granted to you. The other 11% is passed up the masternode stream to whoever referred you. The system ensures that buyers are always going through some address' gateway. This essentially a mini lottery.</p>
			</pyramid-brick>
						<pyramid-brick slot="basefour-task" title="Who's in the Team?" category="Meet everyone that has contributed to this project">
							<md-tabs md-dynamic-height >
								<md-tab md-label="Code">
									<div class="questions-tab-content-grid">
										<md-card>
											<md-card-header>
											<div class="md-title">Dev</div>
											</md-card-header>
											<md-card-content><a href="https://www.linkedin.com/in/missionkmg/" target="_blank">This Guy</a></md-card-content>
										</md-card>
									</div>
								</md-tab>
								<md-tab md-label="Graphic">
									<div class="questions-tab-content-grid">
										<md-card>
											<md-card-header>
											<div class="md-title">Graphics</div>
											</md-card-header>
											<md-card-content>#TODO</md-card-content>
										</md-card>
									</div>
								</md-tab>
								<md-tab md-label="Marketing">
									<div class="questions-tab-content-grid">
										<md-card>
											<md-card-header>
											<div class="md-title">Marketing</div>
											</md-card-header>
											<md-card-content>#TODO</md-card-content>
										</md-card>
									</div>
								</md-tab>
							</md-tabs>
						</pyramid-brick>
		</responsive-roadmap>
			</div>
		</div>
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
		showMoreQuestions:false,
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