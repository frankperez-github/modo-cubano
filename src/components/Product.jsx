import Image from "next/image";

function Product({product, updateCart, updateCash, updateItems}) {
    return(
        <div className="product">
            <h2>{product.name}</h2>
            <Image src={product.image} alt={product.id} width={100} height={100}/>
            <p>{product.description}</p>
            <h3 className="price">${product.price}</h3>
            <button className="buy" onClick={()=>(
                updateCart([product.id]),
                updateCash(product.price),
                updateItems(1)
                )}>Agregar</button>
        </div>
    );
}
export default Product;