import { Skeleton } from "@/components/ui/skeleton"

export function LoadingProducts() {
    return (
        <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-center mb-16">
                <nav className="flex justify-center p-4 bg-gray-100 rounded-full w-1/2">
                    <ul className="flex space-x-4 text-slate-700">
                        <li>
                            <div>
                                <button
                                    className={"px-4 py-2 rounded-full bg-white"}
                                >
                                </button>
                            </div>
                        </li>
                        <li>
                            <div>
                                <button
                                    className={"px-4 py-2 rounded-full "}
                                >
                                </button>
                            </div>
                        </li>
                        <li>
                            <div>
                                <button
                                    className={"px-4 py-2 rounded-full "}
                                >
                                </button>
                            </div>
                        </li>
                        <li>
                            <div>
                                <button
                                    className={"px-4 py-2 rounded-full "}
                                >
                                </button>
                            </div>
                        </li>

                    </ul>
                </nav>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </div><div className="flex flex-col space-y-3">
                    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </div><div className="flex flex-col space-y-3">
                    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </div><div className="flex flex-col space-y-3">
                    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </div><div className="flex flex-col space-y-3">
                    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </div><div className="flex flex-col space-y-3">
                    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </div><div className="flex flex-col space-y-3">
                    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </div><div className="flex flex-col space-y-3">
                    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </div>
            </div>
            <div className="mt-8 flex justify-center">
                <button
                    className="w-[245px] h-[48px] rounded-none bg-white text-orange-400 border transition-colors border-orange-400 hover:bg-orange-400 hover:text-white"
                >
                    Afficher plus
                </button>
            </div>
        </div>
    );
}

