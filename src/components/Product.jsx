import { useContext } from "react";
import CartProductsContext from "@/context/CartProductsContext";
import Image from "next/image";

function Product({product}) {
    const {addCartProduct} = useContext(CartProductsContext);
    return(
        <div className="product">
            <h2>{product.name}</h2>
            <Image src={product.image} alt={product.id} width={100} height={100}/>
            <p>{product.description}</p>
            <h3 className="price">${product.price}</h3>
            <button className="buy" onClick={()=>(addCartProduct([product.id]))}>Agregar al carrito</button>
        </div>
    );
}
export default Product;