import Product from "./components/Product";

function Gallery({products}) 
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