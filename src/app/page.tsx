/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState } from "react"
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [page, setPage] = useState(1);
  const miraidon = {
    id: "sv1-244",
    name: "Miraidon ex",
    images: {
      small: "https://images.pokemontcg.io/sv1/244.png"
    }
  }
  const koraidon = {
    id: "sv1-247",
    name: "Koraidon ex",
    images: {
      small: "https://images.pokemontcg.io/sv1/247.png"
    }
  }
    
  const [loading, setLoading] = useState(true)


  return (
    <div className="flex flex-col justify-start items-center h-screen bg-zinc-300">
      <Header />
      <div className="flex flex-row w-full max-w-screen-2xl max-h-screen h-full justify-between items-center bg-white rounded-b-3xl px-20">
        <div>
          <Link 
            href={{
              pathname: '/card',
              query: { id: miraidon.id },
            }}
          > 
            <Image className="img-animation" src={miraidon.images.small} alt={miraidon.name} width={300} height={900} />
          </Link>
        </div>

        <div className="flex flex-col h-full justify-center items-center leading-tight">
          <h1 className="font-bold text-2xl">Next - Poke TCG</h1>
          <p className="text-xl">Search a card: </p>
          <input type="text" className="border-solid border-black border-2 px-2 py-1 rounded-lg w-[400px]" />
        </div>
          
        <div>
          <Link 
            href={{
              pathname: '/card',
              query: { id: koraidon.id },
            }}
          > 
            <Image className="img-animation" src={koraidon.images.small} alt={koraidon.name} width={300} height={900} />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
