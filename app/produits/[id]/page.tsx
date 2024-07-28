"use client";
import { GetStaticPaths, GetStaticProps } from 'next';
import { Produits } from "@/types/Produit";
import { JSX, SVGProps, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import { DOMAIN_NAME } from "@/utils/app_variables";
import { LoadingProducts } from "@/components/loadingProducts";

export default function Component({ params }: {
  params: { id: number }
}) {
  const id = params.id;
  const [product, setProduct] = useState<Produits | null>(null);
  const [listProduits, setListProduits] = useState<Produits[]>([]);
  const [relatedProducts, setRelatedProducts] = useState<Produits[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${DOMAIN_NAME}/api/produits/${id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Ce produit n'existe pas");
        }
        const data: Produits = await response.json();
        setProduct(data);
      } catch (error: any) {
        setError(error.message || "Erreur de chargement du produit");
      } finally {
        setIsLoading(false);
      }
    };

    const fetchOtherProducts = async () => {
      try {
        const response = await fetch(`${DOMAIN_NAME}/api/produits/`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Erreur de chargement des produits");
        }
        const data: Produits[] = await response.json();
        setListProduits(data);
      } catch (error: any) {
        setError(error.message || "Erreur de chargement des produits");
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    fetchProduct();
    fetchOtherProducts();
  }, [id]);

  useEffect(() => {
    if (product && listProduits.length) {
      const filterProduct = listProduits
        .filter(
          (item) =>
            item.categorie.id === product.categorie.id && item.id !== product.id
        )
        .slice(0, 4);
      setRelatedProducts(filterProduct);
    }
  }, [product, listProduits]);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <header className="w-full flex items-center justify-center fixed z-20 top-0">
        <Header />
      </header>
      <section className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-20 mt-5">
        <div className="grid gap-4">
          <div className="grid gap-3 md:grid-cols-5 md:gap-3">
            <div className="md:col-span-4">
              {product?.image_produits && (
                <Image
                  src={`${DOMAIN_NAME}/storage/images/${product.image_produits}`}
                  alt="Product Image"
                  width={600}
                  height={900}
                  className="aspect-[2/3] object-cover border w-full rounded-lg overflow-hidden"
                />
              )}
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:gap-10 items-start">
          <div className="grid gap-2">
            <h1 className="font-bold text-3xl lg:text-4xl">
              {product?.nom_produit}
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-0.5">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
            </div>
            <p className="text-2xl font-bold">MAD {product?.prix}</p>
            <p>{product?.description}</p>
          </div>
          <div className="grid gap-2 items-stretch">
            <h2 className="text-lg font-bold">Détails du produit</h2>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Nom de Produit :</span>
                <span>{product?.nom_produit}</span>
              </div>
              <div className="flex justify-between">
                <span>Catégorie :</span>
                <span>{product?.categorie.nom_categorie}</span>
              </div>
              <div className="flex justify-between">
                <span>Prix :</span>
                <span>{product?.prix} MAD</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-12 md:py-20">
        <h2 className="text-2xl font-bold mb-8">Produits Associés</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading ? (
            <LoadingProducts />
          ) : relatedProducts.length > 0 ? (
            relatedProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-background rounded-lg shadow-sm overflow-hidden"
              >
                <Image
                  src={`${DOMAIN_NAME}/storage/images/${prod.image_produits}`}
                  alt="Related Product"
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4 space-y-2">
                  <Link
                    href={`/produits/${prod.id}`}
                    className="text-lg font-semibold hover:underline cursor-pointer"
                  >
                    {prod.nom_produit}
                  </Link>
                  <p className="text-muted-foreground">{prod.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold">MAD {prod.prix}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Aucun produit associé disponible.</p>
          )}
        </div>
      </section>
    </div>
  );
}

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
