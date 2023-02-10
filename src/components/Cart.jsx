import { useContext } from "react";
import CartProductsContext from "@/context/CartProductsContext";

function Cart() {

    const {cartProducts, totalCash, totalItems, removeCartProduct} = useContext(CartProductsContext);

    return(
        cartProducts === [] ? <h2 className="noOrders">No Products yet</h2> :
        <div className="Cart">
            <table>
                <tbody>
                    <tr>
                        <td>Producto</td>
                        <td>Cantidad</td>
                        <td className="totalPrice">Precio</td>
                    </tr>
                    {cartProducts.map((product)=>(
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.quant}</td>
                            <td className="removeProduct">
                                {product.price}
                                <button onClick={()=>(removeCartProduct(product.id))}>Remove</button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td>Total</td>
                        <td>{totalItems}</td>
                        <td className="totalPrice">{totalCash}</td>
                    </tr>
                </tbody>
            </table>
                <div className="addressInput">
                    <h3>Enviar a: </h3>
                    <input className="sendInput" type="text" placeholder="Nombre"/>
                    <input className="sendInput" type="text" placeholder="Dirección"/>
                </div>
                <button className=" payOrder createOrder">Crear Orden</button>
        </div>
    );

}
export default Cart;