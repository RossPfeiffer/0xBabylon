<template>
	<div class="page-container">
		<nav-bar/>
		<div id="dashboard" class="content-column">
			<div id="global-stats">
			  <span class="period">Contract Balance: <span class="current-distribution-period">0.000</span> ETH</span>
			</div>
			<div id="pyr-market">
			    <div id="splash-buy-box">
			      <div id="gem-count">
			        <img id="soul-gem" src="../assets/soulecule-gem-small.png" width="24px"/>
			        <span id="soultoken-count"><span class="poh-soul count">0</span> Soulcoin Gems</span>
			      </div>
			      <div id="splash-pyramid"></div>
			        <div id="pyrtoken-balance">
			          <h4>Staking Balance:</h4>
			          <div class="poh-balance count">0 PYR</div>
			        </div>
			      <label id="pyrtoken-count"></label>
			    </div>
			    <div id="action-buy-box"><div class="floor-anchor">
			      <input type="number" id="purchase-amount" class="form-control" placeholder="ETH to convert (e.g. 0.12)">
			      <button id="buy-eos-tokens" class="cta">Buy Stake</button>  </div>
			    </div>
			    <div id="divvies-box">
			      <div id="ether-cash-value"><div class="floor-anchor">
			        <h4>Dividends:</h4>
			        <div class="poh-div count">0.0 ETH</div>
			         <button id="reinvest-btn" class="cta">Reinvest</button>
			        <button id="withdraw-btn" class="cta">Withdraw</button>                                         </div>
			      </div>
			    </div>
			    <div id="staking-value-box">
			      <div class="floor-anchor"><h4>Stake Cash Value:</h4>
			      <div class="poh-value count">0.0 ETH</div>
			      <button id="sell-tokens-btn-m" class="cta">Sell Stake</button></div>
			    </div>	
			    <div id="pricechart-box">
			      <div id="buy-box">
			        <h4>Buy Price</h4>
			        <div class="poh-buy count">0.0 ETH</div>
			      </div>
			      <div id="sell-box">
			        <h4>Sell Price</h4>
			        <div class="poh-sell count">0.0 ETH</div>
			      </div>
			      <div id="chart-box"></div>
			    </div>
			</div>
	
		</div>
	</div>
</template>

<style lang="scss" scoped>
	/* gateway */
		#dashboard{padding-top:64px;}

		#gateway{padding-top:15px;}
		#pyr-market,#global-stats{
		  width:1000px;
		  margin: 0 auto;
		}
		#global-stats{
			text-align:right;
		}
		#pyr-market{
		  display: grid;
		  grid-row-gap: 10px;
		  grid-column-gap: 10px;
		  grid-template-columns: 30% 20% 30% 20%;
		  grid-template-rows: 100px 200px 150px;
		}
		#splash-buy-box{
		  grid-column: 1;
		  grid-row:1/span 2;
		}
		#action-buy-box{
		  grid-column: 1;
		  grid-row:3/4;
		}
		#divvies-box{
		  grid-column: 2 / 4;
		  grid-row:3;
		}
		#divvies-box .poh-div{
		  text-align: center;
		}
		#staking-value-box{
		  grid-column: 4;
		  grid-row:3;
		}
		#pricechart-box{
		  grid-column: 2/5;
		  grid-row:1/3;
		  display: grid;
		  grid-template-rows: 25% 75%;
		  grid-template-columns: 50% 50%;
		}
		#buy-box{
		  grid-column: 1;
		  grid-row: 1;
		}
		#sell-box{
		  grid-column: 2;
		  grid-row: 1;
		}
		#chart-box{
		  grid-column: 1/3;
		  grid-row: 2;
		}

		#splash-pyramid{
		  height:230px;
		}
		#gem-count{
		  width:250px;
		  margin: 0 auto;
		  margin-top: 10px;
		}

		#ether-cash-value,#staking-value-box,#action-buy-box{
		  text-align: center;
		}
		#ether-cash-value .floor-anchor{
		  width:100%;
		}
		.floor-anchor{
		  display: block;
		  position: absolute;
		  bottom: 0;
		}

		#pyr-market > div{position: relative;}
		#pyr-market .count{
		  font-size:20px;
		  margin-bottom: 10px;
		}
		#soultoken-count .poh-soul{
		  font-size:14px;
		}
		#soul-gem{margin-right: 10px;}
</style>

<script>
export default {
	name: 'IDK'
}
</script>