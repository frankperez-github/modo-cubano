import Product from "./Product";

function Gallery({products, updateCart}) 
{
    return(
        <div className="container">
            <div className="products-gallery">
                {products.map((product, index) => (
                    <Product key={index} product={product} updateCart={updateCart}/>
                ))}
            </div>
        </div>

    );    
}
export default Gallery;