import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/productServices";

export const useCategories = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
    });
};