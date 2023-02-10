import Product from "./Product";
import { useContext } from "react";
import CartProductsContext from "@/context/CartProductsContext";

function Gallery() 
{
    const{products} = useContext(CartProductsContext);

    return(
        <div className="container">
            <div className="products-gallery">
                {products.map((product, index) => (
                    <Product key={index} product={product}/>
                ))}
            </div>
        </div>

    );    
}
export default Gallery;