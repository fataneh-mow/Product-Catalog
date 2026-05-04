import { useState } from "react";
import { LuLayoutGrid, LuList } from "react-icons/lu";

export default function ViewToggle({ onChange }) {
    const [view, setView] = useState("grid");

    const handleChange = (type) => {
        setView(type);
        onChange(type);
    };

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