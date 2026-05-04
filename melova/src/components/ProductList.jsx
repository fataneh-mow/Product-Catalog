import ProductCard from "./ProductCard"
import Pagination from "./common/Pagination";
import { useProducts } from "../hooks/useProducts";
import { useTranslation } from "react-i18next";
import { useProductUI } from "../context/ProductUIContext";

export default function ProductList ({products=[]}) {
    const { t } = useTranslation();
    const { state } = useProductUI();
    const { view } = state;
    const { data, isLoading, error } = useProducts();


    const finalProducts = data?.products || products;

    if (isLoading) return <p style={{color: "var(--textSecondary)"}} className="text-center my-12 text-xl">{t("Loading_products")}</p>;
    if (error) return <p style={{color: "var(--textSecondary)"}} className="text-center my-12 text-xl">{t("SomethingWentWrong")}</p>;


    return (
        <div className="my-12 md:mx-12 sm:mx-2 mx-4" >
            <div  className={
                    view === "grid"
                        ? "mx-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        : "mx-24 flex flex-col gap-4"
                }>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        view={view}
                    />
                ))}
            </div>
            <Pagination></Pagination>
        </div>
    )
}