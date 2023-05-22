/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react"
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useSearchParams } from 'next/navigation'

interface ISimpleCard {
  id: string
  name: string,
  images: {
    large: string,
  }
}

export default function Search() {
    const [cards, setCards] = useState<ISimpleCard[]>([])
    const [loading, setLoading] = useState(true)

    const searchParams = useSearchParams()

    const getCards = async ()  => {
        setLoading(true)

        await axios.get(`${process.env.POKE_TCG_API_URL}/cards`, {
            params: {
                page: 1,
                pageSize: 250,
                orderBy: "number",
                select: "id,name,images",
                q: `name:${searchParams.get('q')}`,
            },
            headers: {
                'X-api-key': process.env.POKE_TCG_API_KEY,
            }
        }).then(async (response) => {
            if (response.data.totalCount > response.data.pageSize) {
                await axios.get(`${process.env.POKE_TCG_API_URL}/cards`, {
                    params: {
                        page: 2,
                        pageSize: 250,
                        orderBy: "number",
                        select: "id,name,images",
                        q: `name:${searchParams.get('q')}`,
                    },
                    headers: {
                        'X-api-key': process.env.POKE_TCG_API_KEY,
                    }
                }).then((responseMore) => {
                    const newCardsArray: ISimpleCard[] = [...response.data.data, ...responseMore.data.data]
                    setCards(newCardsArray)
                })
            } else {
                setCards(response.data.data)
            }
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        getCards()
    }, [])

    return (
        <div className="flex flex-col justify-start items-center bg-zinc-300">
            <Header />
            {
                loading ? (
                <>
                    <div className="animate-pulse flex flex-column flex-wrap w-full max-w-screen-2xl justify-center items-center bg-white rounded-b-3xl">
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
                    <div className="flex flex-column flex-wrap w-full max-w-screen-2xl justify-center items-center bg-white rounded-b-3xl">
                    {
                        cards.map(card => {
                            return(
                                <div className="p-2 m-3" key={card.id}>
                                    <Link 
                                        href={{
                                            pathname: '/card',
                                            query: { id: card.id },
                                        }}
                                        className="flex flex-col justify-center items-center rounded-2xl hover:shadow-2xl"
                                    >
                                        <h2>{card.name}</h2>
                                        <Image src={card.images.large} alt={`card-image-${card.id}`} width={300} height={1200}/>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                </>
                )
            }
            <Footer />
        </div>
    )
}
