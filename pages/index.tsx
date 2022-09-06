import React, { useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import useChatwoot from "../hooks/useChatwoot";
import classNames from "classnames";
import { formatDistance } from "date-fns";

const Home: NextPage = () => {
    const [loaded, payload, error] = useChatwoot();

    useEffect(() => {
        console.log(loaded, payload, error);
    }, [payload, error]);

    return (
        <main className="w-full h-screen bg-white">
            <section className="grid grid-cols-3 gap-5 bg-gray-100 border-b p-4">
                <div className="w-full">
                    <h1 className="text-3xl font-bold text-gray-700">
                        Dashboard
                    </h1>
                </div>
            </section>

            <section className="w-full p-4">
                {loaded && (
                    <div className="card bg-gray-100 text-gray-600 p-4 shadow-lg">
                        <div className="inline-flex space-x-4">
                            <div className={classNames(
                                "avatar",
                                payload.data?.contact?.thumbnail ? "" : "placeholder"
                            )}>
                                <div className="bg-sky-500 mask mask-hexagon w-24">
                                    {payload.data?.contact?.thumbnail 
                                        ? <Image layout="fill" src="payload.data?.contact?.thumbnail" /> 
                                        : <span className="text-3xl text-white">{payload?.data?.contact?.name?.charAt(0).toLocaleUpperCase()}</span>
                                    }
                                </div>
                            </div> 
                            <div>
                                <h1 className="text-3xl font-bold">
                                    {payload.data?.contact?.name}
                                </h1>
                                <p>
                                    {payload.data?.contact?.email} 
                                    {formatDistance(payload.data?.contact?.lastActivityAt 
                                        ? payload.data?.contact?.lastActivityAt * 1000
                                        : new Date(), new Date(), { addSuffix: true })
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
};

export default Home;
