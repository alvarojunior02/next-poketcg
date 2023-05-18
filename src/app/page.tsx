/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react"
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
interface ISimpleCard {
  id: string
  name: string,
  images: {
    small: string,
  }
}

export default function Home() {
  const [page, setPage] = useState(1);
  const [cards, setCards] = useState<ISimpleCard[]>([])
  const [loading, setLoading] = useState(true)

  const getCards = async ()  => {
    setLoading(true)

    await axios.get(`${process.env.POKE_TCG_API_URL}/cards`, {
      params: {
        page: page,
        pageSize: 40,
        select: "id,name,images",
        q: "legalities.standard:legal"
      },
      headers: {
        'X-api-key': process.env.POKE_TCG_API_KEY,
      }
    }).then((response) => {
      setCards(response.data.data)
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    getCards()
  }, [])

  return (
    <div className="flex flex-col justify-start items-center h-screen bg-zinc-300">
      <Header />
      <div className="flex flex-column flex-wrap w-full max-w-screen-2xl h-5/6 justify-center items-center bg-white rounded-b-3xl">
      </div>
      <Footer />
    </div>
  )
}
