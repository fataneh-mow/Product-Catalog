import { LuSearch } from "react-icons/lu";
import { useProductUI } from "../../context/ProductUIContext";

export default function SearchBox() {
    const { state, dispatch } = useProductUI();

    return (
        <div
            className="flex items-center gap-2 px-3 py-2 rounded-md"
            style={{
                backgroundColor: "var(--bgPrimary)",
                border: "1px solid var(--textSecondary)",
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
                placeholder="Search..."
                className="w-full outline-none bg-transparent text-sm"
                style={{ color: "var(--textPrimary)" }}
            />
        </div>
    );
}