import { useState } from "react";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { useProductUI } from "../context/ProductUIContext";

export default function ViewToggle({ onChange }) {
    const { state, dispatch } = useProductUI();

    const handleChange = (type) => {
        dispatch({ type: "SET_VIEW", payload: type });
    };
    const { view } = state;
    return (
        <div
            style={{
                backgroundColor: "var(--bgSecondary)",
                width: "fit-content",
            }}
            className="flex rounded-md px-4 py-1.5 items-center justify-between gap-4"
        >
            {/* grid */}
            <button
                onClick={() => handleChange("grid")}
                style={{
                    backgroundColor:
                        view === "grid" ? "var(--bgPrimary)" : "transparent",
                    color: "var(--textPrimary)",
                }}
                className="px-3 py-1 rounded-md border-none cursor-pointer transition ease-in duration-100"
            >
                <LuLayoutGrid />
            </button>

            {/* list */}
            <button
                onClick={() => handleChange("list")}
                style={{
                    backgroundColor:
                        view === "list" ? "var(--bgPrimary)" : "transparent",
                    color: "var(--textPrimary)",
                }}
                className="px-3 py-1 rounded-md border-none cursor-pointer transition ease-in duration-100"
            >
                <LuList />
            </button>
        </div>
    );
}