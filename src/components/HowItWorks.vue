<template>
	<section id="howto-section">
		<div class="content-column">
			<div id="faqs-container" >
				<div><md-card class="qa-thing">
					<md-card-header>
						<div class="md-title">On Every Buy</div>
					</md-card-header>
					<md-card-content>-
					On every <b>Buy</b>, a community fee is paid.<p>-
					The buyer receives BONDs & for every BOND purchased the price and fee increase.</p>
					</md-card-content>
				</md-card></div>
				<div><md-card class="qa-thing">
					<md-card-header>
						<div class="md-title">On Every Sell</div>
					</md-card-header>
					<md-card-content>-
					On every <b>Sell</b>, a community fee is paid.<p>-
					The buyer receives Resolve Tokens & for every BOND sold the price and fee decrease.</p>
					</md-card-content>
				</md-card></div>
				<div><md-card class="qa-thing">
					<md-card-header>
						<div class="md-title">Bonus Features</div>
					</md-card-header>
					<md-card-content>-The last buyer becomes the default masternode
					<p>-Masternodes have an infinite referral downline.</p>
					<p>-Discounted Reinvests.</p>
					</md-card-content>
				</md-card></div>
				<div id="more-questions-gateway"><md-card >
					<md-card-header><div class="md-title">Learn More</div></md-card-header>
					<md-card-actions>
						<md-button class="md-elevation-1" @click="showMoreQuestions = true">More</md-button>
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
									<div class="md-title">Who has access to the ETH?</div>
									</md-card-header>
									<md-card-content>Only the smart contract has access to the ethereum.</md-card-content>
								</md-card>
								<md-card>
									<md-card-header>
									<div class="md-title">How can I trust this?</div>
									</md-card-header>
									<md-card-content>All the code is open source and available for review <a href="https://etherscan.io/address/0x19080df0360ce52b1068d54e1769182d9cc2b218" target="_blank">here</a>.</md-card-content>
								</md-card>
							</md-content>
						</md-tab>
						<md-tab md-label="Flux fee">
							<div class="questions-tab-content-grid">
								<md-card class="equation">
									The fee fluctuates based on the volume of ETH entering and leaving the contract.
									<md-card-content><demo-flux></demo-flux></md-card-content>
								</md-card>
							</div>
						</md-tab>
						<md-tab md-label="Resolves">
							<div class="questions-tab-content-grid">
								<md-card class="equation">
									The more you bought your BONDs for and the lower you sell them at, the more resolve tokens you get.
									<md-card-content><demo-resolver></demo-resolver></md-card-content>
								</md-card>
							</div>
						</md-tab>
						<md-tab md-label="Reinvest">
							<div class="questions-tab-content-grid">
								<md-card class="equation">
									The reinvest bonus fluctuates based on the ETH in contract over ETH in the referral pipeline.
									<md-card-content><demo-reinvest></demo-reinvest></md-card-content>
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

	#howto-section{
		background-color:rgba(3,21,37,0.77);-webkit-box-shadow: 0 0 15px 10px rgba(3,21,37,.77);
box-shadow: 0 0 15px 10px rgba(3,21,37,.77);
		background-position:center;
		background-size: cover;
		margin-top:40px;
		}
		.md-card.equation {padding-left:20px;padding-top:20px;padding-right:20px;}
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