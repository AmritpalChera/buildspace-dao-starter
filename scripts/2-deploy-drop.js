/**
 * Contract Address: 0x101D31a4f5673e6766C53eE82852f4080C3Ad137
 * 
 * Here we deploy our smart contract and also our NFT data on IPFS
 */

import { AddressZero } from '@ethersproject/constants';
import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

(async () => {
    try {
        const editionDropAddress = await sdk.deployer.deployEditionDrop({
            name: 'CreamyDAO',
            description: 'A DAO for ice cream lovers',
            image: readFileSync("scripts/assets/Chocolate.png"),
            primary_sale_recipient: AddressZero,
        });

        const editionDrop = sdk.getEditionDrop(editionDropAddress);

        const metadata = await editionDrop.metadata.get();

        console.log(
            "✅ Successfully deployed editionDrop contract, address:",
            editionDropAddress,
        );
        console.log("✅ editionDrop metadata:", metadata);
    }catch (error) {
        console.log("failed to deploy editionDrop contract", error);
      }
})();