import { useState } from "react";
import i18n from "../../i18n";

export default function Dropdown({
    trigger,
    items = [],
    onSelect,
    className = "",
}) {
    const [open, setOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null); 
    
    const handleSelect = (item) => {
        onSelect?.(item);
        setOpen(false);
    };

    const isRTL = i18n.language === "fa";

    return (
        <div className={`relative ${className}`}>
            <div onClick={() => setOpen(!open)} className="cursor-pointer">
                {trigger}
            </div>

            {open && (
                <div
                    className={`absolute  
                        rounded-lg shadow-lg border overflow-hidden  mt-2 w-40 z-50 
                        ${isRTL ? "left-0" : "right-0"}
                    `}
                    style={{
                        backgroundColor: "var(--bgPrimary)",
                        color: "var(--textPrimary)",
                        borderColor: "var(--bgSecondary)",
                    }}
                >
                    {items.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleSelect(item)}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="w-full text-left px-4 py-2 text-sm transition"
                            style={{
                                backgroundColor:
                                hoveredIndex === index ? "var(--bgSecondary)" : "transparent",
                            }}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}  
        </div>
    );
}