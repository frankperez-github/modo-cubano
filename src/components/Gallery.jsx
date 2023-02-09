import Product from "./Product";

function Gallery({products, updateCart, updateCash, updateItems, }) 
{
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