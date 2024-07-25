"use client"
import { LoadingProducts } from "@/components/loadingProducts";
import { useParams } from "next/navigation"


export default function Document() {
    const params = useParams();
    const id = params.id;

    return (
        <>
            <div>Produit {id}</div>
            <LoadingProducts />
        </>
        );
}