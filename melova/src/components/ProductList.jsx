import ProductCard from "./ProductCard"
import { generateId } from "../hooks/generateRandomId";
import Pagination from "./common/Pagination";

export default function ProductList () {
    const products = [1, 2, 3, 4, 5, 6]
    
    return (
        <div className="my-12 md:mx-12 sm:mx-2 mx-4" >
            <div className="mx-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <div key={generateId()}>
                        <ProductCard>
                            {product}
                        </ProductCard>
                    </div>
                ))}
            </div>
            <Pagination></Pagination>
        </div>
    )
}