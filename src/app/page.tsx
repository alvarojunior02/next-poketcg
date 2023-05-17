/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react"
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
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
    <div className="flex flex-col justify-start items-center">
      <Header />
      {
        loading ? (
          <>
            <div className="animate-pulse flex flex-column flex-wrap justify-center items-center">
              <div className="p-2 m-3 flex flex-col justify-center items-center">
                <div className="bg-slate-200 h-4 w-32"></div>
                <div className="rounded-2xl bg-slate-200 h-96 w-72 mt-2"></div>
              </div>
              <div className="p-2 m-3 flex flex-col justify-center items-center">
                <div className="bg-slate-200 h-4 w-32"></div>
                <div className="rounded-2xl bg-slate-200 h-96 w-72 mt-2"></div>
              </div>
              <div className="p-2 m-3 flex flex-col justify-center items-center">
                <div className="bg-slate-200 h-4 w-32"></div>
                <div className="rounded-2xl bg-slate-200 h-96 w-72 mt-2"></div>
              </div>
              <div className="p-2 m-3 flex flex-col justify-center items-center">
                <div className="bg-slate-200 h-4 w-32"></div>
                <div className="rounded-2xl bg-slate-200 h-96 w-72 mt-2"></div>
              </div>
              <div className="p-2 m-3 flex flex-col justify-center items-center">
                <div className="bg-slate-200 h-4 w-32"></div>
                <div className="rounded-2xl bg-slate-200 h-96 w-72 mt-2"></div>
              </div>
              <div className="p-2 m-3 flex flex-col justify-center items-center">
                <div className="bg-slate-200 h-4 w-32"></div>
                <div className="rounded-2xl bg-slate-200 h-96 w-72 mt-2"></div>
              </div>
              <div className="p-2 m-3 flex flex-col justify-center items-center">
                <div className="bg-slate-200 h-4 w-32"></div>
                <div className="rounded-2xl bg-slate-200 h-96 w-72 mt-2"></div>
              </div>
              <div className="p-2 m-3 flex flex-col justify-center items-center">
                <div className="bg-slate-200 h-4 w-32"></div>
                <div className="rounded-2xl bg-slate-200 h-96 w-72 mt-2"></div>
              </div>
              <div className="p-2 m-3 flex flex-col justify-center items-center">
                <div className="bg-slate-200 h-4 w-32"></div>
                <div className="rounded-2xl bg-slate-200 h-96 w-72 mt-2"></div>
              </div>
              <div className="p-2 m-3 flex flex-col justify-center items-center">
                <div className="bg-slate-200 h-4 w-32"></div>
                <div className="rounded-2xl bg-slate-200 h-96 w-72 mt-2"></div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-column flex-wrap justify-center items-center">
            {
              cards.map(card => {
                return(
                  <>
                    <div className="p-2 m-3">
                      <Link 
                        href={{
                          pathname: '/card',
                          query: { id: card.id },
                        }}
                        className="flex flex-col justify-center items-center rounded-2xl hover:shadow-2xl"
                      >
                        <h2>{card.name} ({card.id})</h2>
                        <Image src={card.images.small} alt={`card-image-${card.id}`} width={300} height={1200}/>
                      </Link>
                    </div>
                  </>
                )
              })
            }
          </div>
          </>
        )
      }
    </div>
  )
}
