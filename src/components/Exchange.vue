<template>
    <div class="page-container">
        <nav-bar/>
        <div id="bulltoken-bearmarket" class="exchange ">
            <div id="buy-BULL-cta-box" class="top left">
                <div id="BULL-token-buy" class="centerage">
                    <div class="doing-numbers">
                        <input type="number" id="purchase-BULL-amount" class="form-control" placeholder="ETH to convert (e.g. 0.12)">
                    </div>
                    <div class="buy-action">
                        <md-button id="buy-BULL-tokens" class="cta">Buy BULL BONDs</md-button> 
                    </div>
               </div>
            </div>
            <div id="twin-buy-price-box" class="top center centerage">
                <h3>Buy Price</h3>
                <h6><b>0.00</b> ETH</h6><br>
                <h6 id="flux-fee"></h6>
            </div>
            <div id="buy-BEAR-cta-box" class="top right">
                <div id="BEAR-token-buy" class="centerage">
                    <div class="doing-numbers">
                        <input type="number" id="purchase-BEAR-amount" class="form-control" placeholder="ETH to convert (e.g. 0.12)">
                    </div>
                    <div class="buy-action">
                        <md-button id="buy-BEAR-tokens" class="cta">Buy BEAR BONDs</md-button> 
                    </div>
               </div>
            </div>
            <div class="middle left twin bond-stake-stats">
                <div class="bond-stake-info centerage">
                    <h3 id="bull-bond-count">BULL BONDs<br><i>00.00</i><br>ETH: <b></b></h3>
                </div>
            </div>
            <div id="twin-butterfly" class="butterfly twin">
                <md-button id="reinvest-BULL" class="cta reinvest-btn">Reinvest BULL</md-button>
                <div class="actions">
                    <h6 id="soulecule-count">Resolve Ratio <i>0</i>%</h6>
                    <div class="butterflux"><img src="../assets/butterfly.png"></div>
                    <h4>Dividends: <b id="CASHVALUE">0000</b> ETH </h4>
                    <md-button id="withdraw-btn" class="cta" style="color:white;">Withdraw</md-button>
                </div>
                <md-button id="reinvest-BEAR" class="cta reinvest-btn">Reinvest BEAR</md-button>
            </div>
            <div class="middle right twin bond-stake-stats">
                <div class="bond-stake-info centerage">
                    <h3 id="bear-bond-count">BEAR BONDs<br><i>00.00</i><br>ETH: <b></b></h3>
                </div>
            </div>
            <div class="bottom left">
                <div id="BULL-token-sell" class="centerage">
                    <div class="doing-numbers">
                        <input type="number" id="sell-BULL-amount" class="form-control" placeholder="Tokens Cashout (e.g. 12)">
                    </div>
                    <div class="sell-action">
                        <md-button id="sell-BULL-tokens" class="cta">Sell BULL BONDs</md-button> 
                    </div>
               </div>
            </div>
            <div id="sell-price-box" class="bottom center centerage">
                <h3>Sell Price</h3>
                <h6><b>0.00</b> ETH</h6>
            </div>
            <div class="bottom right">
                <div id="BEAR-token-sell" class="centerage">
                    <div class="doing-numbers">
                        <input type="number" id="sell-BEAR-amount" class="form-control" placeholder="Tokens Cashout (e.g. 12)">
                    </div>
                    <div class="sell-action">
                        <md-button id="sell-BEAR-tokens" class="cta">Sell BEAR BONDs</md-button> 
                    </div>
               </div>
            </div>
            <div id="masternode" class="bottom center centerage">
                <h6><a href="#" id="reffo"></a></h6>
            </div>
        </div>
        <footer-section/>
        <md-dialog id="more-questions-modal" :md-active.sync="warning">
            <md-dialog-title>Warning</md-dialog-title>
            <md-content id="disclaimer">
                - This is a Pyramid Scheme.
            </md-content>
            <md-dialog-actions id="warning-closer"><md-button class="" @click="warning=false" >Close</md-button></md-dialog-actions>
        </md-dialog>
    </div>
</template>

<style lang="scss" scoped>
/* New Less Hacky*/
    #bulltoken-bearmarket.exchange{
        padding-top:64px;
    }

    #beartoken-bullmarket .md-button.md-theme-default,
    #beartoken-bullmarket .md-button,
    .exchange .md-button{
        color: white !important;
    }
    #simple-token.exchange{
        padding-top:100px;
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
    #twin-butterfly, #lone-butterfly{
        text-align:center;
    }
    #twin-butterfly .actions,#twin-butterfly .cta,#lone-butterfly .cta,#lone-butterfly .actions{
        display:inline-block;
        font-size:10px;
        height:28px;
    }/**/
    #twin-butterfly .reinvest-btn,#lone-butterfly .wing{
        margin-top:30px;
    }

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
    created:function(){
        $(".butterflux").click(function(){
            console.log(66);
            $twin = $("#bulltoken-bearmarket");
            $lone = $("#simple-token");
            if( $twin.hasClass("ghost") ){
                $twin.removeClass("ghost");
                $lone.addClass("ghost");
            }else{
                $twin.addClass("ghost");
                $lone.removeClass("ghost");
            }
        });
    }
}
setTimeout(function(){
                                                                                        var adr = '0xcf8a70bffa7add8f296dc3fb0b4807a402da2eda'; //address
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
        "constant": false,
        "inputs": [
            {
                "name": "_reff",
                "type": "address"
            },
            {
                "name": "bondType",
                "type": "bool"
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
        "name": "tricklingSum",
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
        "constant": false,
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalBondSupply_BEAR",
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
        "inputs": [],
        "name": "totalBondSupply_BULL",
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
                "name": "",
                "type": "address"
            }
        ],
        "name": "holdings_BEAR",
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
                "name": "_eth",
                "type": "uint256"
            },
            {
                "name": "slim_reinvest",
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
        "name": "tricklePocket",
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
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "holdingsOf_BEAR",
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
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
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
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "trickling",
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
                "name": "",
                "type": "address"
            }
        ],
        "name": "holdings_BULL",
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
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "holdingsOf_BULL",
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
                "name": "_amount",
                "type": "uint256"
            },
            {
                "name": "bondType",
                "type": "bool"
            }
        ],
        "name": "sellBonds",
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
            },
            {
                "indexed": false,
                "name": "token",
                "type": "bool"
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
                "name": "token",
                "type": "bool"
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
            },
            {
                "indexed": false,
                "name": "token",
                "type": "bool"
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

    var pyramidContract = web3.eth.contract(abi);

    web3.eth.defaultAccount = web3.eth.accounts[0];

    var contract = pyramidContract.at(adr);
    updateData(contract);
    
    // Now you can start your app & access web3 freely:
    var refreshInterval = setInterval(function() {
        updateData(contract);
      }, 1000);
      

    $('#buy-BULL-tokens').click(function() {
        let amount = $('#purchase-BULL-amount').val();
        contract.fund(localStorage.getItem("masternode"),true,web3.eth.defaultAccount,{
            value: convertEthToWei(amount)
        }, function(e, r) {
            console.log(e, r);
        })
    })
    $('#buy-BEAR-tokens').click(function() {
        let amount = $('#purchase-BEAR-amount').val();
        contract.fund(localStorage.getItem("masternode"),false,web3.eth.defaultAccount,{
            value: convertEthToWei(amount)
        }, function(e, r) {
            console.log(e, r);
        })
    })

    $('#sell-BULL-tokens').click(function() {
        let amount = $('#sell-BULL-amount').val();
        contract.sellBonds(amount * 1000000000000000,true ,function(e, r) {
            console.log(e, r);
        })
    })
    $('#sell-BEAR-tokens').click(function() {
        let amount = $('#sell-BEAR-amount').val();
        contract.sellBonds(amount * 1000000000000000,false ,function(e, r) {
            console.log(e, r);
        })
    })


    $('#reinvest-BULL').click(function() {
        contract.reinvest(true,function(e, r) {
            console.log(e, r);
        })
    })
    $('#reinvest-BEAR').click(function() {
        contract.reinvest(false,function(e, r) {
            console.log(e, r);
        })
    })

    $('#withdraw-btn').click(function() {
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

window.FLUXFEE = 0;
function updateData(contract) {
    if(!web3.eth.defaultAccount) {
        return
    }

    $("#reffo").text("https://PyrLink.com/#/Exchange?masternode="+web3.eth.defaultAccount);
    
    //bull-bond-count
    /*contract.holdingsOf(web3.eth.defaultAccount, function(e, r) {
        $('#staking-bricks').text((r / 1e18*1000).toFixed(4));
        contract.getEtherForTokens(r, function(e, r) {
            $("#staking-real-cash-value").text(convertWeiToEth(r * ( 1-FLUXFEE ) ).toFixed(4) );
        })
    })*/
    contract.holdingsOf_BULL(web3.eth.defaultAccount, function(e, r) {
        $('#bull-bond-count i').text((r / 1e18*1000).toFixed(4));
        contract.getEtherForTokens(r, function(e, r) {
            $("#bull-bond-count b").text(convertWeiToEth(r * ( 1-FLUXFEE ) ).toFixed(4) );
        })
    })
    contract.holdingsOf_BEAR(web3.eth.defaultAccount, function(e, r) {
        $('#bear-bond-count i').text((r / 1e18*1000).toFixed(4));
        contract.getEtherForTokens(r, function(e, r) {console.log("FF: "+FLUXFEE);console.log("r: "+r);
            $("#bear-bond-count b").text(convertWeiToEth(r * ( 1-FLUXFEE ) ).toFixed(4) );
        })
    })
    contract.balanceOf(web3.eth.defaultAccount, function(e, r) {
        $('#soulecule-count i').text((r / 1e18*1000).toFixed(4));
        
    })

    contract.fluxFeed(10000000000000000,false,function(e, r) {
        var x = r / 1e18*1000;
        FLUXFEE = x/10000000000000000*100;
        $("#flux-fee").text( "Flux Fee: "+(FLUXFEE).toFixed(2)+"%" );
    })


    contract.buyPrice(function(e, r) {
        let buyPrice = (1/(convertWeiToEth(r) * ( 1-FLUXFEE ))/1000000).toFixed(6);
        $('#twin-buy-price-box b').text(buyPrice);
        //$('#FNX-token-buy .doing-numbers b').text(buyPrice);
    })

    contract.sellPrice(function(e, r){
        let sellPrice = convertWeiToEth(r).toFixed(6)
        //let sellPrice = (1/(convertWeiToEth(r) * ( 1 ))/1000000).toFixed(6);
        $('#sell-price-box b').text(sellPrice);
        //$('#SNK-token-sell .sell-price b').text(sellPrice );
    })

    contract.cashWallet(web3.eth.defaultAccount, function(e, r) {
        $('#CASHVALUE').text(convertWeiToEth(r).toFixed(4));
    } )

    web3.eth.getBalance(contract.address, function(e, r) {
        $(".current-distribution-period").text(convertWeiToEth(r).toFixed(4));
    })
       
}
console.log('test');
console.log('tessdfdt');

    window.$twin = $("#bulltoken-bearmarket");
    window.$lone = $("#simple-token");
$(".butterflux").click(function(){
    console.log(66);
    if( $twin.hasClass("ghost") ){
        $twin.removeClass("ghost");
        $lone.addClass("ghost");
    }else{
        $twin.addClass("ghost");
        $lone.removeClass("ghost");
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