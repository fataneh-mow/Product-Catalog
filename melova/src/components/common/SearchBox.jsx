import { LuSearch } from "react-icons/lu";

export default function SearchBox({ value, onChange, placeholder }) {
  return (
    <div
        className="flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 max-w-auto"
        style={{
            backgroundColor: "var(--bgPrimary)",
            color: "var(--textPrimary)",
            border: `1px solid var(--textSecondary)`,
        }}
    >
        <LuSearch
            size={18}
            style={{ color: "var(--textSecondary)" }}
        />

        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder || "Search..."}
            className="w-full outline-none bg-transparent text-sm"
            style={{
                color: "var(--textPrimary)",
            }}
        />
    </div>
  );
}