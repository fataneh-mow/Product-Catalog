import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { toLocaleDigits } from "../../hooks/numberConvertor";

export default function Pagination({ page, setPage, hasNextPage }) {
    const {t} = useTranslation()
    return (
        <div className="flex items-center justify-center gap-4 mt-8">
            
            <button
                // onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className="px-4 py-2 rounded-lg text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                    border: "1px solid var(--bgSecondary)",
                    backgroundColor: "var(--bgPrimary)",
                    color: "var(--textPrimary)",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--bgSecondary)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--bgPrimary)";
                }}
            >
                <FiChevronLeft />
            </button>

            <span
                className="text-sm font-semibold"
                style={{
                    color: "var(--textPrimary)",
                }}
            >
                {t("Page")} {toLocaleDigits(page)}
            </span>

            <button
                // onClick={() => setPage((prev) => prev + 1)}
                disabled={!hasNextPage}
                className="px-4 py-2 rounded-lg text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                    border: "1px solid var(--bgSecondary)",
                    backgroundColor: "var(--bgPrimary)",
                    color: "var(--textPrimary)",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--bgSecondary)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--bgPrimary)";
                }}
            >
                <FiChevronRight />
            </button>

        </div>
    );
}