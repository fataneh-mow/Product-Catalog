import axiosClient from "./api";

export const getProducts = async ({ limit = 10, skip = 0 }) => {
    const res = await axiosClient.get("/products", {
        params: { limit, skip },
    });

    return res.data;
};

export const getProductsByCategory = async (category) => {
    const res = await axiosClient.get(`/products/category/${category}`);
    return res.data;
};