import { NavLink } from "react-router-dom";
import { FiShoppingCart, FiSettings, FiGrid } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import heroLight from "../assets/heroLight.png";
import heroDark from "../assets/heroDark.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import i18n from "../i18n";
import Dropdown from "./common/Dropdown";
import { FiGlobe } from "react-icons/fi";

export default function Header() {
    const { state, dispatch } = useTheme();
    const isLight = state.mode === "light"
    let hero = isLight ? heroLight : heroDark;
    const {t} = useTranslation();
    const navigate = useNavigate();

    const languages = [
        { value: "en", label: "English" },
        { value: "fa", label: "فارسی" }
    ];

    const activeClass = ({ isActive }) =>
        `flex items-center gap-2 transition ${
            isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
        }`;

    return (
        <header
            style={{
                backgroundColor: "var(--bgPrimary)",
                color: "var(--textPrimary)",
                borderBottom: "1px solid var(--bgSecondary)",
            }}
            className="fixed w-full shadow-sm"
        >
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                
                {/* hero section */}
                <div className="flex items-center gap-1 justify-center cursor-pointer">
                    <img src={hero} alt="hero-image" className="h-[6vh] w-auto hidden md:flex" />
                    <div
                        style={{
                            color: "var(--textPrimary)",
                        }}
                        className="p-2 text-2xl rounded-xl flex items-center justify-center font-bold"
                        onClick={() => navigate("/home")}
                    >
                        {t("Melova")}
                    </div>
                </div>

                {/* routes */}
                <nav className="items-center gap-6 text-sm font-medium hidden md:flex">
        
                    <NavLink
                        to="/products"
                        className={activeClass}
                    >
                        <FiGrid size={18} />
                        {t("Products")}
                    </NavLink>

                    <NavLink
                        to="/cart"
                        className={activeClass}
                    >
                        <FiShoppingCart size={18} />
                        {t("Cart")}
                    </NavLink>

                    <NavLink
                        to="/settings"
                        className={activeClass}
                    >
                        <FiSettings size={18} />
                        {t("Settings")}
                    </NavLink>
                </nav>

                {/* theme and lang toggleres */}
                <div className="items-center gap-2 flex">
                    <button
                        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
                        style={{
                            backgroundColor: "var(--bgSecondary)",
                            color: "var(--textPrimary)",
                        }}
                        className="px-2 py-2 rounded-full text-sm transition hover:opacity-80"
                    >
                        {isLight ? <FiMoon size={18} /> : <FiSun size={18} /> }
                    </button>
                    <Dropdown
                        trigger={
                            <button
                                style={{
                                    backgroundColor: "var(--bgSecondary)",
                                    color: "var(--textPrimary)",
                                }}
                                className="px-3 py-2 rounded-full flex items-center gap-2 text-sm"
                            >
                                <FiGlobe size={18} />
                                {i18n.language.toUpperCase()}
                            </button>
                        }
                        items={languages}
                        onSelect={(item) => {
                            i18n.changeLanguage(item.value);
                            localStorage.setItem("lang", item.value)
                        }}
                    />
                </div>
            </div>
        </header>
    );
}