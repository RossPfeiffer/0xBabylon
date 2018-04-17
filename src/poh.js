var adr = '0x93be1f8e4bd120487eb94639f68b366d6c556fbb';
var url = new URL(window.location.href);

window.addEventListener('load', function() {

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3js = new Web3(web3.currentProvider);
		
		web3.eth.getAccounts(function(error, accounts) {
			if (accounts.length == 0){
				$('#buy-panel').hide();
				$('#metamask-login').show();
			}
		});
    } else {
        console.log('No web3? You should consider trying MetaMask!')
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        $('#buy-panel').hide();
        $('#metamask-not-found').show();
    }

    let abi = [
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
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "_totalSupply",
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
        "name": "tokenBalance",
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
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "pyrBalanceOf",
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
                "name": "_addr",
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
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
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
        "name": "sellMyTokens",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "fund",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "reinvestDividends",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
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

    $('#buy-eos-tokens').click(function() {
        let amount = $('#purchase-amount').val();
        contract.fund({
            value: convertEthToWei(amount)
        }, function(e, r) {
            console.log(e, r);
        })
    })

    $('#sell-tokens-btn').click(function() {
        contract.sellMyTokens(function(e, r) {
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
})

function convertEthToWei(e) {
    return 1e18 * e
}

function convertWeiToEth(e) {
    return e / 1e18
}


function updateData(contract) {
    // Populate data
    // console.log(contract)
    if(!web3.eth.defaultAccount) {
        return
    }
    contract.pyrBalanceOf(web3.eth.defaultAccount, function(e, r) {
        $('#pyrtoken-balance .poh-balance').text((r / 1e18*1000).toFixed(4) + " PYR");
        contract.getEtherForTokens(r, function(e, r) {
            $("#staking-value-box .poh-value").text(convertWeiToEth(r * 0.9).toFixed(4) + " ETH");
        })
    })
    contract.balanceOf(web3.eth.defaultAccount, function(e, r) {
        $('#soultoken-count .poh-soul').text((r / 1e18*1000).toFixed(4) );
        contract.getEtherForTokens(r, function(e, r) {
            $("#pyrtoken-balance .poh-value").text(convertWeiToEth(r * 0.9).toFixed(4) + " ETH");
        })
    })
    contract.buyPrice(function(e, r) {
        let buyPrice = (1/(convertWeiToEth(r) * .9)/1000000).toFixed(6)
        $('#pricechart-box .poh-buy').text(buyPrice + " ETH");
        
    })

    contract.sellPrice(function(e, r) {
        let sellPrice = convertWeiToEth(r).toFixed(6)
        $('#pricechart-box .poh-sell').text(sellPrice + " ETH");
    })

    contract.dividends(web3.eth.defaultAccount, function(e, r) {
        $('#divvies-box .poh-div').text(convertWeiToEth(r).toFixed(4) + " ETH");
    } )

    web3.eth.getBalance(contract.address, function(e, r) {
        $(".current-distribution-period").text(convertWeiToEth(r).toFixed(4));
    })
    
}