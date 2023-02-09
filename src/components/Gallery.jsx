import Product from "./Product";

function Gallery({products, setCart}) 
{
    return(
        <div className="container">
            <div className="products-gallery">
                {products.map((product) => (
                    <Product key={product.id} product={product}/>
                ))}
            </div>
        </div>

    );    
}
export default Gallery;