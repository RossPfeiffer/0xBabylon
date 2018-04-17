<template>
	<section id="faqs-section">
		<div class="content-column">
			<div id="faqs-container" >
				<div><md-card class="qa-thing" md-inset="true">
					<md-card-header>
					<div class="md-title">Is this a Pyramid Scheme?</div>
					</md-card-header>
					<md-card-content>
					Absolutely. And so is everything within the ecosystem. That's the point. Decentralization changes everything. It allows us to granularize the pyramid model to the cost of "attention";  Pure Attention.
					</md-card-content>
				</md-card></div>
				<div><md-card class="qa-thing">
					<md-card-header>
					<div class="md-title">Does the token have a purpose?</div>
					</md-card-header>
					<md-card-content>PyrMining scales the value of the resolve token appropiately based on the internal economy. It is a license to introduce a taxable and interconnected service into the community.</md-card-content>
				</md-card></div>
				<div><md-card class="qa-thing">
					<md-card-header>
					<div class="md-title">If this is a Pyramid, why should I invest/gamble?</div>
					</md-card-header>
					<md-card-content>You are purchasing bonds from the community. The bonds you receive in exchange for your ETH are based on the height of the internal economy. If the economy is already doing well, the returned resolve tokens will diminish, but you'll be compensated in ETH.</md-card-content>
				</md-card></div>
				<div><md-card class="qa-thing">
					<md-card-header><div class="md-title">How do I get Resolve Tokens?</div></md-card-header>
					<md-card-content>Resolve tokens are obtained by selling bonds back to the smart contract. If you sell your bonds back at a dropped rate, you are licensed with more resolve tokens.</md-card-content>
				</md-card></div>
				<div><md-card class="qa-thing">
					<md-card-header>
					<div class="md-title">What do I need to purchase bonds?</div>
					</md-card-header>
					<md-card-content>You'll want to install <a href="#" target="_blank">Metamask</a>. Be sure to also have some Ether available. You can obtain some from an exchange like Bittrex.</md-card-content>
				</md-card></div>
				<div><md-card class="qa-thing">
					<md-card-header>
					<div class="md-title">What kind of bonds are these?</div>
					</md-card-header>
					<md-card-content>These are a new type of bond. They are bound to an ecosystem of users that volunteer governance and community over eachother. These bonds secure the license to introduce taxable public services for people who want to be members of a decentralized and democratized society.</md-card-content>
				</md-card></div>
				<div id="more-questions-gateway"><md-card >
					<md-card-header><div class="md-title">More Questions?</div></md-card-header>
					<md-card-actions>
						<md-button class="md-elevation-1" @click="showMoreQuestions = true">Answers</md-button>
					</md-card-actions>
				</md-card></div>
			</div>
			<div>
			<md-dialog id="more-questions-modal" :md-active.sync="showMoreQuestions">
				<md-dialog-title>More Questions</md-dialog-title>
					<md-tabs md-dynamic-height >
						<md-tab md-label="General" >
							<md-content class="questions-tab-content-grid md-scrollbar">
								<md-card>
									<md-card-header>
									<div class="md-title">0xBabylon?</div>
									</md-card-header>
									<md-card-content>The tower of Babylon was a pyramid shaped building that was built to reach heaven.</md-card-content>
								</md-card>
								<md-card>
									<md-card-header>
									<div class="md-title">Why is Bitconnect mentioned?</div>
									</md-card-header>
									<md-card-content>Ask Wikileaks.</md-card-content>
								</md-card>
							</md-content>
						</md-tab>
						<md-tab md-label="Platform">
							<div class="questions-tab-content-grid">
								<md-card>
									<md-card-header>
									<div class="md-title">Can this die?</div>
									</md-card-header>
									<md-card-content>Yes. This is a model that is meant to have a lifespan and then die. It is a node of support in the hyper-connected real world economy. And just as the real world economy is dynamic and always changing, so is the adapting mesh of networked communal contracts.</md-card-content>
								</md-card>
							</div>
						</md-tab>
						<md-tab md-label="Credits">
							<div class="questions-tab-content-grid">
								<md-card>
									<md-card-header>
									<div class="md-title">Graphics</div>
									</md-card-header>
									<md-card-content>#TODO</md-card-content>
								</md-card>
							</div>
						</md-tab>
					</md-tabs>
					<md-dialog-actions>
						<md-button class="" @click="showMoreQuestions=false" >Close</md-button>
					</md-dialog-actions>
				</md-dialog>
				</div>
			</div>
		</section>
</template>
<style lang="scss" scoped>
	#faqs-section{
		background-image:url('../assets/light-hole-planetary-entry.jpg');
		background-position:center;
		background-size: cover;
		}
	#faqs-container{
		width:80%;
		margin:0 auto;
		padding-top:30px;padding-bottom:30px;
		display:grid;
		grid-template-columns: auto auto auto;
		grid-gap:15px;
	}
	#faqs-container .md-title, .questions-tab-content-grid .md-title{
		font-size:18px;
		text-indent:10px;
	}
	#faqs-container .md-card-content{text-indent:20px;}
	#more-questions-gateway{grid-column:3;}
	.questions-tab-content-grid{
		display:grid;
		grid-template-columns: auto auto;
		grid-gap:6px;
	}
	.qa-thing{
		height:100%;
	}
	.qa-thing .md-title{line-height: normal;}
	#more-questions-modal{    min-height: 400px;}
	@media only screen and (max-width: 1139px){
		#faqs-container{ grid-template-columns: auto auto; }
		#more-questions-gateway{grid-column:2;}
	}
	@media only screen and (max-width: 666px){
		#faqs-container{ grid-template-columns: auto; }
		#more-questions-gateway{grid-column:1;}
	}
</style>
<script>
export default {
	name: 'FAQsSection',
	data: () => ({
		showMoreQuestions:false,
	}),
	methods	:{
	},
	created: function(){
	}
}
</script>