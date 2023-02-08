import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Header from '../components/Header'
import Gallery from './Gallery'
import Login from './Login'
import Register from './Register'




export default function Home() {
 
  const products = [
    {
      id: 1,
      name: "Name",
      image:"/next.svg",
      description: "Esto es una hermosa descripcion de este producto que es muy caro",
      price: "100"
    },
    {
      id: 2,
      name: "Name2",
      image:"/next.svg",
      description: "Esto es una hermosa descripcion de un producto que es incluso mas caro que el anterior",
      price: "2000"
    },
    {
      id: 1,
      name: "Name",
      image:"/next.svg",
      description: "Esto es una hermosa descripcion de este producto que es muy caro",
      price: "100"
    },
    {
      id: 2,
      name: "Name2",
      image:"/next.svg",
      description: "Esto es una hermosa descripcion de un producto que es incluso mas caro que el anterior",
      price: "2000"
    },
    {
      id: 1,
      name: "Name",
      image:"/next.svg",
      description: "Esto es una hermosa descripcion de este producto que es muy caro",
      price: "100"
    },
    {
      id: 2,
      name: "Name2",
      image:"/next.svg",
      description: "Esto es una hermosa descripcion de un producto que es incluso mas caro que el anterior",
      price: "2000"
    },
    {
      id: 1,
      name: "Name",
      image:"/next.svg",
      description: "Esto es una hermosa descripcion de este producto que es muy caro",
      price: "100"
    },
    {
      id: 2,
      name: "Name2",
      image:"/next.svg",
      description: "Esto es una hermosa descripcion de un producto que es incluso mas caro que el anterior",
      price: "2000"
    }
  ]
  const[route, setRoute] = useState("/");
  return (
    <>

      <Head>
        <title>modo cubano</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header setRoute={setRoute}/>
      <main >
        {route==="/" && <Gallery products={products}/>}
        {route==="Login" && <Login setRoute={setRoute}/>}
        {route==="Register" && <Register setRoute={setRoute}/>}
      </main>

    </>
  )
}
