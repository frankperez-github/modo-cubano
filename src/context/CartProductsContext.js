import { createContext, useState } from "react";

const CartProductsContext = createContext();

export const CartProductsProvider = ({children}) =>{

    const [cartProducts, setCartProducts] = useState([]);

    function updateCart(id)
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
            name: modelProd.name,
            quant: 1,
            price: modelProd.price
        }
        console.log(product);
        setCartProducts([product,...cartProducts]);
        }
    }

    const products = [
        {
          id: 1,
          name: "Name",
          image:"/next.svg",
          description: "Esto es una hermosa descripcion de este producto que es muy caro",
          price: 100
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
          price: 100
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
          price: 100
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
          price: 100
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

    function updateCash(price)
    {
        setTotalCash(+totalCash+price);
    }

    function updateItems(quant)
    {
        setTotalItems(totalItems+quant);
    }


    return <CartProductsContext.Provider
    value={{
        cartProducts,
        updateCart,
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