/**
 * We are making another contract for voting
 * Contract deployed to: 0xA97AeC456d1c1A427Bd91B5Ed50153e9D5b6B4eC
 * Old contract: 0xb59d4FdE5Ff2edb8E11f53d2A9C40Df6a22a0679
 */
import sdk from './1-initialize-sdk.js';

(async () => {
    try {
        const voteContractAddress = await sdk.deployer.deployVote({
            name: "Creamy Membership DAO",
            voting_token_address: '0xaA9C4527DBfd8447036Efe126Cdc65C49773c373',
            //members can start voting immediately
            voting_delay_in_blocks: 0,
            //the amount of time members must vote on a proposal
            voting_period_in_blocks: 6570,
            // the minimum number of % of the total supply that need to vote for validity
            // otherwise will just be valid after the given time
            voting_quorum_fraction: 0,
            // minimum number of tokens users should have in order to vote
            proposal_token_threshold: 0
        });
        console.log(
            "✅ Successfully deployed vote contract, address:",
            voteContractAddress,
        );
    } catch (err) {
        console.error("Failed to deploy vote contract", err);
    }
})();