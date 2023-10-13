import Product from "@/lib/models/product.model";
import { connectToDB } from "@/lib/mongoose";
import { scrapeAmazonProduct } from "@/lib/scraper";
import { getAveragePrice, getEmailNotifType, getHighestPrice, getLowestPrice } from "@/lib/utils";
// import { Product } from "@/types";

export async function GET() {
    try {
        connectToDB();
        const products = await Product.find({});
            if(!products) throw new Error("No product found")

            const updateProducts = await Promise.all(
                products.map(async (currentProduct)=> {
                const scrapedProduct = await scrapeAmazonProduct(currentProduct.url);

                    if(!scrapedProduct) throw new Error("No product found");
                    const updatePriceHistory: any = [
                        ...currentProduct.priceHistory,
                        {price: scrapedProduct.currentPrice}
                    ]
        
                const product = {
                    ...scrapedProduct,
                    priceHistory:  updatePriceHistory,
                    lowestPrice: getLowestPrice(updatePriceHistory),
                    highestPrice: getHighestPrice(updatePriceHistory),
                    averagePrice: getAveragePrice(updatePriceHistory)
                }
                
        
                const updateProduct = await Product.findOneAndUpdate({url: scrapedProduct.url},
                    product,
                    
                );

                const emailNotificationType = getEmailNotifType(scrapedProduct, currentProduct) ;
                })
            )
    } catch (error) {
        
    }
}