/**
 * Sets conditions for claiming the NFTs on a contract
 * Contract address: 0xCB2F82eB852D4746e744168DC5D5B2a49b524A3c
 */

import sdk from './1-initialize-sdk.js';
import { MaxUint256 } from '@ethersproject/constants';

const editionDrop = sdk.getEditionDrop('0x101D31a4f5673e6766C53eE82852f4080C3Ad137');

(async () => {
    try {
        const claimConditions = [{
            startTime: new Date(),
            maxQuantity: 50_000,
            price: 0,
            quantityLimitPerTransaction: 1,
            waitInSeconds: MaxUint256,
        }];
        await editionDrop.claimConditions.set("0", claimConditions);
        console.log("✅ Sucessfully set claim condition!");
    } catch (error) {
        console.error("Failed to set claim condition", error);
    }
})();