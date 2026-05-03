import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer
            style={{
                backgroundColor: "var(--bgPrimary)",
                color: "var(--textPrimary)",
                borderTop: "1px solid var(--bgSecondary)",
            }}
            className="w-full mt-10"
        >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
                <p className="text-sm opacity-80">
                    © {new Date().getFullYear()} | {t("Melova")} | {t("All_rights_reserved")}
                </p>
                <div className="text-sm font-medium opacity-90">
                    {t("Built_with_React")}
                </div>
            </div>
        </footer>
    );
}