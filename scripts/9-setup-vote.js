/**
 * Setting up the voting contract and transffering 90% of our tokens to it
 */

import sdk from './1-initialize-sdk.js';

const vote = sdk.getVote('0xA97AeC456d1c1A427Bd91B5Ed50153e9D5b6B4eC');

const token = sdk.getToken('0xaA9C4527DBfd8447036Efe126Cdc65C49773c373');

(async () => {
    try {
        // Give our treasury to mint addtional token if needed
        await token.roles.grant('minter', vote.getAddress());

        console.log(
            "Successfully gave vote contract permissions to act on token contract"
        );
        
    } catch (error) {
        console.error(
            "failed to grant vote contract permissions on token contract",
            error
        );
        process.exit(1);
    };

    try {
        // get out wallet's token balance
        const ownedTokenBalance = await token.balanceOf(
            process.env.WALLET_ADDRESS
        );

        //get 90% of the token supply we have
        const ownedAmount = ownedTokenBalance.displayValue;
        const percent90 = Number(ownedAmount) / 100 * 90;

        //Trander 90% of the supply to the voting address
        await token.transfer(
            vote.getAddress(),
            percent90
        );
        console.log("✅ Successfully transferred " + percent90 + " tokens to vote contract");
    } catch (err) {
        console.error("failed to transfer tokens to vote contract", err);
    }
})();