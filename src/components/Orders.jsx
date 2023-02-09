import Order from "./Order";

function Orders({orders})
{
    return(
        orders === undefined ? <h2 className="noOrders">No orders yet</h2> :
        orders.map((order)=>(
            <Order key={order.id} order={order}/>
        )) 
    );
}
export default Orders;