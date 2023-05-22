/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState } from "react"
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import SearchIcon from "../assets/search.png";

export default function Home() {
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

  const [search, setSearch] = useState("")

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
          <p className="text-xl mt-1">Search a card by name: </p>
          <div className="flex flex-row justify-between items-center border-2 border-solid border-black rounded-lg px-2 py-1 w-[400px]">
            <input type="text" className="w-[380px] focus:outline-none" maxLength={40} value={search} onChange={(e) => (setSearch(e.target.value))} />
            <Link 
              href={{
                pathname: '/search',
                query: { q: search},
              }}
            >
              <Image src={SearchIcon} alt="Search" width={30} height={30} />
            </Link>
          </div>
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
