/**'
 * Here we created an NFT edition and deployed it
 */
import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

const editionDrop = sdk.getEditionDrop("0x101D31a4f5673e6766C53eE82852f4080C3Ad137");

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: "Creamy Key",
                description: 'Gives you access to our local popup shops',
                image: readFileSync('scripts/assets/key.png')
            }
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})();