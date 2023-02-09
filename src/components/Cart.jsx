function Cart({products}) {
    var total = 0;
    var quant = 0;
    return(
        <div className="Cart">
            <table>
                <thead>
                    <td>Producto</td>
                    <td>Cantidad</td>
                    <td>Precio</td>
                </thead>
                <tbody>
                    {products.map((product)=>(
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>2</td>
                            <td>{product.price*2}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <td>Total</td>
                    <td>{quant}</td>
                    <td>{total}</td>
                </tfoot>
            </table>
        </div>
    );

}
export default Cart;