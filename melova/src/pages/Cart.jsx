import { useTranslation } from "react-i18next";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { toLocaleDigits } from "../hooks/numberConvertor";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart, clearCart  } from "../store/cartSlice";
import { FaTrash, FaRegTrashAlt } from "react-icons/fa"; // Font Awesome

export default function Cart() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,0
    );

    const flooredSubtotal = Math.floor(subtotal)

    const shipping = cartItems.length > 0 ? 5 : 0;
    
    const total = subtotal + shipping;
    const flooredTotal = Math.floor(total)


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
                    
                    {cartItems.length === 0 ? (
                        <p className="text-center opacity-70">
                            {t("Cart_is_empty")}
                        </p>
                    ) : (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                style={{
                                    backgroundColor: "var(--bgPrimary)",
                                    border: "1px solid var(--bgSecondary)",
                                }}
                                className="rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                            >
                                {/* product info */}
                                <div className="flex items-center gap-4 flex-1 min-w-0">
                                    <div
                                        style={{ backgroundColor: "var(--bgSecondary)" }}
                                        className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0"
                                    >
                                        {item.thumbnail && (
                                            <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                    </div>

                                    <div className="min-w-0">
                                        <h2 className="font-semibold line-clamp-1">
                                            {item.title}
                                        </h2>
                                        <p className="text-sm opacity-70 line-clamp-2">
                                            {item.description || t("A_New_product")}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                                    
                                    {/* quantity */}
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => dispatch(decreaseQty(item.id))}
                                            style={{
                                                backgroundColor: "var(--bgSecondary)",
                                                color: "var(--textPrimary)",
                                            }}
                                            className="px-2 py-1 rounded"
                                        >
                                            <CiCircleMinus />
                                        </button>

                                        <span>{toLocaleDigits(item.quantity)}</span>

                                        <button
                                            onClick={() => dispatch(increaseQty(item.id))}
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
                                    <div className="font-bold whitespace-nowrap">
                                        ${toLocaleDigits(item.price)}
                                    </div>
                                    
                                    {/* deleting item */}
                                    <button
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                        className="text-red-400 text-sm hover:opacity-70 transition"
                                    >
                                        <FaTrash></FaTrash>
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
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
                        <span>${toLocaleDigits(flooredSubtotal)}</span>
                    </div>

                    <div className="flex justify-between text-sm mb-2">
                        <span>{t("Shipping")}</span>
                        <span>${toLocaleDigits(shipping)}</span>
                    </div>

                    <div
                        style={{
                            borderTop: "1px solid var(--bgSecondary)",
                        }}
                        className="flex justify-between font-bold text-lg mt-4 pt-3"
                    >
                        <span>{t("Total")}</span>
                        <span>${toLocaleDigits(flooredTotal)}</span>
                    </div>

                    <button
                        onClick={() => dispatch(clearCart())}
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