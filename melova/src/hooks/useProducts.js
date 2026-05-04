import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productServices";

export const useProducts = (page = 1, limit = 6) => {
    return useQuery({
        queryKey: ["products", page],
        queryFn: () => {
            const skip = (page - 1) * limit;
            return getProducts({ limit, skip });
        },
        keepPreviousData: true,
    });
};