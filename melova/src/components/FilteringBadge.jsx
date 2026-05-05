import { useTranslation } from "react-i18next";

export default function FilteringBadge({ title, active, onClick }) {
    const { t } = useTranslation();

    return (
        <button
            onClick={onClick}
            className="rounded-md border px-4 py-2 transition shadow-sm"
            style={{
                background: active ? "var(--bgSecondary)" : "var(--bgPrimary)",
                borderColor: "var(--bgSecondary)",
                color: "var(--textPrimary)",
            }}
        >
            <h3 className="text-sm">{t(title)}</h3>
        </button>
    );
}