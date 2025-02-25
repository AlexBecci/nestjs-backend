import { Product } from "@prisma/client";
//tipo de dato extra 
export type CreateProductDto = Omit<Product, 'id' | 'createdAt'|'updatedAt'>//omite campos del dproducto ejemplo id ,createAt



