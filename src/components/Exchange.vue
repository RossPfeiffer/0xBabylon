<template>
    <div class="page-container">
        <nav-bar/>
        <input id="masternode-clipboard" type="text" style="width:110px;height:310px;position:absolute;opacity:0;"/>
        <div id="MIRROR-token" class="exchange mirror ">
            <div class="top outer-left global-stats">
                <div class="slate">
                    <h3>Global</h3>
                    <div class="top outer-left centerage mobile-head body">
                        <div class="global-bond-stake-info centerage">
                            <labeled-number class="global-contractbalance" label="ETH in Contract" number="0000"><img src="../assets/eth.png"></labeled-number>
                            <labeled-number class="global-totalbonds" label="Circulating BONDs" number="0000"><img src="../assets/bonds-scroll.png"></labeled-number>
                            <labeled-number class="global-fluxfee" label="Flux Fee" number="0000"><img class="shadowfy" src="../assets/butterfly.png"></labeled-number>
                        </div>
                        <div class="contracts-nav">
                             <button class="shadow" flux="shadow">Goto Old Contract</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="buy-MIRROR-cta-box" class="top inner-left action-pair buy-bonds">
                <div class="slate">
                    <h3>Buy</h3>
                    <div id="MIRROR-token-buy" class="centerage body">
                            <labeled-number class="buy-price no-icon" label="Buy Price" number="0.0003"></labeled-number>
                            <labeled-number class="buy amount-input no-icon" label="ETH to spend" number="eg 0.12" isInput="true"></labeled-number>
                            <div class="buy-action">
                                <md-button id="buy-MIRROR-tokens" class="cta buy-MIRROR">Buy <i>BONDs</i></md-button><button class="giftable" forwhat="buyfor-mirror"></button>
                                <!--<div class="return-predictor rp-getTokensForEther">Est. Tokens for ETH:<br><i>0</i></div>-->
                                <labeled-number class="buy estimated-amount no-icon mini-label" label="BONDs for ETH" number="Type Something in"></labeled-number>
                            </div>
                    </div>
                </div>
            </div>
            <div id="lone-buy-box" class="top inner-right mobile-head">
                <div class="slate">
                    <h3>(You)</h3>
                    <div class="bond-stake-info body">
                        <labeled-number class="your-bonds" label="BONDs" number="00.00"><img src="../assets/bonds-scroll.png"></labeled-number>
                        <labeled-number class="your-bonds-eth" label="ETH Value" number="00.00"><img src="../assets/eth.png"></labeled-number>
                        <labeled-number class="your-resolves" label="Resolve Tokens" number="00.00"><img src="../assets/resolve.png"></labeled-number>
                        <div class="centerage"><md-button class="masternode-link thin-btn">Masternode</md-button></div>
                    </div>
                </div>
            </div>
            <div id="sell-MIRROR-cta-box" class="top outer-right action-pair">
                <div class="slate">
                    <h3>Sell</h3>
                    <div id="MIRROR-token-sell" class="centerage">
                        <div class="body">
                            <labeled-number class="sell-price no-icon" label="Sell Price" number="0.0003"></labeled-number>
                            <labeled-number class="sell amount-input no-icon" label="Tokens to Sell" number="eg 120" isInput="true"></labeled-number>
                            <div class="buy-action">
                                <md-button id="sell-MIRROR-tokens" class="cta sell-MIRROR">Sell <i>BONDs</i></md-button>
                                <labeled-number class="sell estimated-amount no-icon mini-label" label="ETH for BONDs" number="Type Something in"></labeled-number>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="MIRROR-butterfly" class="bottom inner-left butterfly earnings-wallet lone">
                <div class="slate">
                    <h3>Earnings</h3>
                    <div class="body">
                        <labeled-number class="earnings-total" label="Total Earnings" number="0.00"><img id="lugo" src="../assets/eth.png"></labeled-number>
                        <labeled-number class="no-icon mini-label earnings-socialism" label="Community Earnings" number="0.00"></labeled-number>
                        <labeled-number class="no-icon mini-label earnings-masternode" label="Masternode Earnings" number="0.00"></labeled-number>
                        <div class="centerage">
                            <md-button id="MIRROR-reinvest" class="cta MIRROR-reinvest reinvest-btn wing">Reinvest</md-button><br>
                            <md-button id="withdraw-btn" class="cta MIRROR-withdraw wing" style="color:white;">Withdraw</md-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="SHADOW-token" class="exchange shadow ghost">
            <div class="top outer-left global-stats">
                <div class="slate">
                    <h3>Global</h3>
                    <div class="top outer-left centerage mobile-head body">
                        <div class="global-bond-stake-info centerage">
                            <labeled-number class="global-contractbalance" label="ETH in Contract" number="0000"><img src="../assets/eth.png"></labeled-number>
                            <labeled-number class="global-totalbonds" label="Circulating BONDs" number="0000"><img src="../assets/bonds-scroll.png"></labeled-number>
                            <labeled-number class="global-fluxfee" label="Flux Fee" number="0000"><img class="shadowfy" src="../assets/butterfly.png"></labeled-number>
                        </div>
                        <div class="contracts-nav">
                            <button class="selected mirror" flux="mirror">Goto Babylon Contract</button>
                            <br><a style="position:relative;top:20px;color:orange;" href="https://etherscan.io/address/0x67f41953b90966257c71f6f271572399dfbfe16d" target="_blank">Smart Contract Source</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="top inner-left action-pair buy-bonds">
                <div class="slate">
                    <h3>Buy</h3>
                    <div class="centerage body">
                        <labeled-number class="buy-price no-icon" label="Buy Price" number="0.0003"></labeled-number>
                        <labeled-number class="buy amount-input no-icon" label="ETH to spend" number="eg 0.12" isInput="true"></labeled-number>
                        <div class="buy-action">
                            <md-button class="cta buy-SHADOW">Buy <i>BONDs</i></md-button><button class="giftable" forwhat="buyfor-mirror"></button>
                            <labeled-number class="buy estimated-amount no-icon mini-label" label="BONDs for ETH" number="Type Something in"></labeled-number>
                        </div>
                    </div>
                </div>
            </div>
            <div class="top inner-right mobile-head">
                <div class="slate">
                    <h3>(You)</h3>
                    <div class="bond-stake-info body">
                        <labeled-number class="your-bonds" label="BONDs" number="00.00"><img src="../assets/bonds-scroll.png"></labeled-number>
                        <labeled-number class="your-bonds-eth" label="ETH Value" number="00.00"><img src="../assets/eth.png"></labeled-number>
                        <labeled-number class="your-resolves" label="Resolve Tokens" number="00.00"><img src="../assets/resolve.png"></labeled-number>
                        <div class="centerage"><md-button class="masternode-link thin-btn">Masternode</md-button></div>
                    </div>
                </div>
            </div>
            <div class="top outer-right action-pair sell-bonds">
                <div class="slate">
                    <h3>Sell</h3>
                    <div  class="centerage">
                        <div class="body">
                            <labeled-number class="sell-price no-icon" label="Sell Price" number="0.0003"></labeled-number>
                            <labeled-number class="sell amount-input no-icon" label="Tokens to Sell" number="eg 120" isInput="true"></labeled-number>
                            <div class="buy-action">
                                <md-button class="cta sell-SHADOW">Sell <i>BONDs</i></md-button>
                                <labeled-number class="sell estimated-amount no-icon mini-label" label="ETH for BONDs" number="Type Something in"></labeled-number>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom inner-left butterfly earnings-wallet lone">
                <div class="slate">
                    <h3>Earnings</h3>
                    <div class="body">
                        <labeled-number class="earnings-total" label="Total Earnings" number="0.00"><img id="lugo" src="../assets/eth.png"></labeled-number>
                        <labeled-number class="no-icon mini-label earnings-socialism" label="Community Earnings" number="0.00"></labeled-number>
                        <labeled-number class="no-icon mini-label earnings-masternode" label="Masternode Earnings" number="0.00"></labeled-number>
                        <div class="centerage">
                            <md-button class="cta SHADOW-reinvest reinvest-btn wing">Reinvest</md-button><br>
                            <md-button class="cta SHADOW-withdraw wing" style="color:white;">Withdraw</md-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <how-it-works/>
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
    .page-container{
        background-image:url('../assets/light-hole-planetary-entry.jpg');
        color:white;
        background-size:cover;
    }
    .exchange{
        display:grid;
        /*grid-template-columns: auto auto auto auto auto auto auto auto auto;
        grid-template-rows: auto auto auto;*/
        grid-template-columns: 25% 25% 25% 25%;
        grid-template-rows: auto auto;
        
        max-width:1200px;
        margin:0 auto;
        padding-top:80px;
        padding-bottom:80px;
    }
    .ghost{display:none;}
    .shadowfy{
        -webkit-filter:drop-shadow(1px 1px 1px rgba(0,0,0,1));
        -filter:drop-shadow(1px 1px 1px rgba(0,0,0,1));
    }
    @media only screen and (min-width: 1101px) {
        .exchange{
            height:calc(100vh + 120px);
            width:90%;
            grid-row-gap:16px;
        }
        .exchange .top{grid-row:1;}
        .exchange .bottom{grid-row:2;}
        .exchange .inner-left{grid-column:2;}
        .exchange .outer-left{grid-column:1;}
        .exchange .center{grid-column:4;}
        .exchange .inner-right{grid-column:3;}
        .exchange .outer-right{grid-column:4;}
        .exchange .butterfly{grid-row:2;grid-column:3;}
        .exchange .slate{
            width:calc(100% - 20px);
        }
    }

/*for tablet mobile*/
@media only screen and (max-width: 1101px) {
    .exchange{
        grid-template-columns: auto auto;
        grid-template-rows: auto auto auto auto;
        width:calc(100% - 10px);
        grid-row-gap:5px;
    }
    .exchange .slate{
        width:calc(100% - 15px);
    }
    .mobile-head{
        grid-column: 1;
        grid-row:1;
    }
    .earnings-wallet{
        grid-column: 2;
        grid-row:1;
    }
    
    .action-pair.left{
        grid-column: 1;
        grid-row:2;
    }

    .action-pair.right{
        grid-column: 2;
        grid-row:2;
    }
    .global-stats{
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row:3;
    }
}

/*for thin mobile*/
@media only screen and (max-width: 500px) {
    .exchange{
        grid-template-columns: auto auto;
        grid-template-rows: auto auto auto auto;
        width:calc(100% - 10px);
        grid-row-gap:5px;
    }
    .exchange .slate{
        width:calc(100% - 2px);
    }
    .mobile-head{
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row:1;
    }
    
    .action-pair.left{
        grid-column: 1;
        grid-row:2;
    }

    .action-pair.right{
        grid-column: 2;
        grid-row:2;
    }
    .global-stats{
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row:4;
    }
    .earnings-wallet{
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row:3;
        /*height:150px;*/
    }
}

    .exchange .slate{
        -webkit-border-radius: 4px;
        border-radius: 4px;
        overflow:hidden;
        margin:0 auto;
        
        height:300px;
        background-image:url('../assets/inverted-deep-firey-space.png');
        color:black;
        border-style:solid;
        border-width:1px;
        border-color:#223980;
        -webkit-box-shadow:inset 5px 0 10px 0px #838Bc5;
        box-shadow:inset 5px 0 10px 0px #838Bc5;
    }
    .exchange h3, .contracts-nav > button{
        color:white;
        background-image:url('../assets/jagged-deep-warp-space.jpg');
    }
    .exchange h3{
        height:42px;
        line-height:42px;
        font-size:20px;
        text-align:center;
        -webkit-box-shadow: 0 2px 10px 2px #434B75;
        box-shadow: 0 2px 10px 2px #434B75;
    }
    .slate .md-button{
        background-image:url('../assets/jagged-deep-warp-space.jpg');
    }

    #SHADOW-token h3, #SHADOW-token .md-button, .contracts-nav .shadow{
        filter: hue-rotate(135deg) brightness(130%);
    }
    #SHADOW-token .slate{
        -webkit-box-shadow:inset 5px 0 10px 0px #c58B83;
        box-shadow:inset 5px 0 10px 0px #c58B83;
        background-color: #754B43;
        background-blend-mode: screen;
        border-color:#553B33;
    }

    .inner-left .slate,.inner-left h3,.inner-left .md-button{background-position:-400px -660px;}
    .outer-left .slate,.outer-left h3,.outer-left .md-button{background-position:-400px -550px;}
    .inner-right .slate,.inner-right h3,.inner-right .md-button{background-position:-500px -700px;}
    .outer-right .slate,.outer-right h3,.outer-right .md-button{background-position:-400px -720px;}
    .butterfly .slate,.butterfly h3,.butterfly .md-button{background-position:-400px -600px;}
    .slate .body{
        padding-left: 15px;
        padding-right: 15px;
    }

    .masternode.centerage{ position: relative;}
    .masternode h6{width:100%;position:absolute;bottom:0;left:0;}
    .butterfly .actions,.butterfly .cta,.md-button.thin-btn{
        font-size:10px;
        height:28px;
    }/**/
    #twin-butterfly .reinvest-btn,#lone-butterfly .wing{
        margin-top:30px;
    }
    .soulecule-count{font-size:12px;}

/*
                                                    TWIN TOKEN STYLING
*/
.action-pair .giftable{display:inline-block;margin-left:8px;}
.giftable{
width: 24px;
height: 24px;
background-size:cover;
                        background-image: url(data:image/png;base64,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);

    filter: invert(100%);

}
    .contracts-nav{
        text-align:center;
        margin-top:16px;
    }
    .contracts-nav button{
        border-style:solid;
        color:white;
        font-size:12px;
        height:20px;
        /*padding-left:35px;
        padding-right:35px;
        margin-left:10px;
        margin-right:10px;*/
    }
    .contracts-nav button.mirror{border-color:#344664;}
    .contracts-nav button.shadow{border-color:#644634;}
    button{cursor:pointer;}
            
                
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


    .exchange .md-button{
        color: white !important;
    }
    
/* Old Hacky */
            .centerage{text-align:center;}
            h3,h6{
                margin:0;
            }
            h6{
                size:15px;
            }
            h6,span{display:inline-block;}
            

            #disclaimer{padding:30px;padding-top:0;}
            
            .dashboard-glass{
            }
            #warning-closer .md-button{border:none;color:black;}
            .dashboard-glass .md-button-content{color:white;}
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
    
    $('.masternode-link').click(function(){
        var copyText = document.getElementById("masternode-clipboard");
        
        copyText.select();

        setTimeout(function(){
            document.execCommand("copy");
            alert("Copied to Clipboard: " + copyText.value);
        },500)
        

    });

    //-------------------------------------------------------------- MIRROR TOKEN...

        var $buyInput_MIRROR = $('#MIRROR-token .buy.amount-input input');
        var $sellInput_MIRROR = $('#MIRROR-token .sell.amount-input input');

                    $('.buy-MIRROR').click(function() {
                        let amount = $buyInput_MIRROR.val();
                        mirrorContract.fund(localStorage.getItem("masternode"),web3.eth.defaultAccount,{
                            value: convertEthToWei(amount)
                        }, function(e, r){
                            console.log(e, r);
                        });
                    });//MIRROR-token-buy
                    $('#MIRROR-token-buy .giftable').click(function() {
                        let amount = $buyInput_MIRROR.val();
                        mirrorContract.fund(localStorage.getItem("masternode"),prompt("Enter the Address you want to buy for",web3.eth.defaultAccount),{
                            value: convertEthToWei(amount)
                        }, function(e, r){
                            console.log(e, r);
                        });
                    });

                            //$buyInput_MIRROR.keyup
                            setTimeout(function(){
                                var x = parseFloat( $buyInput_MIRROR.val() );
                                if(!MIRROR_FLUX)
                                    MIRROR_FLUX=0;
                                if(MIRROR_BONDS>0 && x>0){
                                    mirrorContract.getTokensForEther( convertEthToWei( x ) * (1-MIRROR_FLUX), function(e, r){
                                        var tokens = parseFloat(r)/1000000000000000;
                                        console.log("how many tokens?",tokens,"-----------")
                                        $("#MIRROR-token .buy.estimated-amount i").text( tokens.toFixed(4) );
                                    });
                                }
                            },400);

                    $('.sell-MIRROR').click(function() {
                        let amount = $('#sell-MIRROR-amount').val();
                        mirrorContract.sellBonds(amount * 1000000000000000,function(e, r) {
                            console.log(e, r);
                        })
                    });

                            //$sellInput_MIRROR.keyup
                            setTimeout(function(){
                                var x = parseFloat( $sellInput_MIRROR.val() );
                                if(!MIRROR_FLUX)
                                    MIRROR_FLUX=0;
                                if(MIRROR_BONDS > 0 && x > 0 ){
                                    var theseBonds=MIRROR_BONDS*1000000000000000;
                                    console.log("MIRROR_BONDS: ",MIRROR_BONDS);
                                    console.log("x: ",x* 1000000000000000);
                                    mirrorContract.getEtherForTokens(  Math.max(x* 1000000000000000, 0)  , function(e, r){
                                        var ethers = convertWeiToEth(r)*(1-MIRROR_FLUX);
                                        $("#MIRROR-token .sell.estimated-amount i").text( ethers.toFixed(4) );
                                    });
                                }
                            },400);

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

        var $buyInput_SHADOW = $('#SHADOW-token .buy.amount-input input');
        var $sellInput_SHADOW = $('#SHADOW-token .sell.amount-input input');

                    $('.buy-SHADOW').click(function() {
                        let amount = $buyInput_SHADOW.val();
                        shadowContract.fund(localStorage.getItem("masternode"),web3.eth.defaultAccount,{
                            value: convertEthToWei(amount)
                        }, function(e, r){
                            console.log(e, r);
                        });
                    });//SHADOW-token-buy
                    $('#SHADOW-token .giftable').click(function() {
                        let amount = $buyInput_SHADOW.val();
                        shadowContract.fund(localStorage.getItem("masternode"), prompt("Enter the Address you want to buy for",web3.eth.defaultAccount),{
                            value: convertEthToWei(amount)
                        }, function(e, r){
                            console.log(e, r);
                        });
                    });

                            //$buyInput_SHADOW.keydown
                            setTimeout( function(){
                                var x = parseFloat( $buyInput_SHADOW.val() );
                                if(!SHADOW_FLUX)
                                    SHADOW_FLUX=0;
                                if(SHADOW_BONDS>0){    
                                    shadowContract.getTokensForEther( convertEthToWei( x ) * (1-SHADOW_FLUX), function(e, r){
                                        var tokens = parseFloat(r)/1000000000000000;
                                        console.log("how many tokens?",tokens,"-----------")
                                        $("#SHADOW-token .buy.estimated-amount i").text( tokens.toFixed(4) );
                                    });
                                }
                            },400);

                    $('.sell-SHADOW').click(function() {
                        let amount = $('#sell-SHADOW-amount').val();
                        shadowContract.sellBonds(amount * 1000000000000000,function(e, r) {
                            console.log(e, r);
                        })
                    });

                            //$sellInput_SHADOW.keydown
                            setTimeout(function(){
                                var x = parseFloat( $sellInput_SHADOW.val() );
                                if(!SHADOW_FLUX)
                                    SHADOW_FLUX=0;
                                if(SHADOW_BONDS>0){
                                    var theseBonds=SHADOW_BONDS*1000000000000000;
                                    console.log("SHADOW_BONDS: ",SHADOW_BONDS);
                                    console.log("x: ",x* 1000000000000000);
                                    shadowContract.getEtherForTokens(  Math.max(x* 1000000000000000, 0)  , function(e, r){
                                        var ethers = convertWeiToEth(r)*(1-SHADOW_FLUX);
                                        $("#SHADOW-token .sell.estimated-amount i").text( ethers.toFixed(4) );
                                    });
                                }
                            },400);

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
        $("#masternode-clipboard").val("https://0xBabylon.com/#/Exchange?masternode="+web3.eth.defaultAccount);
    }
    
    //------------------------------------------------------------   MIRROR FLUX      
                    mirrorContract.holdingsOf(web3.eth.defaultAccount, function(e, r) {
                        $('#MIRROR-token .your-bonds i').text( (r / 1e18*1000).toFixed(4) );
                        MIRROR_BONDS = parseFloat(r / 1e18*1000);
                        mirrorContract.totalBondSupply.call(function(e, tbs){
                            if( parseFloat(r) == parseFloat(tbs) )
                                highlander = true;
                            else
                                highlander = false;
                        });

                        mirrorContract.getEtherForTokens(r, function(e, x){
                            if(r>0){
                                $("#MIRROR-token .your-bonds-eth i").text(convertWeiToEth(x * ( 1-MIRROR_FLUX ) ).toFixed(4) );
                            }else{
                                $("#MIRROR-token .your-bonds-eth i").text("00000");
                            }
                        })
                    });

                    mirrorContract.balanceOf(web3.eth.defaultAccount, function(e, r) {
                        mirrorContract.resolveSupply( function(e, x) {
                            if(x == 0){
                                //$('#MIRROR-token .your-resolves i.p').text( (0).toFixed(2));
                                $('#MIRROR-token .your-resolves i').text( (0).toFixed(2));}
                            else{
                                //$('#MIRROR-token .your-resolves i.p').text( (r/x*100).toFixed(2));
                                $('#MIRROR-token .your-resolves i').text( (r / 1e18*1000).toFixed(4));
                            }
                        });
                    });

                    mirrorContract.price(true,function(e, r){
                        let buyPrice = (1/convertWeiToEth(r)/1000000).toFixed(6);    
                        $('#MIRROR-token .buy-price i').text(buyPrice);
                    });

                    mirrorContract.price(false,function(e, r){
                        
                        let sellPrice = convertWeiToEth(r).toFixed(6);
                        $('#MIRROR-token .sell-price i').text(sellPrice);
                    });

                    mirrorContract.dividends(web3.eth.defaultAccount, function(e, r) {
                        mirrorContract.pocket.call(web3.eth.defaultAccount,function(e, x){
                            $('#MIRROR-token .earnings-total i').text(convertWeiToEth(parseInt(r)+parseInt(x)).toFixed(4));
                            $('#MIRROR-token .earnings-masternode i').text(convertWeiToEth(parseInt(x)).toFixed(4));
                            $('#MIRROR-token .earnings-socialism i').text(convertWeiToEth(parseInt(r)).toFixed(4));
                        });
                    });
                    mirrorContract.totalBondSupply.call(function (e, r){
                        var rr = (r / 1e18*1000).toFixed(4)
                        $('#MIRROR-token .global-totalbonds i').text( rr );
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
                                $('#MIRROR-token .global-fluxfee i').text( "0%"  )
                            }else{
                                MIRROR_FLUX = (iSum-wSum)/iSum;
                                $('#MIRROR-token .global-fluxfee i').text( (MIRROR_FLUX*100).toFixed(2) +"%"  )
                            }
                            $('#MIRROR-token .global-contractbalance i').text( convertWeiToEth(iSum-wSum ).toFixed(4)  );
                        });
                    });
    
    //------------------------------------------------------------   SHADOW FLUX      
                    shadowContract.holdingsOf(web3.eth.defaultAccount, function(e, r) {
                        $('#SHADOW-token .your-bonds i').text((r / 1e18*1000).toFixed(4));
                        SHADOW_BONDS = parseFloat(r / 1e18*1000);
                        shadowContract.totalBondSupply.call(function(e, tbs){
                            if( parseFloat(r) == parseFloat(tbs) )
                                highlander = true;
                            else
                                highlander = false;
                        });

                        shadowContract.getEtherForTokens(r, function(e, x){
                            if(r>0){
                                $("#SHADOW-token .your-bonds-eth i").text(convertWeiToEth(x * ( 1-SHADOW_FLUX ) ).toFixed(4) );
                            }else{
                                $("#SHADOW-token .your-bonds-eth i").text("00000");
                            }
                        })
                    });

                    shadowContract.balanceOf(web3.eth.defaultAccount, function(e, r) {
                        shadowContract.resolveSupply( function(e, x) {
                            if(x == 0){
                                //$('#SHADOW-token .your-resolves i').text( (0).toFixed(2));
                                $('#SHADOW-token .your-resolves i').text( (0).toFixed(2));}
                            else{
                                //$('#SHADOW-token .your-resolves i').text( (r/x*100).toFixed(2));
                                $('#SHADOW-token .your-resolves i').text( (r / 1e18*1000).toFixed(4));
                            }
                        });
                    });

                    shadowContract.price(true,function(e, r){
                        let buyPrice = (1/convertWeiToEth(r)/1000000).toFixed(8);    
                        $('#SHADOW-token .buy-price i').text(buyPrice);
                    });

                    shadowContract.price(false,function(e, r){
                        let sellPrice = convertWeiToEth(r).toFixed(8);
                        $('#SHADOW-token .sell-price i').text(sellPrice);
                    });

                    shadowContract.totalBondSupply.call(function (e, r){
                        var rr = (r / 1e18*1000).toFixed(4)
                        $('#SHADOW-token .global-totalbonds i').text( rr );
                    });

                    shadowContract.cashWallet(web3.eth.defaultAccount, function(e, r) {
                        //$('#SHADOW-token .earnings-total i').text(convertWeiToEth( parseInt(r) ).toFixed(4));
                        /*shadowContract.pocket.call(web3.eth.defaultAccount,function(e, x){});*/
                    });

                    shadowContract.dividends(web3.eth.defaultAccount, function(e, r) { 
                        shadowContract.tricklingFlo.call(web3.eth.defaultAccount, function(e, x) {
                            shadowContract.pocket.call(web3.eth.defaultAccount,function(e, z){
                                $('#SHADOW-token .earnings-socialism i').text(convertWeiToEth( parseInt(r) ).toFixed(4));
                                $('#SHADOW-token .earnings-masternode i').text(convertWeiToEth( parseInt(z)+parseInt(x) ).toFixed(4));
                                $('#SHADOW-token .earnings-total i').text(convertWeiToEth( parseInt(r)+parseInt(z)+parseInt(x) ).toFixed(4));
                            });
                        });
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
                                $('#SHADOW-token .global-fluxfee i').text( "0%"  )
                            }else{
                                SHADOW_FLUX = wSum/iSum;
                                $('#SHADOW-token .global-fluxfee i').text( (SHADOW_FLUX*100).toFixed(2) +"%"  )
                            }
                            $('#SHADOW-token .global-contractbalance i').text( convertWeiToEth(iSum-wSum ).toFixed(4)  );
                        });
                    });

}
    window.$SHADOW = $("#SHADOW-token");
    window.$MIRROR = $("#MIRROR-token");
    function fluxit(fluxxr){
        //var fluxxr  = $(this).attr("flux");
        $("#contracts-nav button").removeClass("selected");
        $("#contracts-nav " + fluxxr ).addClass("selected");

        $(".exchange").removeClass("ghost");//just in case
        $(".exchange").addClass("ghost");
        $(".exchange." + fluxxr ).removeClass("ghost");
        console.log(  fluxxr  );
    }

    $(".contracts-nav button").click(function(){
        fluxit( $(this).attr("flux") );
    });

$(".butterflux").click(function(){  
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