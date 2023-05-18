"use client";
import Image from "next/image"
import Logo from "../assets/logo.png"
import Link from "next/link";


export default function Header() {
    return (
        <header className="flex justify-center items-center h-20 w-full bg-red-600 shadow-xl">
            {/* <div className="ml-32">
                <Link href={"/"}>
                    <Image src={Logo} alt="Logo" width={40} height={40}/>
                </Link>
            </div> */}
            <div className="flex flex-row justify-items-center h-full">
                <Link href={"/"} className="hover:bg-red-800 self-center h-full pt-6 pl-4 pr-4">
                    <p className="text-white font-bold text-lg">Home</p>
                </Link>
                <Link href={"/sets"} className="hover:bg-red-800 self-center h-full pt-6 pl-4 pr-4">
                    <p className="text-white font-bold text-lg">Sets</p>
                </Link>
            </div>
            {/* <div className="flex flex-row justify-between items-center mr-32 h-8 w rounded bg-white">
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
            </div> */}
        </header>
    ) 
}