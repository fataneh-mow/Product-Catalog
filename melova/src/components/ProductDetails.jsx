import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosClient from "../services/api";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import toast from "react-hot-toast";
import { toLocaleDigits } from "../hooks/numberConvertor";
import { useNavigate } from "react-router-dom";
import i18n from "../i18n";
import { FiArrowLeft } from "react-icons/fi";

export default function ProductDetails() {
    const { id } = useParams();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isRTL = i18n.language === "fa";

    const { data, isLoading, error } = useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            const res = await axiosClient.get(`/products/${id}`);
            return res.data;
        },
    });

    if (isLoading)
        return (
            <p className="text-center my-12"
                style={{
                    color: "var(--textPrimary)"
                }}
            >
                {t("Loading")}
            </p>
        );

    if (error)
        return (
            <p className="text-center my-12"
                style={{
                    color: "var(--textPrimary)"
                }}
            >
                {t("SomethingWentWrong")}
            </p>
        );

    const product = data;

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        toast.success(t("ProductAdded"));
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            <button
                onClick={() => navigate(-1)}
                className="mb-6 px-4 py-2 rounded-lg text-sm"
                style={{
                    backgroundColor: "var(--bgSecondary)",
                    color: "var(--textPrimary)",
                }}
            >
                <FiArrowLeft className={isRTL ? "rotate-180" : ""} />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                
                <div
                    className="rounded-xl overflow-hidden"
                    style={{ backgroundColor: "var(--bgSecondary)" }}
                >
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-[400px] object-cover"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    
                    <h1 className="text-3xl font-bold"
                        style={{
                            color: "var(--textPrimary)"
                        }}
                    >
                        {product.title}
                    </h1>

                    <p className="opacity-70"
                        style={{
                            color: "var(--textSecondary)"
                        }}
                    >
                        {product.description}
                    </p>

                    <div className="text-xl font-bold"
                        style={{
                            color: "var(--textPrimary)"
                        }}
                    >
                        ${toLocaleDigits(product.price)}
                    </div>

                    <div className="text-sm opacity-70"
                        style={{
                            color: "var(--textPrimary)"
                        }}
                    >
                        {t("Category")}: {product.category}
                    </div>

                    <div className="text-sm opacity-70"
                        style={{
                            color: "var(--textPrimary)"
                        }}
                    >
                        {t("Brand")}: {product.brand}
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="mt-4 px-4 py-2 rounded-lg"
                        style={{
                            backgroundColor: "var(--textPrimary)",
                            color: "var(--bgPrimary)",
                        }}
                    >
                        {t("Add_to_cart")}
                    </button>
                </div>
            </div>
        </div>
    );
}