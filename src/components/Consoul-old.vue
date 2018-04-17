<template>
    <div class="page-container">
        <nav-bar/>
        <div id="consoul">
           <div id="FNX-token-buy" class="buy-token-box">
                <div class="buy-action">
                    <div class="nifty-coin"><img src="../assets/phoenix.svg"/></div>
                    <md-button id="buy-FNX-tokens" class="cta">Buy FNX</md-button> 
                </div>
                <div class="doing-numbers">
                    <header>
                        <h3>Buy Price</h3>
                        <h6><b>0.06</b> ETH</h6><span>$<i>45</i> USD</span>
                    </header>
                    <input type="number" id="purchase-FNX-amount" class="form-control" placeholder="ETH to convert (e.g. 0.12)">
                </div>
           </div>
           <div id="SNK-token-buy" class="buy-token-box">
                <div class="buy-action">
                    <div class="nifty-coin"><img src="../assets/snake.svg"/></div>
                    <md-button id="buy-SNK-tokens" class="cta">Buy SNK</md-button> 
                </div>
                <div class="doing-numbers">
                    <header>
                        <h3>Buy Price</h3>
                        <h6><b>0.06</b> ETH</h6><span>$<i>41</i> USD</span>
                    </header>
                    <input type="number" id="purchase-SNK-amount" class="form-control" placeholder="ETH to convert (e.g. 0.12)">
                </div>
           </div>
           <div id="SOUL-butterfly" class="">
                <md-button id="reinvest-btn" class="cta">Reinvest</md-button>
                <div class="actions">
                    <h6 id="soulecule-count">613</h6>
                    <div id="butterfly"><img src="../assets/butterfly.png"></div>
                    <h3>Dividends</h3>
                    <h4><b>0.63</b> ETH <span>$<i>41.25</i></span></h4>    
                </div>
                <md-button id="withdraw-btn" class="\cta">Withdraw</md-button>
           </div>
           <div id="FNX-token-sell" class="token-sell">
                <header>
                    <div class="cash-value">
                        <h5><i>356</i> in Staking</h5>
                        <h2><b>9</b> ETH <span>$6300</span></h2>
                    </div>
                    <div class="sell-price">
                        <h3>Sell Price</h3>
                        <h6><b>0.04</b> ETH</h6><span>$<i>68</i> USD</span>
                    </div>
                </header>
                <md-button id="sell-FNX-tokens-btn" class="cta">Sell FNX Stake</md-button>
            </div>
            <div id="SNK-token-sell" class="token-sell">
                <header>
                    <div class="cash-value">
                        <h5><i>125</i> in Staking</h5>
                        <h2><b>2</b> ETH <span>$1500</span></h2>
                    </div>
                    <div class="sell-price">
                        <h3>Sell Price</h3>
                        <h6><b>0.04</b> ETH</h6><span>$<i>68</i> USD</span>
                    </div>
                </header>
                <md-button id="sell-SNK-tokens-btn" class="cta">Sell SNK Stake</md-button>
            </div>
        </div>
        <footer-section/>
        <md-dialog id="more-questions-modal" :md-active.sync="warning">
            <md-dialog-title>Warning</md-dialog-title>
            <md-content id="disclaimer">
                - This current contract is temporary. The final contract will be released soon.<br/>
                - Do not participate in this experiment with ETH you can't afford to lose.<br/>
                - If you decide to put ETH into this contract, you will likely lose it.<br/>
                - This contract will not generate Soulecules.<br/>
                - This contract uses ETH, not ETC. The future contract will be on the ETC network
            </md-content>
            <md-dialog-actions id="warning-closer"><md-button class="" @click="warning=false" >Close</md-button></md-dialog-actions>
        </md-dialog>
    </div>
</template>

<style lang="scss" scoped>

#consoul{
    display:grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    padding-top:64px;
}

#FNX-token-sell .token-sell header > div{float:left;}
#SNK-token-sell .token-sell header > div{float:right;}

#SOUL-butterfly{
    grid-row:2;
    grid-column:1/4;
    text-align:center;
}
#SOUL-butterfly button.md-button{
    width:120px;
    height:30px;
    font-size:80%;
    position:relative;
    top:50px;
}
#withdraw-btn,#reinvest-btn,#SOUL-butterfly .actions{
    display:inline-block;
}
#SOUL-butterfly .actions{
}

#SNK-token-sell{
    grid-row:3;
    grid-column:3;
}
#FNX-token-sell{
    grid-row:3;
    grid-column:1;
}
#SNK-token-buy{
    grid-row:1;
    grid-column:3;
}
#FNX-token-buy{
    grid-row:1;
    grid-column:1;
}
h3,h6{
    margin:0;
}
h6{
    size:15px;
}
h6,span{display:inline-block;}
.nifty-coin{
    width:50px;
    filter:invert(1) sepia(1000000) saturate(15) hue-rotate(70deg);
}
#butterfly{
}

#disclaimer{padding:30px;padding-top:0;}
.page-container{background:black;color:white;}
.md-button{
    border-style:solid;
    border-color:#344664;
    border-width:1px;
    color:white;
}
#pyrtoken-balance{top:-30px;left:10px;position:relative;text-align:left;}
#buy-eos-tokens{display:block;}
.dashboard-glass{
}
#warning-closer .md-button{border:none;color:black;}
/* gateway */
#dashboard{padding-top:64px;}
.dashboard-glass .md-button-content{color:white;}
#gateway{padding-top:15px;}
#pyr-market,#global-stats{
width:100%;
margin: 0 auto;
}
#global-stats{
text-align:right;
}
#purchase-amount {
    background: none;
    border: 0;
    border-bottom: 1px solid #ffffff;
    height: 30px;
    width: 100%;
    color: white;
    outline: none;
    font-size: 14px;
    text-align: center;
}
#pyr-market{
display: grid;
grid-row-gap: 10px;
grid-column-gap: 10px;
grid-template-columns: 30% 20% 30% 20%;
grid-template-rows: 100px auto 150px;
height:calc(100vh - 100px);
}
#splash-buy-box{
grid-column: 1;
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

.md-button{
    width:175px;
    height:45px;
}
</style>

<script>
export default {
    name: 'Consoul',
    data:()=>({
        warning: true
    }),
    created:function(){}
}

setTimeout(function(){
var adr = '0xfb62c04edfe6ad4d54357cb7d334b17d46024d3f';//address
var url = new URL(window.location.href);
    if (typeof web3 !== 'undefined') {
        web3.eth.getAccounts(function(error, accounts) {
            if (accounts.length == 0){
                $('#buy-panel').hide();
                $('#metamask-login').show();
            }
        });
    } else {
        console.log('No web3? You should consider trying MetaMask!')
        $('#buy-panel').hide();
        $('#metamask-not-found').show();
    }
        let abi =[
            {
                "constant": false,
                "inputs": [],
                "name": "fund_FNX",
                "outputs": [],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "fund_SNK",
                "outputs": [],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "getMeOutOfHere",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "sellMyTokens",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "sellMyTokens_FNX",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "sellMyTokens_SNK",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "withdraw",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "to",
                        "type": "address"
                    }
                ],
                "name": "withdrawOld",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "payable": true,
                "stateMutability": "payable",
                "type": "fallback"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf_FNX",
                "outputs": [
                    {
                        "name": "balance",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf_SNK",
                "outputs": [
                    {
                        "name": "balance",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "buyPrice",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "ethervalue",
                        "type": "uint256"
                    },
                    {
                        "name": "subvalue",
                        "type": "uint256"
                    }
                ],
                "name": "calculateDividendTokens",
                "outputs": [
                    {
                        "name": "tokens",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "contractBalance",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "dividends",
                "outputs": [
                    {
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "tokens",
                        "type": "uint256"
                    }
                ],
                "name": "getEtherForTokens",
                "outputs": [
                    {
                        "name": "ethervalue",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "ethervalue",
                        "type": "uint256"
                    }
                ],
                "name": "getTokensForEther",
                "outputs": [
                    {
                        "name": "tokens",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "payouts",
                "outputs": [
                    {
                        "name": "",
                        "type": "int256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "sellPrice",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "tokenBalance_FNX",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "tokenBalance_SNK",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply_FNX",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply_SNK",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ];
    var ponziContract = web3.eth.contract(abi);

    web3.eth.defaultAccount = web3.eth.accounts[0];
    var contract = ponziContract.at(adr) // DO NOT SEND ETH TO THIS ADDRESS. IT'S THE FUCKING TESTNET
    updateData(contract);
    
    // Now you can start your app & access web3 freely:
    var refreshInterval = setInterval(function() {
        updateData(contract);
      }, 1000);

    $('#buy-FNX-tokens').click(function() {
        let amount = $('#purchase-FNX-amount').val();
        contract.fund_FNX({
            value: convertEthToWei(amount)
        }, function(e, r) {
            console.log(e, r);
        })
    })
    $('#buy-SNK-tokens').click(function() {
        let amount = $('#purchase-SNK-amount').val();
        contract.fund_SNK({
            value: convertEthToWei(amount)
        }, function(e, r) {
            console.log(e, r);
        })
    })

    $('#sell-FNX-tokens-btn').click(function() {
        contract.sellMyTokens_FNX(function(e, r) {
            console.log(e, r);
        })
    })
    $('#sell-SNK-tokens-btn').click(function() {
        contract.sellMyTokens_SNK(function(e, r) {
            console.log(e, r);
        })
    })
    $('#reinvest-btn').click(function() {
        contract.reinvestDividends(function(e, r) {
            console.log(e, r);
        })
    })
    $('#withdraw-btn').click(function() {
        contract.withdraw(function(e, r) {
            console.log(e, r);
        })
    })

    $('#sell-tokens-btn-m').click(function() {
        contract.sellMyTokens(function(e, r) {
            console.log(e, r);
        })
    })
    $('#reinvest-btn-m').click(function() {
        contract.reinvestDividends(function(e, r) {
            console.log(e, r);
        })
    })
    $('#withdraw-btn-m').click(function() {
        contract.withdraw(function(e, r) {
            console.log(e, r);
        })
    })


function convertEthToWei(e) {
    return 1e18 * e
}

function convertWeiToEth(e) {
    return e / 1e18
}


function updateData(contract) {
    if(!web3.eth.defaultAccount) {
        return
    }
    contract.balanceOf_FNX(web3.eth.defaultAccount, function(e, r) {
        $('#FNX-token-sell .cash-value i').text((r / 1e18*1000).toFixed(4));
        contract.getEtherForTokens(r, function(e, r) {
            $("#FNX-token-sell .cash-value b").text(convertWeiToEth(r * 0.9).toFixed(4) );
        })
    })
    contract.balanceOf_SNK(web3.eth.defaultAccount, function(e, r) {
        $('#SNK-token-sell .cash-value i').text((r / 1e18*1000).toFixed(4));
        contract.getEtherForTokens(r, function(e, r) {
            $("#SNK-token-sell .cash-value b").text(convertWeiToEth(r * 0.9).toFixed(4) );
        })
    })
    contract.buyPrice(function(e, r) {
        let buyPrice = (1/(convertWeiToEth(r) * .9)/1000000).toFixed(6)
        $('#SNK-token-buy .doing-numbers b').text(buyPrice);
        $('#FNX-token-buy .doing-numbers b').text(buyPrice);
    })

    contract.sellPrice(function(e, r) {
        let sellPrice = convertWeiToEth(r).toFixed(6)
        $('#FNX-token-sell .sell-price b').text(sellPrice );
        $('#SNK-token-sell .sell-price b').text(sellPrice );
    })

    contract.dividends(web3.eth.defaultAccount, function(e, r) {
        $('#SOUL-butterfly b').text(convertWeiToEth(r).toFixed(4));
    } )

    web3.eth.getBalance(contract.address, function(e, r) {
        $(".current-distribution-period").text(convertWeiToEth(r).toFixed(4));
    })
    
}
},3000);
</script>