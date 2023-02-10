import { createContext, useState } from "react";

const CartProductsContext = createContext();

export const CartProductsProvider = ({children}) =>{
    const[Id, setId] = useState(1);
    const [cartProducts, setCartProducts] = useState([]);

    function addCartProduct(id)
    {
        var modelProd = products[id-1];
        var exists = false;
        
        cartProducts.forEach(product => {
        if(product.name === modelProd.name)
        {
            exists = true;
            product.quant++;
        }
        });

        if(!exists)
        {
            const product = {
                id: Id,
                name: modelProd.name,
                quant: 1,
                price: modelProd.price
            }
            setId(Id+1);
            setCartProducts([product,...cartProducts]);
        }
        updateItems()
        updateCash()
    }
    
    function removeCartProduct(id)
    {
        cartProducts.forEach(product => {
            if(product.id == id)
            {
                if(product.quant == 1)
                {
                    var currentProducts = [];
                    cartProducts.forEach(product => {
                        if(product.id != id)
                        {
                            currentProducts = [product,...currentProducts]
                        }
                    })
                    setCartProducts(currentProducts);
                }
                product.quant--;
            }
        });
        updateCash();
        updateItems();
    }

    const products = [
        {
          id: 1,
          name: "Name",
          image:"/next.svg",
          description: "Esto es una hermosa descripcion de este producto que es muy caro",
          price: 100.0
        },
        {
          id: 2,
          name: "Name2",
          image:"/next.svg",
          description: "Esto es una hermosa descripcion de un producto que es incluso mas caro que el anterior",
          price: 2000
        },
        {
          id: 1,
          name: "Name",
          image:"/next.svg",
          description: "Esto es una hermosa descripcion de este producto que es muy caro",
          price: 100.0
        },
        {
          id: 2,
          name: "Name2",
          image:"/next.svg",
          description: "Esto es una hermosa descripcion de un producto que es incluso mas caro que el anterior",
          price: 2000
        },
        {
          id: 1,
          name: "Name",
          image:"/next.svg",
          description: "Esto es una hermosa descripcion de este producto que es muy caro",
          price: 100.0
        },
        {
          id: 2,
          name: "Name2",
          image:"/next.svg",
          description: "Esto es una hermosa descripcion de un producto que es incluso mas caro que el anterior",
          price: 2000
        },
        {
          id: 1,
          name: "Name",
          image:"/next.svg",
          description: "Esto es una hermosa descripcion de este producto que es muy caro",
          price: 100.0
        },
        {
          id: 2,
          name: "Name2",
          image:"/next.svg",
          description: "Esto es una hermosa descripcion de un producto que es incluso mas caro que el anterior",
          price: 2000
        }
    ]

    const[totalCash, setTotalCash] = useState(0);
    const[totalItems, setTotalItems] = useState(0)

    function updateCash()
    {
        console.log("cash")
        var totalCash = 0;
        cartProducts.forEach(product => {
            totalCash += product.price*product.quant;
        });
        setTotalCash(totalCash);
    }

    function updateItems()
    {
        var totalItems = 0;
        cartProducts.forEach(product => {
            console.log("items")
            totalItems += product.quant;
        });
        setTotalItems(totalItems);
    }


    return <CartProductsContext.Provider
    value={{
        cartProducts,
        addCartProduct,
        removeCartProduct,
        products,
        updateCash,
        updateItems,
        totalCash,
        totalItems
    }}>
        {children}
    </CartProductsContext.Provider>
}

export default CartProductsContext;