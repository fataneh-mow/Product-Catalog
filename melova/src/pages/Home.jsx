import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import HeroLight from "../assets/heroLight.png";
import HeroDark from "../assets/heroDark.png";
import { useTranslation } from "react-i18next";

export default function Home() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const { state } = useTheme();
    const isLight = state.mode === "light";

    const heroImage = isLight ? HeroLight : HeroDark;

    return (
        <div
            className="flex flex-col items-center justify-center px-6"
            style={{
                backgroundColor: "var(--bgPrimary)",
                color: "var(--textPrimary)",
            }}
        >
            <div className="w-full max-w-md flex justify-center">
                <img
                    src={heroImage}
                    alt="hero"
                    className="w-full object-contain h-[50vh]"
                />
            </div>

            <button
                onClick={() => navigate("/products")}
                className="mt-8 px-6 py-3 rounded-xl font-semibold transition hover:opacity-80"
                style={{
                    backgroundColor: "var(--textPrimary)",
                    color: "var(--bgPrimary)",
                }}
            >
                {t("StartShopping")}
            </button>
        </div>
    );
}