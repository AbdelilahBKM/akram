/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yGrMRqRg0Ij
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import Image from "next/image";

export default function Navigate_categories() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid max-w-5xl items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:text-left xl:max-w-6xl xl:gap-10">
                
                <div className="grid grid-cols-4 gap-6 md:grid-cols-2">
                    <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">
                                View Salon
                            </span>
                        </Link>
                        <Image
                            src="/placeholder.svg"
                            alt="Tissus"
                            width={300}
                            height={400}
                            className="[grid-area:stack] object-cover w-full aspect-[3/4]"
                        />
                        <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-10 justify-end flex flex-col gap-2">
                            <h3 className="font-semibold text-lg tracking-tight text-center">
                                Salon
                            </h3>
                        </div>
                    </div>
                    <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">
                                View Tissus
                            </span>
                        </Link>
                        <Image
                            src="/placeholder.svg"
                            alt="Tissus"
                            width={300}
                            height={400}
                            className="[grid-area:stack] object-cover w-full aspect-[3/4]"
                        />
                        <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-10 justify-end flex flex-col gap-2">
                            <h3 className="font-semibold text-lg tracking-tight text-center">
                                Tissus
                            </h3>
                        </div>
                    </div>
                    <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">
                                View Voilage
                            </span>
                        </Link>
                        <Image
                            src="/placeholder.svg"
                            alt="Voilage"
                            width={300}
                            height={400}
                            className="[grid-area:stack] object-cover w-full aspect-[3/4]"
                        />
                        <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-10 justify-end flex flex-col gap-2">
                            <h3 className="font-semibold text-lg tracking-tight text-center">Voilage</h3>
                        </div>
                    </div>
                    <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">
                                View Literie
                            </span>
                        </Link>
                        <Image
                            src="/placeholder.svg"
                            alt="Literie"
                            width={300}
                            height={400}
                            className="[grid-area:stack] object-cover w-full aspect-[3/4]"
                        />
                        <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-10 justify-end flex flex-col gap-2">
                            <h3 className="font-semibold text-lg tracking-tight text-center">
                                Literie
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}