import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productServices";

export const useProducts = (limit, skip) => {
    return useQuery({
        queryKey: ["products", limit, skip],
        queryFn: () => getProducts({ limit, skip }),
        keepPreviousData: true,
    });
};