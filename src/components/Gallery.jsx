import Product from "./Product";
import { useContext } from "react";
import CartProductsContext from "@/context/CartProductsContext";

function Gallery() 
{
    const{updateCart, products, updateCash, updateItems} = useContext(CartProductsContext);

    return(
        <div className="container">
            <div className="products-gallery">
                {products.map((product, index) => (
                    <Product key={index} product={product} updateCart={updateCart} updateCash={updateCash} updateItems={updateItems}/>
                ))}
            </div>
        </div>

    );    
}
export default Gallery;