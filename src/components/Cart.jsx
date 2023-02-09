import { useState } from "react";

function Cart({cartProducts}) {
    const[totalCash, setTotalCash] = useState(0);
    const[totalItems, setTotalItems] = useState(0)

    return(
        cartProducts === [] ? <h2 className="noOrders">No Products yet</h2> :
        <div className="Cart">
            <table>
                <thead>
                    <td>Producto</td>
                    <td>Cantidad</td>
                    <td>Precio</td>
                </thead>
                <tbody>
                    {cartProducts.map((product)=>(
                        (()=>(setTotalItems(totalItems+1))),
                        (()=>(setTotalCash(totalCash+product.price))),
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.quant}</td>
                            <td>{product.price}</td>
                        </tr>
                        // (()=>(setTotalCash(totalCash+product.price * product.quant)))
                    ))}
                </tbody>
                <tfoot>
                    <td>Total</td>
                    <td>{totalItems}</td>
                    <td>{totalCash}</td>
                </tfoot>
            </table>
            <button className=" payOrder createOrder">Crear Orden</button>
        </div>
    );

}
export default Cart;