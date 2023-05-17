"use client";
import Image from "next/image"

import SearchIcon from "../assets/search.png"
import Logo from "../assets/logo.png"
import { useState } from "react"


export default function Header() {
    const [search, setSearch] = useState('')
    return (
        <header className="flex justify-between items-center h-20 w-full bg-red-600">
            <div className="ml-32">
                <Image src={Logo} alt="Logo" width={40} height={40}/>
            </div>
            <div className="flex flex-row justify-between items-center mr-32 h-8 w rounded bg-white">
                <input
                    className="h-8 w-72 pl-2 mr-2 bg-transparent outline-none"
                    value={search}
                    onChange={(evt) => {
                        setSearch(evt.target.value)
                    }}
                    placeholder="Buscar carta..." 
                    name="searchCard"
                />
                <button className="bg-transparent border-none pr-2">
                    <Image src={SearchIcon} alt="Search" width={20} height={20}/>
                </button>
            </div>
        </header>
    ) 
}