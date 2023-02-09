function Order({order})
{
    return(
        <div className="Order">
            <h2>
                Id: {order.id}
            </h2>
            <div className="orderInfo">
                <table>

                    <div className="orderProducts">
                        {order.products.map((product)=>(
                            <tr key={product}>
                                {product}
                            </tr>
                        ))}
                    </div>
                </table>
                <table>
                    <div className="orderPrices">
                        {order.prices.map((price)=>(
                            <tr key={price}>
                                ${price}
                            </tr>
                        ))}
                    </div>
                </table>
            </div>
            <tr>
                <td></td>
                <td>Total: </td>
                <td>${order.total}</td>
            </tr>
            <button className="payOrder">Pagar Orden</button>
        </div>
    );
}
export default Order;