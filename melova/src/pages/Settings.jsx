import { useTheme } from "../context/ThemeContext";
import Dropdown from "../components/common/Dropdown";
import i18n from "../i18n";
import { FiSun, FiMoon, FiGlobe } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function Settings() {
    const { state, dispatch } = useTheme();
    const isLight = state.mode === "light";

    const languages = [
        { value: "en", label: "English" },
        { value: "fa", label: "فارسی" },
    ];

    const currentLang = languages.find(
        (l) => l.value === i18n.language
    )?.label;

    const {t} = useTranslation()

    return (
        <div
            style={{
                minHeight: "80vh",
                padding: "40px",
                color: "var(--textPrimary)",
            }}
        >
            <div className="my-2 mb-5">
                <h2 className="text-2xl font-bold">
                    {t("Settings")}
                </h2>
                <p className="my-2">{t("Manage_the_app")} </p>
            </div>
            

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "15px",
                    border: "1px solid var(--bgSecondary)",
                    borderRadius: "10px",
                    marginBottom: "20px",
                }}
            >
                <span>{t("Theme")}</span>

                <button
                    onClick={() => dispatch({ type: "TOGGLE_THEME" })}
                    style={{
                        backgroundColor: "var(--bgSecondary)",
                        color: "var(--textPrimary)",
                        padding: "10px 15px",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                    }}
                >
                    {isLight ? <FiMoon /> : <FiSun />}
                    {isLight ? t("Dark_Mode") : t("Light_Mode")}
                </button>
            </div>

            {/* Language Switch */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "15px",
                    border: "1px solid var(--bgSecondary)",
                    borderRadius: "10px",
                }}
            >
                <span>{t("Language")}</span>

                <Dropdown
                    trigger={
                        <button
                            style={{
                                backgroundColor: "var(--bgSecondary)",
                                color: "var(--textPrimary)",
                                padding: "10px 15px",
                                borderRadius: "10px",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            <FiGlobe />
                            {currentLang}
                        </button>
                    }
                    items={languages}
                    onSelect={(item) => {
                        i18n.changeLanguage(item.value);
                        localStorage.setItem("lang", item.value);
                    }}
                />
            </div>
        </div>
    );
}