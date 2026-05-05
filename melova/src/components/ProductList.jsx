import ProductCard from "./ProductCard"
import Pagination from "./common/Pagination";
import { useProducts } from "../hooks/useProducts";
import { useTranslation } from "react-i18next";
import { useProductUI } from "../context/ProductUIContext";

export default function ProductList ({products=[]}) {
    const { t } = useTranslation();
    const { state, dispatch } = useProductUI();
    const { view, page, search  } = state;
    const { data, isLoading, error } = useProducts(page, 6);

    const finalProducts = data?.products || products;

    if (isLoading) return <p style={{color: "var(--textSecondary)"}} className="text-center my-12 text-xl">{t("Loading_products")}</p>;
    if (error) return <p style={{color: "var(--textSecondary)"}} className="text-center my-12 text-xl">{t("SomethingWentWrong")}</p>;

    const filteredProducts = finalProducts.filter((p) => {
        const matchCategory =
            state.category === "all" || p.category === state.category;

        return matchCategory;
    });
    return (
        <div className="my-12 md:mx-12 sm:mx-2 mx-4" >
            <div  
                className={
                    view === "grid"
                        ? "mx-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        : "mx-24 flex flex-col gap-4"
                }
            >
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} view={state.view} />
                ))}
            </div>
            <Pagination
                page={page}
                setPage={(newPage) =>
                    dispatch({ type: "SET_PAGE", payload: newPage })
                }
                hasNextPage={data?.total > page * 6}
            />
        </div>
    )
}