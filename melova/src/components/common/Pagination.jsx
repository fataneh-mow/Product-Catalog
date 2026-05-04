import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { toLocaleDigits } from "../../hooks/numberConvertor";

export default function Pagination({ page, setPage, hasNextPage }) {
  const {t} = useTranslation();
  const isRTL = i18n.language === "fa";

  
  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      
      <button
        onClick={() => {
          setPage(Math.max(page - 1, 1)) 
        }
      }
        disabled={page === 1}
        className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium 
        disabled:opacity-50"
      >
        <FiChevronLeft className={isRTL ? "rotate-180" : ""} />
      </button>

      <span className="text-sm font-semibold text-gray-800">
        {t("Page")} {toLocaleDigits(page)}
      </span>

      <button
        onClick={() => setPage(page + 1)}
        disabled={!hasNextPage}
        className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium 
        disabled:opacity-50"
      >
        <FiChevronRight className={isRTL ? "rotate-180" : ""} />
      </button>

    </div>
  );
}