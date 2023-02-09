import Order from "./Order";

function Orders({orders})
{
    const order = {
            id: 1,
            products: [
                "casa",
                "otro",
                "y otro"
            ],
            prices: [
                "5",
                "1.5",
                "2.0"
            ],
            total: 500
        }
    return(

        <Order order={order}/>
    );
}
export default Orders;