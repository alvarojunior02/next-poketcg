/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react"
import axios from "axios";
import Header from "@/components/Header";
import { ICard } from "@/interfaces/card";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Card(props: any) {
  const [card, setCard] = useState<ICard>()
  const [loading, setLoading] = useState(true)

  const getCard = async (id: string)  => {
    setLoading(true)

    await axios.get(`${process.env.POKE_TCG_API_URL}/cards/${id}`, {
        headers: {
            'X-api-key': process.env.POKE_TCG_API_KEY,
        }
    }).then((response) => {
        setCard(response.data.data)
        setLoading(false)
    }).catch(() => {
        setLoading(false)
    })
  }

  useEffect(() => {
    getCard(props.searchParams.id)
  }, [])

  return (
    <div className="flex flex-col justify-start items-center h-full bg-zinc-300">
      <Header />
      {
        loading ? (
          <>
            <div className="flex flex-row w-full max-w-screen-2xl h-full justify-a items-center pt-10 rounded-b-3xl bg-white">
                <div className="animate-pulse flex flex-row justify-center items-start shadow-black ml-6">
                    <div>
                        <div className="bg-slate-200 h-72 w-48 ml-20 rounded-ss-xl"></div>
                        <div className="bg-slate-200 h-72 w-48 ml-20 rounded-es-xl mb-80"></div>
                    </div>
                    <div>
                        <div className="bg-slate-200 h-72 w-48 rounded-se-xl"></div>
                        <div className="bg-slate-200 h-72 w-48 rounded-ee-xl mb-80"></div>
                    </div>
                </div>
                <div className="animate-pulse self-start ml-28 w-full max-w-3xl">
                    <div className="flex flex-row w-full justify-between items-start">
                        <div className="flex flex-col justify-center items-start"> 
                            <div className="bg-slate-200 h-6 w-60 mt-2"></div>
                            <div className="bg-slate-200 h-3 w-40 mt-2"></div>
                        </div>
                        <div className="flex flex-col justify-center items-center"> 
                            <div className="bg-slate-200 h-6 w-20 mt-2"></div>
                        </div>
                    </div>

                    <div className="w-full h-1 bg-slate-200 mt-4 mb-4" />

                    <div className="flex flex-col w-full justify-start items-start mt-2">
                        <div className="bg-slate-200 h-6 w-20 mt-2"></div>
                        <div className="flex flex-col justify-start items-start ml-4">
                            <div className="bg-slate-200 h-6 w-60 mt-2"></div>
                            <div className="bg-slate-200 h-2 w-40 mt-2"></div>
                        </div>
                        <div className="flex flex-col justify-start items-start mt-2 ml-4">
                            <div className="bg-slate-200 h-6 w-60 mt-2"></div>
                            <div className="bg-slate-200 h-2 w-40 mt-2"></div>
                        </div>
                    </div>

                    <div className="w-full h-1 bg-slate-200 mt-4 mb-4" />

                    <div className="flex flex-col w-full justify-start items-start pr-4 mt-2">
                        <div className="bg-slate-200 h-4 w-20 mt-2"></div>
                        <div className="flex flex-col justify-start items-start ml-4 mr-4 w-full">
                            <div className="bg-slate-200 h-6 w-20 mt-2"></div>
                            <div className="flex flex-row justify-start items-start mt-2">
                                <div className="bg-slate-200 h-6 w-96"></div>
                                <div className="bg-slate-200 h-6 w-80"></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full justify-start items-start pr-4 mt-2">
                        <div className="bg-slate-200 h-4 w-20 mt-2"></div>
                        <div className="flex flex-col justify-start items-start ml-4 mr-4 w-full">
                            <div className="bg-slate-200 h-6 w-20 mt-2"></div>
                            <div className="flex flex-row justify-start items-start mt-2">
                                <div className="bg-slate-200 h-6 w-96"></div>
                                <div className="bg-slate-200 h-6 w-80"></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full justify-start items-start pr-4 mt-2">
                        <div className="bg-slate-200 h-4 w-20 mt-2"></div>
                        <div className="flex flex-col justify-start items-start ml-4 mr-4 w-full">
                            <div className="bg-slate-200 h-6 w-20 mt-2"></div>
                            <div className="flex flex-row justify-start items-start mt-2">
                                <div className="bg-slate-200 h-6 w-96"></div>
                                <div className="bg-slate-200 h-6 w-80"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
          </>
        ) : (
            <div className="flex flex-row w-full max-w-screen-2xl h-full flex-wrap items-center pt-10 bg-white rounded-b-3xl">
                <div className="flex flex-row justify-center items-start shadow-black ml-20 mb-60">
                    <Image src={card!.images.large} alt={`card-image-${card!.id}`} width={400} height={1600}/>
                </div>
                <div className="self-start ml-28 w-full max-w-3xl">
                    <div className="flex flex-row w-full justify-between items-start">
                        <div className="flex flex-col justify-center items-start"> 
                            <h1 className="text-2xl font-bold">{card!.name}</h1>
                            <h3>{card!.supertype} - {card!.subtypes[0] ? card!.subtypes[0] : ""}{card!.subtypes[1] ? `, ${card!.subtypes[1]}` : ""}</h3>
                        </div>
                        {
                            card!.hp ? (
                                <div className="flex flex-col justify-center items-center"> 
                                    <h2 className="text-xl">HP {card!.hp}</h2>
                                </div>
                            ) : null
                        }
                    </div>

                    <div className="w-full h-1 bg-zinc-400 mt-4 mb-4" />

                    <div className="flex flex-col w-full justify-start items-start mt-2">
                        <p className="text-2xl text-zinc-600">Markets</p>
                        <div className="flex flex-col justify-start items-start ml-4">
                            <Link className="underline text-blue-400 text-lg" href={card!.tcgplayer?.url || ""} target="_blank" >Buy Now on TCG Player</Link>
                            <p className="text-xs">Last Updated {card!.tcgplayer!.updatedAt}</p>
                        </div>
                        <div className="flex flex-col justify-start items-start mt-2 ml-4">
                            <Link className="underline text-blue-400 text-lg" href={card!.cardmarket?.url || ""} target="_blank" >Buy Now on CardMarket</Link>
                            <p className="text-xs">Last Updated {card!.cardmarket!.updatedAt}</p>
                        </div>
                    </div>

                    <div className="w-full h-1 bg-zinc-400 mt-4 mb-4" />

                    {
                        card!.abilities ? (
                            <div className="flex flex-col w-full justify-start items-start">
                                <p className="text-sm text-zinc-600">Abilities</p>
                                {
                                    card!.abilities.map((ability) => {
                                        return (
                                            <>
                                                <div className="ml-4 mt-2">
                                                    <p className="text-xl">{ability.name}</p>
                                                    <p className="mt-4 mb-4">{ability.text}</p>
                                                </div>  
                                            </>
                                        )
                                    })
                                }
                            </ div>
                        ) : null
                    }

                    {
                        card!.attacks ? (
                            <div className="flex flex-col w-full justify-start items-start mt-4">
                                <p className="text-sm text-zinc-600">Attacks</p>
                                {
                                    card!.attacks.map((attack) => {
                                        return (
                                            <>
                                                <div className="pl-4 pr-4 w-full">
                                                    <div className="flex flex-row justify-between items-center">
                                                        <p className="text-xl">{attack.name}</p>
                                                        <p className="text-lg">{attack.damage}</p>
                                                    </div>
                                                    <p className="mt-4 mb-4">{attack.text}</p>
                                                </div>  
                                            </>
                                        )
                                    })
                                }
                            </ div>
                        ) : null
                    }

                    {
                        card!.rules ? (
                            <div className="flex flex-col w-full justify-start items-start mt-4">
                                <p className="text-sm text-zinc-600">Rules</p>
                                {
                                    card!.rules.map((rule) => {
                                        return (
                                            <>
                                                <div className="ml-4 mt-2">
                                                    <p className="mb-4">{rule}</p>
                                                </div>  
                                            </>
                                        )
                                    })
                                }
                            </ div>
                        ) : null
                    }

                    <div className="w-full h-1 bg-zinc-400 mt-4 mb-4" />


                </div>
            </div>
        )
      }
      <Footer />
    </div>
  )
}
