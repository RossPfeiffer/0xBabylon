<template>
    <div class="page-container">
        <nav-bar/>
        <div id="contracts-nav">
            <button class="selected mirror" flux="mirror">PyrConnect Exchange</button> <button class="shadow" flux="shadow">0xBabylon Exchange<!-- 0xBabylon --></button>
        </div>
        <div id="MIRROR-token" class="exchange mirror ">
            <div id="buy-MIRROR-cta-box" class="top left">
                <div id="MIRROR-token-buy" class="centerage">
                    <div class="buy-price">
                        <h3>Buy Price</h3>
                        <h6><b>0.00</b> ETH</h6><br>
                    </div>
                    <div class="doing-numbers">
                        <input type="number" id="purchase-MIRROR-amount" class="form-control" placeholder="ETH to convert (e.g. 0.12)">
                    </div>
                    <div class="buy-action">
                        <md-button id="buy-MIRROR-tokens" class="cta buy-MIRROR">Buy BONDs</md-button>
                        <div class="return-predictor rp-getTokensForEther">Est. Tokens for ETH:<br><i>0</i></div>
                    </div>
               </div>
            </div>
            <div id="lone-buy-box" class="top center centerage">
                <div class="bond-stake-info centerage">
                    <h1>Mirror Flux</h1>
                    <h3 id="bond-count">BONDs<br><i>00.00</i><br>ETH: <b></b></h3>
                </div>
            </div>
            <div id="sell-MIRROR-cta-box" class="top right">
                <div id="MIRROR-token-sell" class="centerage">
                    <div class="sell-price">
                        <h3>Sell Price</h3>
                        <h6><b>0.00</b> ETH</h6><br>
                    </div>
                    <div class="doing-numbers">
                        <input type="number" id="sell-MIRROR-amount" class="form-control" placeholder="Tokens to sell (e.g. 12)">
                    </div>
                    <div class="buy-action">
                        <md-button id="sell-MIRROR-tokens" class="cta sell-MIRROR">Sell BONDs</md-button> 
                        <div class="return-predictor rp-getEtherForTokens">Est. ETH for Token:<br><i>0</i></div>
                    </div>
               </div>
            </div>
            <div class="middle left twin bond-stake-stats">
            </div>
            <div id="MIRROR-butterfly" class="butterfly lone">
                <md-button id="MIRROR-reinvest" class="cta MIRROR-reinvest reinvest-btn wing">Reinvest</md-button>
                <div class="actions">
                    <h6 class="soulecule-count">Resolve Ratio <i>0</i>%<br><b></b></h6>
                    <div class="butterflux"><img src="../assets/butterfly.png"></div>
                    <h4>Dividends: <b class="divcash">0000</b> ETH </h4>
                </div>
                <md-button id="withdraw-btn" class="cta MIRROR-withdraw wing" style="color:white;">Withdraw</md-button>
            </div>
            <div class="middle right twin bond-stake-stats">
            </div>
            <div class="bottom center centerage">
                <h3>Flux Fee</h3>
                <h6><b class="flux-fee">0.00</b></h6>
            </div>
            <div id="masternode" class="bottom center centerage">
                <h6><span>Masternode = 1000 BONDs</span><br><span class="reffo"></span></h6>
            </div>
        </div>
        <div id="SHADOW-token" class="exchange shadow ghost">
            <div id="buy-SHADOW-cta-box" class="top left">
                <div id="SHADOW-token-buy" class="centerage">
                    <div class="buy-price">
                        <h3>Buy Price</h3>
                        <h6><b>0.00</b> ETH</h6><br>
                    </div>
                    <div class="doing-numbers">
                        <input type="number" id="purchase-SHADOW-amount" class="form-control" placeholder="ETH to convert (e.g. 0.12)">
                    </div>
                    <div class="buy-action">
                        <md-button id="buy-SHADOW-tokens" class="cta buy-SHADOW">Buy BONDs</md-button>
                        <div class="return-predictor rp-getTokensForEther">Est. Tokens for ETH:<br><i>0</i></div>
                    </div>
               </div>
            </div>
            <div id="lone-buy-box" class="top center centerage">
                <div class="bond-stake-info centerage">
                    <h1>Shadow Flux</h1>
                    <h3 id="bond-count">BONDs<br><i>00.00</i><br>ETH: <b></b></h3>
                </div>
            </div>
            <div id="sell-SHADOW-cta-box" class="top right">
                <div id="SHADOW-token-sell" class="centerage">
                    <div class="sell-price">
                        <h3>Sell Price</h3>
                        <h6><b>0.00</b> ETH</h6><br>
                    </div>
                    <div class="doing-numbers">
                        <input type="number" id="sell-SHADOW-amount" class="form-control" placeholder="Tokens to sell (e.g. 12)">
                    </div>
                    <div class="buy-action">
                        <md-button id="sell-SHADOW-tokens" class="cta sell-SHADOW">Sell BONDs</md-button> 
                        <div class="return-predictor rp-getEtherForTokens">Est. ETH for Token:<br><i>0</i></div>
                    </div>
               </div>
            </div>
            <div class="middle left twin bond-stake-stats">
            </div>
            <div id="SHADOW-butterfly" class="butterfly lone">
                <md-button id="SHADOW-reinvest" class="cta SHADOW-reinvest reinvest-btn wing">Reinvest</md-button>
                <div class="actions">
                    <h6 class="soulecule-count">Resolve Ratio <i>0</i>%<br><b></b></h6>
                    <div class="butterflux"><img src="../assets/butterfly.png"></div>
                    <h4>Dividends: <b class="divcash">0000</b> ETH </h4>
                </div>
                <md-button id="withdraw-btn" class="cta SHADOW-withdraw wing" style="color:white;">Withdraw</md-button>
            </div>
            <div class="middle right twin bond-stake-stats">
            </div>
            <div class="bottom center centerage">
                <h3>Flux Fee</h3>
                <h6><b class="flux-fee">0.00</b></h6>
            </div>
            <div id="masternode" class="bottom center centerage">
                <h6><span>Masternode = 1000 BONDs</span><br><span class="reffo"></span></h6>
            </div>
        </div>
        <footer-section/>
        <md-dialog id="more-questions-modal" :md-active.sync="warning">
            <md-dialog-title>Warning</md-dialog-title>
            <md-content id="disclaimer">
                - THIS IS AN EXPERIMENTAL FINTECH DAPP
            </md-content>
            <md-dialog-actions id="warning-closer"><md-button class="" @click="warning=false" >Close</md-button></md-dialog-actions>
        </md-dialog>
    </div>
</template>

<style lang="scss" scoped>
/*
                                                    TWIN TOKEN STYLING
*/
    #contracts-nav{
        text-align:center;
                padding-top:100px;
                padding-bottom:20px;
    }
    #contracts-nav button{
        background:none;
        border-style:solid;
        color:white;
        font-size:8px;
        font-weight:700;
        height:20px;
        padding-left:35px;
        padding-right:35px;
        margin-left:10px;
        margin-right:10px;
    }
    #contracts-nav button.mirror{border-color:#344664;}
    #contracts-nav button.shadow{border-color:#644634;}
    button{cursor:pointer;}
            .exchange{
            }
                
            .md-button{
                border-style:solid;
                border-color:#344664;
                border-width:1px;
                color:white;
            }
            #MIRROR-token .md-button{
                border-color:#344664;
                color:white;
            }
            #SHADOW-token .md-button{
                border-color:#644634;
                color:white;
            }




/* New Less Hacky*/
    #bulltoken-bearmarket.exchange{
        padding-top:64px;
    }

    #beartoken-bullmarket .md-button.md-theme-default,
    #beartoken-bullmarket .md-button,
    .exchange .md-button{
        color: white !important;
    }
    .exchange{
        display:grid;
        height:100vh;
        grid-template-columns: auto auto auto auto auto auto auto auto auto;
        grid-template-rows: auto auto auto;
        width:100%;
    }
    .ghost{display:none;}
    .exchange .top{grid-row:1;}
    .exchange .middle{grid-row:2;}
    .exchange .bottom{grid-row:3;}
    .exchange .left{grid-column-start:1; grid-column-end:4;}
        .exchange .middle.left{grid-column-start:1; grid-column-end:3;}
    .exchange .center{grid-column-start:4 ;grid-column-end:7;}
    .exchange .right{grid-column-start:7 ;grid-column-end:10;}
        .exchange .middle.right{grid-column-start:8 ;grid-column-end:10;}
    .exchange .butterfly{grid-row:2;grid-column-start:3 ;grid-column-end:8;}
    #masternode h6{width:100%;position:absolute;bottom:0;left:0;}
    .butterfly{
        text-align:center;
    }
    .butterfly .actions,.butterfly .cta{
        display:inline-block;
        font-size:10px;
        height:28px;
    }/**/
    #twin-butterfly .reinvest-btn,#lone-butterfly .wing{
        margin-top:30px;
    }
    .soulecule-count{font-size:12px;}

    #bulltoken-bearmarket > div{padding-top:42px;}

/* Old Hacky */
            .centerage{text-align:center;}
            #consoul{
                display:grid;
                height:100vh;
                grid-template-columns: auto auto auto;
                grid-template-rows: auto auto auto;
                padding-top:134px;  
            }
            #staking-stuff{
                width:100%;
                position:relative;
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
    created:function(){
        /*$(".butterflux").click(function(){
            $twin = $("#bulltoken-bearmarket");
            $lone = $("#MIRROR-token");
            if( $twin.hasClass("ghost") ){
                $twin.removeClass("ghost");
                $lone.addClass("ghost");
            }else{
                $twin.addClass("ghost");
                $lone.removeClass("ghost");
            }
        });*/
    }
}
setTimeout(function(){
                                                                                    var adr = '0x19080df0360ce52b1068d54e1769182d9cc2b218'; //address
                                                                                    var OG_adr = '0x67f41953b90966257c71f6f271572399dfbfe16d'; //address
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
let abi = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "holdingsOf",
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
        "name": "resolver",
        "outputs": [
            {
                "name": "",
                "type": "address"
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
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_eth",
                "type": "uint256"
            },
            {
                "name": "slim_reinvest",
                "type": "bool"
            },
            {
                "name": "newETH",
                "type": "bool"
            }
        ],
        "name": "fluxFeed",
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
        "inputs": [],
        "name": "totalBondSupply",
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
        "name": "totalSupply",
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
        "name": "avgFactor_ethSpent",
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
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
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
        "name": "balances",
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
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "amount",
                "type": "uint256"
            },
            {
                "name": "_eth",
                "type": "uint256"
            }
        ],
        "name": "calcResolve",
        "outputs": [
            {
                "name": "calculatedResolveTokens",
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
        "inputs": [],
        "name": "resolveSupply",
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
        "constant": false,
        "inputs": [
            {
                "name": "to",
                "type": "address"
            }
        ],
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
                "name": "forWho",
                "type": "address"
            },
            {
                "name": "cR",
                "type": "uint256"
            },
            {
                "name": "cG",
                "type": "uint256"
            },
            {
                "name": "cB",
                "type": "uint256"
            }
        ],
        "name": "reinvest_color",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "trickleSum",
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
        "name": "stakingRequirement",
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
            },
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "allowed",
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
                "name": "buyOrSell",
                "type": "bool"
            }
        ],
        "name": "price",
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
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
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
        "name": "investSum",
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
        "name": "reff",
        "outputs": [
            {
                "name": "",
                "type": "address"
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
        "name": "color_B",
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
        "name": "lastGateway",
        "outputs": [
            {
                "name": "",
                "type": "address"
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
        "constant": false,
        "inputs": [
            {
                "name": "reffo",
                "type": "address"
            },
            {
                "name": "forWho",
                "type": "address"
            }
        ],
        "name": "fund",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
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
        "inputs": [
            {
                "name": "forWho",
                "type": "address"
            }
        ],
        "name": "reinvest",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
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
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "tricklingPass",
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
        "name": "holdings",
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
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "remaining",
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
        "name": "pocket",
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
        "name": "withdrawSum",
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
        "name": "color_R",
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
        "constant": false,
        "inputs": [
            {
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "sellBonds",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_reff",
                "type": "address"
            },
            {
                "name": "forWho",
                "type": "address"
            },
            {
                "name": "cR",
                "type": "uint256"
            },
            {
                "name": "cG",
                "type": "uint256"
            },
            {
                "name": "cB",
                "type": "uint256"
            }
        ],
        "name": "fund_color",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
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
        "name": "color_G",
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
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "customerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "incomingEthereum",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "tokensMinted",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "gateway",
                "type": "address"
            }
        ],
        "name": "onTokenPurchase",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "buyerAddress",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "forWho",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "incomingEthereum",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "tokensMinted",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "gateway",
                "type": "address"
            }
        ],
        "name": "onBoughtFor",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "buyerAddress",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "forWho",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "incomingEthereum",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "tokensMinted",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "gateway",
                "type": "address"
            }
        ],
        "name": "onReinvestFor",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "customerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "totalTokensAtTheTime",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "tokensBurned",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "ethereumEarned",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "resolved",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "gateway",
                "type": "address"
            }
        ],
        "name": "onTokenSell",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "customerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "ethereumReinvested",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "tokensMinted",
                "type": "uint256"
            },
            {
                "indexed": true,
                "name": "gateway",
                "type": "address"
            }
        ],
        "name": "onReinvestment",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "customerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "ethereumWithdrawn",
                "type": "uint256"
            }
        ],
        "name": "onWithdraw",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "ownerAddress",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "receiverAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "ethereumWithdrawn",
                "type": "uint256"
            }
        ],
        "name": "onCashDividends",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "customerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "oldR",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "oldG",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "oldB",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "newR",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "newG",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "newB",
                "type": "uint256"
            }
        ],
        "name": "onColor",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "fromWho",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "finalReff",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "reward",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "passUp",
                "type": "uint256"
            }
        ],
        "name": "onTrickle",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_owner",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Resolved",
        "type": "event"
    }
];
let OG_abi = [
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_owner",
                            "type": "address"
                        }
                    ],
                    "name": "holdingsOf",
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
                    "name": "resolver",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
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
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_spender",
                            "type": "address"
                        },
                        {
                            "name": "_value",
                            "type": "uint256"
                        }
                    ],
                    "name": "approve",
                    "outputs": [
                        {
                            "name": "success",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_eth",
                            "type": "uint256"
                        },
                        {
                            "name": "slim_reinvest",
                            "type": "bool"
                        },
                        {
                            "name": "buyOrSell",
                            "type": "bool"
                        }
                    ],
                    "name": "fluxFeed",
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
                    "inputs": [],
                    "name": "totalBondSupply",
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
                    "name": "totalSupply",
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
                    "name": "avgFactor_ethSpent",
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
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_from",
                            "type": "address"
                        },
                        {
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "name": "_value",
                            "type": "uint256"
                        }
                    ],
                    "name": "transferFrom",
                    "outputs": [
                        {
                            "name": "success",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayable",
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
                    "name": "balances",
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
                            "name": "_owner",
                            "type": "address"
                        },
                        {
                            "name": "amount",
                            "type": "uint256"
                        },
                        {
                            "name": "_eth",
                            "type": "uint256"
                        }
                    ],
                    "name": "calcResolve",
                    "outputs": [
                        {
                            "name": "calculatedResolveTokens",
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
                    "inputs": [],
                    "name": "resolveSupply",
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
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_value",
                            "type": "uint256"
                        }
                    ],
                    "name": "burn",
                    "outputs": [
                        {
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
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
                    "name": "withdraw",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "trickleSum",
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
                    "name": "stakingRequirement",
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
                        },
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "name": "allowed",
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
                            "name": "_owner",
                            "type": "address"
                        }
                    ],
                    "name": "cashWallet",
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
                            "name": "buyOrSell",
                            "type": "bool"
                        }
                    ],
                    "name": "price",
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
                            "name": "_owner",
                            "type": "address"
                        }
                    ],
                    "name": "balanceOf",
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
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "name": "souleculeB",
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
                    "name": "investSum",
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
                    "name": "reff",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "lastGateway",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
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
                    "constant": false,
                    "inputs": [
                        {
                            "name": "reffo",
                            "type": "address"
                        },
                        {
                            "name": "forWho",
                            "type": "address"
                        }
                    ],
                    "name": "fund",
                    "outputs": [],
                    "payable": true,
                    "stateMutability": "payable",
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
                    "name": "burned",
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
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "name": "_value",
                            "type": "uint256"
                        }
                    ],
                    "name": "transfer",
                    "outputs": [
                        {
                            "name": "success",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayable",
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
                    "name": "totalBurned",
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
                    "name": "souleculeG",
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
                    "name": "holdings",
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
                            "name": "_owner",
                            "type": "address"
                        },
                        {
                            "name": "_spender",
                            "type": "address"
                        }
                    ],
                    "name": "allowance",
                    "outputs": [
                        {
                            "name": "remaining",
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
                    "name": "pocket",
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
                    "name": "withdrawSum",
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
                    "constant": false,
                    "inputs": [
                        {
                            "name": "soulR",
                            "type": "uint256"
                        },
                        {
                            "name": "soulG",
                            "type": "uint256"
                        },
                        {
                            "name": "soulB",
                            "type": "uint256"
                        }
                    ],
                    "name": "reinvest_color",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
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
                    "name": "tricklingFlo",
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
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "sellBonds",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
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
                    "name": "souleculeR",
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
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_reff",
                            "type": "address"
                        },
                        {
                            "name": "forWho",
                            "type": "address"
                        },
                        {
                            "name": "soulR",
                            "type": "uint256"
                        },
                        {
                            "name": "soulG",
                            "type": "uint256"
                        },
                        {
                            "name": "soulB",
                            "type": "uint256"
                        }
                    ],
                    "name": "fund_color",
                    "outputs": [],
                    "payable": true,
                    "stateMutability": "payable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "reinvest",
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
                    "payable": true,
                    "stateMutability": "payable",
                    "type": "fallback"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "customerAddress",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "incomingEthereum",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "tokensMinted",
                            "type": "uint256"
                        },
                        {
                            "indexed": true,
                            "name": "referredBy",
                            "type": "address"
                        }
                    ],
                    "name": "onTokenPurchase",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "buyerAddress",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "forWho",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "incomingEthereum",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "tokensMinted",
                            "type": "uint256"
                        },
                        {
                            "indexed": true,
                            "name": "referredBy",
                            "type": "address"
                        }
                    ],
                    "name": "onBoughtFor",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "customerAddress",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "totalTokensAtTheTime",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "tokensBurned",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "ethereumEarned",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "resolved",
                            "type": "uint256"
                        }
                    ],
                    "name": "onTokenSell",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "customerAddress",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "ethereumReinvested",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "tokensMinted",
                            "type": "uint256"
                        }
                    ],
                    "name": "onReinvestment",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "customerAddress",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "ethereumWithdrawn",
                            "type": "uint256"
                        }
                    ],
                    "name": "onWithdraw",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "customerAddress",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "ethereumWithdrawn",
                            "type": "uint256"
                        }
                    ],
                    "name": "onCashDividends",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "customerAddress",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "oldR",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "oldG",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "oldB",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "newR",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "newG",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "newB",
                            "type": "uint256"
                        }
                    ],
                    "name": "onColor",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "_from",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "_value",
                            "type": "uint256"
                        }
                    ],
                    "name": "Transfer",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "_owner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "_spender",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "_value",
                            "type": "uint256"
                        }
                    ],
                    "name": "Approval",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "_owner",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "Resolved",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "_owner",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "Burned",
                    "type": "event"
                }
            ];
    var mirrorFluxModel = web3.eth.contract(abi);
    var shadowFluxModel = web3.eth.contract(OG_abi);

    web3.eth.defaultAccount = web3.eth.accounts[0];

    var mirrorContract = mirrorFluxModel.at(adr);
    var shadowContract = shadowFluxModel.at(OG_adr);
    updateData(mirrorContract,shadowContract);
    
    // Now you can start your app & access web3 freely:
    var refreshInterval = setInterval(function() {
        updateData(mirrorContract,shadowContract);
    }, 1000);
    
    //-------------------------------------------------------------- MIRROR TOKEN...

        var $buyInput_MIRROR = $('#purchase-MIRROR-amount');
        var $sellInput_MIRROR = $('#sell-MIRROR-amount');

                    $('.buy-MIRROR').click(function() {
                        let amount = $buyInput_MIRROR.val();
                        mirrorContract.fund(localStorage.getItem("masternode"),web3.eth.defaultAccount,{
                            value: convertEthToWei(amount)
                        }, function(e, r){
                            console.log(e, r);
                        });
                    });

                            $buyInput_MIRROR.keydown(function(){
                                var x = parseFloat( $buyInput_MIRROR.val() );
                                if(!MIRROR_FLUX)
                                    MIRROR_FLUX=0;
                                if(MIRROR_BONDS>0 && x>0){
                                    mirrorContract.getTokensForEther( convertEthToWei( x ) * (1-MIRROR_FLUX), function(e, r){
                                        var tokens = parseFloat(r)/1000000000000000;
                                        console.log("how many tokens?",tokens,"-----------")
                                        $(".rp-getTokensForEther i").text( tokens.toFixed(4) );
                                    });
                                }
                            });

                    $('.sell-MIRROR').click(function() {
                        let amount = $('#sell-MIRROR-amount').val();
                        mirrorContract.sellBonds(amount * 1000000000000000,function(e, r) {
                            console.log(e, r);
                        })
                    });

                            $sellInput_MIRROR.keydown(function(){
                                var x = parseFloat( $sellInput_MIRROR.val() );
                                if(!MIRROR_FLUX)
                                    MIRROR_FLUX=0;
                                if(MIRROR_BONDS>0 && x>0){
                                    var theseBonds=MIRROR_BONDS*1000000000000000;
                                    console.log("MIRROR_BONDS: ",MIRROR_BONDS);
                                    console.log("x: ",x* 1000000000000000);
                                    mirrorContract.getEtherForTokens(  Math.max(x* 1000000000000000, 0)  , function(e, r){
                                        var ethers = convertWeiToEth(r)*(1-MIRROR_FLUX);
                                        $(".rp-getEtherForTokens i").text( ethers.toFixed(4) );
                                    });
                                }
                            });

                    $('.MIRROR-reinvest').click(function() {
                        mirrorContract.reinvest(web3.eth.defaultAccount,function(e, r) {
                            console.log(e, r);
                        })
                    })

                    $('.MIRROR-withdraw').click(function() {
                        mirrorContract.withdraw(web3.eth.defaultAccount,function(e, r) {
                            console.log(e, r);
                        })
                    })
    
  //-------------------------------------------------------------- SHADOW TOKEN...

        var $buyInput_SHADOW = $('#purchase-SHADOW-amount');
        var $sellInput_SHADOW = $('#sell-SHADOW-amount');

                    $('.buy-SHADOW').click(function() {
                        let amount = $buyInput_SHADOW.val();
                        shadowContract.fund(localStorage.getItem("masternode"),web3.eth.defaultAccount,{
                            value: convertEthToWei(amount)
                        }, function(e, r){
                            console.log(e, r);
                        });
                    });

                            $buyInput_SHADOW.keydown(function(){
                                var x = parseFloat( $buyInput_SHADOW.val() );
                                if(!SHADOW_FLUX)
                                    SHADOW_FLUX=0;
                                if(SHADOW_BONDS>0){    
                                    shadowContract.getTokensForEther( convertEthToWei( x ) * (1-SHADOW_FLUX), function(e, r){
                                        var tokens = parseFloat(r)/1000000000000000;
                                        console.log("how many tokens?",tokens,"-----------")
                                        $(".rp-getTokensForEther i").text( tokens.toFixed(4) );
                                    });
                                }
                            });

                    $('.sell-SHADOW').click(function() {
                        let amount = $('#sell-SHADOW-amount').val();
                        shadowContract.sellBonds(amount * 1000000000000000,function(e, r) {
                            console.log(e, r);
                        })
                    });

                            $sellInput_SHADOW.keydown(function(){
                                var x = parseFloat( $sellInput_SHADOW.val() );
                                if(!SHADOW_FLUX)
                                    SHADOW_FLUX=0;
                                if(SHADOW_BONDS>0){
                                    var theseBonds=SHADOW_BONDS*1000000000000000;
                                    console.log("SHADOW_BONDS: ",SHADOW_BONDS);
                                    console.log("x: ",x* 1000000000000000);
                                    shadowContract.getEtherForTokens(  Math.max(x* 1000000000000000, 0)  , function(e, r){
                                        var ethers = convertWeiToEth(r)*(1-SHADOW_FLUX);
                                        $(".rp-getEtherForTokens i").text( ethers.toFixed(4) );
                                    });
                                }
                            });

                    $('.SHADOW-reinvest').click(function() {
                        shadowContract.reinvest(function(e, r) {
                            console.log(e, r);
                        })
                    })

                    $('.SHADOW-withdraw').click(function() {
                        shadowContract.withdraw(web3.eth.defaultAccount,function(e, r) {
                            console.log(e, r);
                        })
                    })
     



window.convertEthToWei =function(e){
    return 1e18 * e
}

window.convertWeiToEth =function(e) {
    return e / 1e18
}
window.highlander = false;
window.SHADOW_FLUX = 0;
window.MIRROR_FLUX = 0;
window.setmn = false;
window.MIRROR_BONDS = null;
window.SHADOW_BONDS = null;
function updateData(mirrorContract,shadowContract) {
    if(!web3.eth.defaultAccount) {
        return
    }

    if(!window.setmn){
        window.setmn = true;
        $(".reffo").text("https://PyrConnect.com/#/Exchange?masternode="+web3.eth.defaultAccount);
    }
    
    //------------------------------------------------------------   MIRROR FLUX      
                    mirrorContract.holdingsOf(web3.eth.defaultAccount, function(e, r) {
                        $('#MIRROR-token .bond-stake-info i').text((r / 1e18*1000).toFixed(4));
                        MIRROR_BONDS = parseFloat(r / 1e18*1000);
                        mirrorContract.totalBondSupply.call(function(e, tbs){
                            if( parseFloat(r) == parseFloat(tbs) )
                                highlander = true;
                            else
                                highlander = false;
                        });

                        mirrorContract.getEtherForTokens(r, function(e, x){
                            if(r>0){
                                $("#MIRROR-token .bond-stake-info b").text(convertWeiToEth(x * ( 1-MIRROR_FLUX ) ).toFixed(4) );
                            }else{
                                $("#MIRROR-token .bond-stake-info b").text("00000");
                            }
                        })
                    });

                    mirrorContract.balanceOf(web3.eth.defaultAccount, function(e, r) {
                        mirrorContract.resolveSupply( function(e, x) {
                            if(x == 0){
                                $('#MIRROR-token .soulecule-count i').text( (0).toFixed(2));
                                $('#MIRROR-token .soulecule-count b').text( (0).toFixed(2));}
                            else{
                                $('#MIRROR-token .soulecule-count i').text( (r/x*100).toFixed(2));
                                $('#MIRROR-token .soulecule-count b').text( (r / 1e18*1000).toFixed(4));
                            }
                        });
                    });

                    mirrorContract.price(true,function(e, r){
                        let buyPrice = (1/convertWeiToEth(r)/1000000).toFixed(6);    
                        $('#MIRROR-token .buy-price b').text(buyPrice);
                    });

                    mirrorContract.price(false,function(e, r){
                        
                        let sellPrice = convertWeiToEth(r).toFixed(6);
                        $('#MIRROR-token .sell-price b').text(sellPrice);
                    });

                    mirrorContract.dividends(web3.eth.defaultAccount, function(e, r) {
                        mirrorContract.pocket.call(web3.eth.defaultAccount,function(e, x){
                            $('#MIRROR-token .divcash').text(convertWeiToEth(parseInt(r)+parseInt(x)).toFixed(4));
                        });
                    });

                    mirrorContract.investSum.call(function (e, r){
                            if(r!=0)
                                var iSum = r;
                            else
                                var iSum = 0;
                        mirrorContract.withdrawSum.call(function (e, x) {
                            if(x!=0)
                                var wSum = x;
                            else
                                var wSum = 0;
                            
                            if(iSum == 0 || highlander ){
                                MIRROR_FLUX = 0;
                                $('#MIRROR-token .flux-fee').text( "0%"  )
                            }else{
                                MIRROR_FLUX = (iSum-wSum)/iSum;
                                $('#MIRROR-token .flux-fee').text( (MIRROR_FLUX*100).toFixed(2) +"%"  )
                            }
                        });
                    });
    
    //------------------------------------------------------------   SHADOW FLUX      
                    shadowContract.holdingsOf(web3.eth.defaultAccount, function(e, r) {
                        $('#SHADOW-token .bond-stake-info i').text((r / 1e18*1000).toFixed(4));
                        SHADOW_BONDS = parseFloat(r / 1e18*1000);
                        shadowContract.totalBondSupply.call(function(e, tbs){
                            if( parseFloat(r) == parseFloat(tbs) )
                                highlander = true;
                            else
                                highlander = false;
                        });

                        shadowContract.getEtherForTokens(r, function(e, x){
                            if(r>0){
                                $("#SHADOW-token .bond-stake-info b").text(convertWeiToEth(x * ( 1-SHADOW_FLUX ) ).toFixed(4) );
                            }else{
                                $("#SHADOW-token .bond-stake-info b").text("00000");
                            }
                        })
                    });

                    shadowContract.balanceOf(web3.eth.defaultAccount, function(e, r) {
                        shadowContract.resolveSupply( function(e, x) {
                            if(x == 0){
                                $('#SHADOW-token .soulecule-count i').text( (0).toFixed(2));
                                $('#SHADOW-token .soulecule-count b').text( (0).toFixed(2));}
                            else{
                                $('#SHADOW-token .soulecule-count i').text( (r/x*100).toFixed(2));
                                $('#SHADOW-token .soulecule-count b').text( (r / 1e18*1000).toFixed(4));
                            }
                        });
                    });

                    shadowContract.price(true,function(e, r){
                        let buyPrice = (1/convertWeiToEth(r)/1000000).toFixed(6);    
                        $('#SHADOW-token .buy-price b').text(buyPrice);
                    });

                    shadowContract.price(false,function(e, r){
                        
                        let sellPrice = convertWeiToEth(r).toFixed(6);
                        $('#SHADOW-token .sell-price b').text(sellPrice);
                    });

                    shadowContract.cashWallet(web3.eth.defaultAccount, function(e, r) {
                        $('#SHADOW-token .divcash').text(convertWeiToEth( parseInt(r) ).toFixed(4));
                        /*shadowContract.pocket.call(web3.eth.defaultAccount,function(e, x){});*/
                    });

                    shadowContract.investSum.call(function (e, r){
                            if(r!=0)
                                var iSum = r;
                            else
                                var iSum = 0;
                        shadowContract.withdrawSum.call(function (e, x) {
                            if(x!=0)
                                var wSum = x;
                            else
                                var wSum = 0;
                            
                            if(iSum == 0 || highlander ){
                                SHADOW_FLUX = 0;
                                $('#SHADOW-token .flux-fee').text( "0%"  )
                            }else{
                                SHADOW_FLUX = wSum/iSum;
                                $('#SHADOW-token .flux-fee').text( (SHADOW_FLUX*100).toFixed(2) +"%"  )
                            }
                        });
                    });

}
    window.$SHADOW = $("#SHADOW-token");
    window.$MIRROR = $("#MIRROR-token");

    $("#contracts-nav button").click(function(){
        $("#contracts-nav button").removeClass("selected");
        $("#contracts-nav " + $(this).attr("flux")).addClass("selected");

        $(".exchange").removeClass("ghost");//just in case
        $(".exchange").addClass("ghost");
        $(".exchange." + $(this).attr("flux") ).removeClass("ghost");
        console.log( $(this).attr("flux") );
    });

$(".butterflux").click(function(){
    console.log(66);
    if( $SHADOW.hasClass("ghost") ){
        $SHADOW.removeClass("ghost");
        $MIRROR.addClass("ghost");
    }else{
        $SHADOW.addClass("ghost");
        $MIRROR.removeClass("ghost");
    }
});/**/

},3000);
function getURL(query) {  
    return query.substr(query.indexOf('masternode')+11);
}
document.addEventListener('DOMContentLoaded', function(){
    var masternode = getURL(window.location.hash);
    if(masternode) localStorage.setItem("masternode", masternode)
    
});
</script>