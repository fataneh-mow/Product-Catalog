import { LuSearch } from "react-icons/lu";
import { useProductUI } from "../../context/ProductUIContext";
import { useTranslation } from "react-i18next";

export default function SearchBox() {
    const { state, dispatch } = useProductUI();
    const {t} = useTranslation();

    return (
        <div
            className="flex items-center gap-2 px-3 py-2 rounded-md shadow-sm"
            style={{
                backgroundColor: "var(--bgPrimary)",
                border: "1px solid var(--bgSecondary)",
            }}
        >
            <LuSearch size={18} style={{ color: "var(--textSecondary)" }} />

            <input
                type="text"
                value={state.search}
                onChange={(e) =>
                    dispatch({
                        type: "SET_SEARCH",
                        payload: e.target.value,
                    })
                }
                placeholder={t("Search")}
                className="w-full outline-none bg-transparent text-sm"
                style={{ color: "var(--textPrimary)" }}
            />
        </div>
    );
}