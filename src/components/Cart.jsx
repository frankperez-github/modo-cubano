import { useState } from "react";

function Cart({cartProducts}) {
    const[total, setTotal] = useState(0)
    return(
        cartProducts === undefined ? <h2 className="noOrders">No Products yet</h2> :
        <div className="Cart">
            <table>
                <thead>
                    <td>Producto</td>
                    <td>Cantidad</td>
                    <td>Precio</td>
                </thead>
                <tbody>
                    {cartProducts.map((product)=>(
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.quant}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <td>Total</td>
                    <td>{quant}</td>
                    <td>{total}</td>
                </tfoot>
            </table>
            <button className=" payOrder createOrder">Crear Orden</button>
        </div>
    );

}
export default Cart;