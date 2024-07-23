import Link from "next/link"
import { JSX, SVGProps } from "react"
import Image from "next/image"
export default function Component() {
    return (
        <header className="flex items-center justify-between h-16 px-4 bg-white md:px-6 w-[1207px]">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
                <Image src={"/akram-logo.png"} alt="" width={50} height={32} />
                <span className="text-2xl font-semibold">Akram</span>
            </Link>
            <nav className="absolute left-1/2 transform -translate-x-1/2 hidden gap-6 text-base font-semibold md:flex">
                <Link href="/" className="hover:underline underline-offset-4" prefetch={false}>
                    Acceuil
                </Link>
                <Link href="/#product" className="hover:underline underline-offset-4" prefetch={false}>
                    boutique
                </Link>
                <Link href="/#about" className="hover:underline underline-offset-4" prefetch={false}>
                    à propos
                </Link>
                <Link href="/#contact" className="hover:underline underline-offset-4" prefetch={false}>
                    Contact
                </Link>
            </nav>
            <div className="flex items-center gap-6 text-sm font-medium">
                <Link href="">
                    <Image src={"/items/like.png"} alt="" width={23} height={23} />
                </Link>
                <Link href="">
                    <Image src={"/items/search.png"} alt="" width={23} height={23} />
                </Link>
            </div>
        </header>

    );
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}