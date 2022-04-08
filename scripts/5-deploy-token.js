/**
 * Deployed token address:  0xaA9C4527DBfd8447036Efe126Cdc65C49773c373
 * This deploys am ERC-20 governance token (still with 0 supply)
 * Defines the token's characteristics 
 */
import { AddressZero } from '@ethersproject/constants';
import sdk from './1-initialize-sdk.js';

(async () => {
    try {
        const tokenAddress = await sdk.deployer.deployToken({
            name: 'CreamyDAO Governance Token',
            symbol: 'CREAMY',
            primary_sale_recipient: AddressZero,
        });
        console.log(
            "✅ Successfully deployed token module, address:",
            tokenAddress,
        );
    } catch (error) {
        console.error("failed to deploy token module", error);
    }
})();