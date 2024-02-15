/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react"
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ISimpleSet {
    id: string
    name: string,
    series: string,
    images: {
        logo: string,
    }
}

export default function Sets() {
    const [page, setPage] = useState(1);
    const [sets, setSets] = useState<Array<ISimpleSet[]>>([])
    const [loading, setLoading] = useState(true)

    function groupBy(collection: [], property: string) {
        var i = 0, val, index, values: [] = [], result = [];
        for (; i < collection.length; i++) {
            val = collection[i][property];
            index = values.indexOf(val);
            if (index > -1)
                result[index].push(collection[i]);
            else {
                values.push(val);
                result.push([collection[i]]);
            }
        }
        return result;
    }

    const getSets = async () => {
        setLoading(true)

        await axios.get(`${process.env.POKE_TCG_API_URL}/sets`, {
            params: {
                page: page,
                pageSize: 250,
                select: "id,name,series,images",
                orderBy: "-releaseDate",
            },
            headers: {
                'X-api-key': process.env.POKE_TCG_API_KEY,
            }
        }).then((response) => {
            const series = groupBy(response.data.data, "series")
            setSets(series)
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        getSets()
    }, [])

    return (
        <div className="flex flex-col justify-start items-center bg-zinc-300">
            <Header />
            {
                loading ? (
                    <>
                        <div className="animate-pulse flex flex-col w-full max-w-screen-2xl justify-center items-center bg-white rounded-b-3xl pt-4">
                            <div className="bg-slate-200 h-6 w-56"></div>
                            <div className="flex flex-row flex-wrap w-full max-w-screen-2xl justify-center items-center">
                                <div className="p-2 m-3 flex flex-col justify-center items-center">
                                    <div className="rounded-lg bg-slate-200 h-72 w-72 mt-2"></div>
                                </div>
                                <div className="p-2 m-3 flex flex-col justify-center items-center">
                                    <div className="rounded-lg bg-slate-200 h-72 w-72 mt-2"></div>
                                </div>
                                <div className="p-2 m-3 flex flex-col justify-center items-center">
                                    <div className="rounded-lg bg-slate-200 h-72 w-72 mt-2"></div>
                                </div>
                                <div className="p-2 m-3 flex flex-col justify-center items-center">
                                    <div className="rounded-lg bg-slate-200 h-72 w-72 mt-2"></div>
                                </div>
                            </div>

                            <div className="w-full h-1 bg-zinc-400 mb-3" />

                            <div className="bg-slate-200 h-6 w-56"></div>
                            <div className="flex flex-row flex-wrap w-full max-w-screen-2xl justify-center items-center">
                                <div className="p-2 m-3 flex flex-col justify-center items-center">
                                    <div className="rounded-lg bg-slate-200 h-72 w-72 mt-2"></div>
                                </div>
                                <div className="p-2 m-3 flex flex-col justify-center items-center">
                                    <div className="rounded-lg bg-slate-200 h-72 w-72 mt-2"></div>
                                </div>
                                <div className="p-2 m-3 flex flex-col justify-center items-center">
                                    <div className="rounded-lg bg-slate-200 h-72 w-72 mt-2"></div>
                                </div>
                                <div className="p-2 m-3 flex flex-col justify-center items-center">
                                    <div className="rounded-lg bg-slate-200 h-72 w-72 mt-2"></div>
                                </div>
                                <div className="p-2 m-3 flex flex-col justify-center items-center">
                                    <div className="rounded-lg bg-slate-200 h-72 w-72 mt-2"></div>
                                </div>
                                <div className="p-2 m-3 flex flex-col justify-center items-center">
                                    <div className="rounded-lg bg-slate-200 h-72 w-72 mt-2"></div>
                                </div>
                                <div className="p-2 m-3 flex flex-col justify-center items-center">
                                    <div className="rounded-lg bg-slate-200 h-72 w-72 mt-2"></div>
                                </div>
                                <div className="p-2 m-3 flex flex-col justify-center items-center">
                                    <div className="rounded-lg bg-slate-200 h-72 w-72 mt-2"></div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex flex-col w-full h-full max-w-screen-2xl justify-center items-center p-4 bg-white rounded-b-3xl">
                            {
                                sets.map((setSerie, index) => {
                                    return (
                                        <div key={index}>
                                            <h2 className="font-bold text-xl mb-3">{setSerie[0].series}</h2>
                                            <div className="flex flex-row flex-wrap justify-center items-start mb-4">
                                                {
                                                    setSerie.map((set) => {
                                                        return (
                                                            <div key={set.id}>
                                                                <Link
                                                                    href={{
                                                                        pathname: '/set',
                                                                        query: { id: set.id },
                                                                    }}
                                                                    className="shadow-2xl w-98 h-72 flex flex-col justify-center items-center m-6 rounded-lg transition hover:scale-125 hover:transition"
                                                                >
                                                                    <div className="flex flex-col justify-center items-center w-72 h-20">
                                                                        <Image src={set.images.logo} alt={`logo-${set.name}`} width={130} height={10} />
                                                                    </div>
                                                                    <p className="text-lg mt-10">{set.name}</p>
                                                                </Link>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="w-full h-1 bg-zinc-400 mb-3" />
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
