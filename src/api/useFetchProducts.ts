import { useQuery } from "@tanstack/react-query"
import { Product } from "../types";

const PRODUCTS_URL = "https://dummyjson.com/products"

export const useFetchProducts = () => 
  useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
        const res = await fetch(PRODUCTS_URL);
        const data = await res.json()
        return data.products;
    }
});