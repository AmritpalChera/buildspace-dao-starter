/**
 * Here we can print any amount we want for our token
 */
import sdk from './1-initialize-sdk.js';

const token = sdk.getToken('0xaA9C4527DBfd8447036Efe126Cdc65C49773c373');

(async () => {
    try {
        const amount = 1_000_000;
        await token.mint(amount);
        const totalSupply = await token.totalSupply();

        console.log("✅ There now is", totalSupply.displayValue, "$CREAMY in circulation");
    } catch (error) {
        console.error("Failed to print money", error);
    }
})();