function buy() internal {
		// Any transaction of less than 1 szabo is likely to be worth less than the gas used to send it.
		if (msg.value < 0.000001 ether || msg.value > 1000000 ether)
			revert();
						
		// msg.sender is the address of the caller.
		var sender = msg.sender;
		
		// 10% of the total Ether sent is used to pay existing holders.
		var fee = div(msg.value, 10);
		
		// The amount of Ether used to purchase new tokens for the caller.
		var numEther = msg.value - fee;
		
		// The number of tokens which can be purchased for numEther.
		var numTokens = getTokensForEther(numEther);
		
		// The buyer fee, scaled by the scaleFactor variable.
		var buyerFee = fee * scaleFactor;
		
		// Check that we have tokens in existence (this should always be true), or
		// else you're gonna have a bad time.
		if (totalSupply > 0) {
			// Compute the bonus co-efficient for all existing holders and the buyer.
			// The buyer receives part of the distribution for each token bought in the
			// same way they would have if they bought each token individually.
			var bonusCoEff =
			    (scaleFactor - (reserve() + numEther) * numTokens * scaleFactor / (totalSupply + numTokens) / numEther)
			    * (uint)(crr_d) / (uint)(crr_d-crr_n);
				
			// The total reward to be distributed amongst the masses is the fee (in Ether)
			// multiplied by the bonus co-efficient.
			var holderReward = fee * bonusCoEff;
			
			buyerFee -= holderReward;

			// Fee is distributed to all existing token holders before the new tokens are purchased.
			// rewardPerShare is the amount gained per token thanks to this buy-in.
			var rewardPerShare = holderReward / totalSupply;
			
			// The Ether value per token is increased proportionally.
			earningsPerToken += rewardPerShare;
			
		}

		// Add the numTokens which were just created to the total supply. We're a crypto central bank!
		totalSupply = add(totalSupply, numTokens);

		// Assign the tokens to the balance of the buyer.
		tokenBalance[sender] = add(tokenBalance[sender], numTokens);

		// Update the payout array so that the buyer cannot claim dividends on previous purchases.
		// Also include the fee paid for entering the scheme.
		// First we compute how much was just paid out to the buyer...
		var payoutDiff = (int256) ((earningsPerToken * numTokens) - buyerFee);
		
		// Then we update the payouts array for the buyer with this amount...
		payouts[sender] += payoutDiff;
		
		// And then we finally add it to the variable tracking the total amount spent to maintain invariance.
		totalPayouts    += payoutDiff;
		
	}
