import ProductList from "../components/ProductList";
import Pagination from "../components/common/Pagination";
import SearchBox from "../components/common/SearchBox";
import { useTranslation } from "react-i18next";
import ViewToggle from "../components/View";


export default function Products () {
    const {t} = useTranslation();
    return (
        <div className="my-4">
            <div>
                <h1 
                    className="font-bold text-4xl text-center my-4"
                    style={{
                        color: "var(--textPrimary)"
                    }}
                >
                    {t("Melova")}
                </h1>
                <p
                    className="font-bold text-xl text-center my-4"
                    style={{
                        color: "var(--textSecondary)"
                    }}
                >
                    {("Melova_desc")}
                </p>
            </div>
            <div>
                <div className="flex items-center ">

                </div>
                <div className="flex items-center justify-center gap-4 mx-37 md:flex-row flex-col">
                    <ViewToggle></ViewToggle>
                    <SearchBox></SearchBox>
                </div>
            </div>
            
            <div>
                <ProductList></ProductList>

            </div>
        </div>
    )
}