import { useTranslation } from "react-i18next";

export default function ProductCard ({ product, onAddToCart }) {
    const {t} = useTranslation();

    return (
        <div
            style={{
                backgroundColor: "var(--bgPrimary)",
                color: "var(--textPrimary)",
                border: "1px solid var(--bgSecondary)",
            }}
            className="rounded-xl p-4 w-full shadow-sm hover:shadow-md transition duration-150 flex flex-col gap-3"
        >
            {/* image */}
            <div className="w-full h-40 rounded-lg overflow-hidden flex items-center justify-center"
                style={{
                    backgroundColor: "var(--bgSecondary)"
                }}
            >
                {product?.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <span className="text-sm opacity-60">{t("No_Image")}</span>
                )}
            </div>

            {/* title */}
            <h2 className="text-lg font-semibold">
                {product?.name}
            </h2>

            {/* descs */}
            <p className="text-sm opacity-80 line-clamp-2">
                {product?.description}
            </p>

            {/* footer */}
            <div className="flex items-center justify-between mt-auto">
                <span className="font-bold">
                    ${product?.price}
                </span>

                <button
                    style={{
                        backgroundColor: "var(--bgSecondary)",
                        color: "var(--textPrimary)",
                    }}
                    className="px-3 py-1.5 rounded-lg text-sm hover:opacity-80 transition"
                >
                    {t("Add_to_cart")}
                </button>
            </div>
        </div>
    );
}