'use server'

import { insertProduct } from "@/services/product.service"
import { revalidateTag } from 'next/cache'

export const productAction = async (newProduct) => {
     // calling add product service 
     const addData = await insertProduct(newProduct);
     revalidateTag('product')
}