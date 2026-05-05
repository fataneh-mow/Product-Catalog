import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useProductUI } from "../context/ProductUIContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import toast from "react-hot-toast";

export default function ProductCard({ product, onAddToCart, view = "grid" }) {
    const { t } = useTranslation();
    const { state } = useProductUI();
    const isList = state.view === "list";
    const dispatch = useDispatch();

    const handleProductAddingToCart = () => {
        try {
            dispatch(addToCart(product))
            toast.success(t("ProductAdded"))
        } catch (error) {
            console.log("Err: product not added to the cart:", error);
            toast.error(t("ProductNotAddded"))
        }
    }

    return (
        <div
            style={{
                backgroundColor: "var(--bgPrimary)",
                color: "var(--textPrimary)",
                border: "1px solid var(--bgSecondary)",
            }}
            className={
                isList
                    ? "flex gap-4 rounded-xl p-4 shadow-sm hover:shadow-md transition"
                    : "rounded-xl p-4 shadow-sm hover:shadow-lg transition flex flex-col gap-3"
            }
        >
            <div
                className={
                    isList
                        ? "w-28 h-28 rounded-lg overflow-hidden flex-shrink-0"
                        : "w-full h-44 rounded-lg overflow-hidden flex items-center justify-center"
                }
                style={{ backgroundColor: "var(--bgSecondary)" }}
            >
                {product?.thumbnail ? (
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <span className="text-sm opacity-60">{t("No_Image")}</span>
                )}
            </div>

            <div className="flex flex-col gap-2 flex-1">

                <h2 className="text-lg font-semibold line-clamp-1">
                    {product?.title}
                </h2>

                <div className="flex items-center justify-between text-xs opacity-80">
                    <span>{product?.brand}</span>
                    <span
                        className="px-2 py-0.5 rounded-md"
                        style={{ backgroundColor: "var(--bgSecondary)" }}
                    >
                        {product?.category}
                    </span>
                </div>

                <p className="text-sm opacity-80 line-clamp-2">
                    {product?.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-500" />
                        <span>{product?.rating}</span>
                    </div>

                    <span className="text-xs opacity-70">
                        {product?.stock} {t("in_stock")}
                    </span>
                </div>

                <div className="flex items-center justify-between mt-auto">
                    <span className="font-bold text-lg">
                        ${product?.price}
                    </span>

                    <button
                        onClick={() => handleProductAddingToCart()}
                        style={{
                            backgroundColor: "var(--bgSecondary)",
                            color: "var(--textPrimary)",
                        }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm hover:opacity-80 transition"
                    >
                        <FiShoppingCart />
                        {t("Add_to_cart")}
                    </button>
                </div>

            </div>
        </div>
    );
}