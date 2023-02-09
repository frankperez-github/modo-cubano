import { useState } from "react";

function Cart({cartProducts, totalItems, totalCash}) {

    return(
        cartProducts === [] ? <h2 className="noOrders">No Products yet</h2> :
        <div className="Cart">
            <table>
                <tbody>
                    <tr>
                        <td>Producto</td>
                        <td>Cantidad</td>
                        <td>Precio</td>
                    </tr>
                    {cartProducts.map((product)=>(
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.quant}</td>
                            <td>{product.price}</td>
                        </tr>
                        ))}
                    <tr>
                        <td>Total</td>
                        <td>{totalItems}</td>
                        <td>{totalCash}</td>
                    </tr>
                </tbody>
            </table>
            <button className=" payOrder createOrder">Crear Orden</button>
        </div>
    );

}
export default Cart;