import { useTranslation } from "react-i18next";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { toLocaleDigits } from "../hooks/numberConvertor";


export default function Cart() {
    const {t} = useTranslation()
    return (
        <div
            className="max-w-7xl mx-auto px-6 py-6"
            style={{
                color: "var(--textPrimary)",
            }}
        >
            <h1 className="text-2xl font-bold mb-6">
                {t("Your_Cart")}
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* left -> items */}
                <div className="lg:col-span-2 space-y-4">
                    
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            style={{
                                backgroundColor: "var(--bgPrimary)",
                                border: "1px solid var(--bgSecondary)",
                            }}
                            className="rounded-xl p-4 flex items-center justify-between gap-4"
                        >
                            {/* product info */}
                            <div className="flex items-center gap-4">
                                <div
                                    style={{
                                        backgroundColor: "var(--bgSecondary)",
                                    }}
                                    className="w-16 h-16 rounded-lg"
                                />

                                <div>
                                    <h2 className="font-semibold">
                                        {t("Product")} : {item}
                                    </h2>
                                    <p className="text-sm opacity-70">
                                        {item.desc || t("A_New_product")}
                                    </p>
                                </div>
                            </div>

                            {/* quantity manage */}
                            <div className="flex items-center gap-3">
                                <button
                                    style={{
                                        backgroundColor: "var(--bgSecondary)",
                                        color: "var(--textPrimary)",
                                    }}
                                    className="px-2 py-1 rounded"
                                >
                                    <CiCircleMinus />
                                </button>

                                <span>{toLocaleDigits(1)}</span>

                                <button
                                    style={{
                                        backgroundColor: "var(--bgSecondary)",
                                        color: "var(--textPrimary)",
                                    }}
                                    className="px-2 py-1 rounded"
                                >
                                    <CiCirclePlus />
                                </button>
                            </div>

                            {/* price */}
                            <div className="font-bold">
                                {item.price || t("Price not defined")}
                            </div>
                        </div>
                    ))}
                </div>

                {/* right => summary of all */}
                <div
                    style={{
                        backgroundColor: "var(--bgPrimary)",
                        border: "1px solid var(--bgSecondary)",
                    }}
                    className="rounded-xl p-6 h-fit py-10"
                >
                    <h2 className="text-lg font-semibold mb-4">
                        {t("Order Summary")}
                    </h2>

                    <div className="flex justify-between text-sm mb-2">
                        <span>{t("Subtotal")}</span>
                        <span>${toLocaleDigits(60)}</span>
                    </div>

                    <div className="flex justify-between text-sm mb-2">
                        <span>{t("Shipping")}</span>
                        <span>${toLocaleDigits(5)}</span>
                    </div>

                    <div
                        style={{
                            borderTop: "1px solid var(--bgSecondary)",
                        }}
                        className="flex justify-between font-bold text-lg mt-4 pt-3"
                    >
                        <span>{t("Total")}</span>
                        <span>${toLocaleDigits(65)}</span>
                    </div>

                    <button
                        style={{
                            backgroundColor: "var(--textPrimary)",
                            color: "var(--bgPrimary)",
                        }}
                        className="w-full mt-5 py-2 rounded-lg font-medium hover:opacity-80 transition"
                    >
                        {t("Rest_Cart")}
                    </button>
                </div>
            </div>
        </div>
    );
}