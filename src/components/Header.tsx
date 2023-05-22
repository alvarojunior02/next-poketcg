"use client";
import Image from "next/image"
import Logo from "../assets/logo.png"
import Link from "next/link";


export default function Header() {
    return (
        <header className="flex justify-center items-center h-20 w-full bg-red-600 shadow-xl">
            <div className="flex flex-row justify-items-center h-full">
                <Link href={"/"} className="hover:bg-red-800 self-center h-full pt-6 pl-4 pr-4">
                    <p className="text-white font-bold text-lg">Home</p>
                </Link>
                <Link href={"/sets"} className="hover:bg-red-800 self-center h-full pt-6 pl-4 pr-4">
                    <p className="text-white font-bold text-lg">Sets</p>
                </Link>
            </div>
        </header>
    ) 
}