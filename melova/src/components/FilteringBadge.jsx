import { useTranslation } from "react-i18next";

export default function FilteringBadge({ title, active, onClick }) {
    const { t } = useTranslation();

    return (
        <button
            onClick={onClick}
            className="rounded-xl border px-4 py-2 transition"
            style={{
                background: active ? "var(--bgSecondary)" : "var(--bgPrimary)",
                borderColor: "var(--textSecondary)",
                color: "var(--textPrimary)",
            }}
        >
            <h3 className="text-sm">{t(title)}</h3>
        </button>
    );
}