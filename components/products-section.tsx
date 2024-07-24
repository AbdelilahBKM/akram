"use client"
import Navigate_categories from "./navigate-categories";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { Categorie, Produits } from "@/types/Produit";

export default function Product_section() {
    const [listProduits, setListProduits] = useState<Produits[]>([]);
    const [listCategories, setListCategories] = useState<Categorie[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Set isClient to true after component mounts

        const fetchCategories = async () => {
            try {
                console.log('Fetching categories...');
                const response = await fetch('http://127.0.0.1:8000/api/categories', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                console.log('Categories response:', response);
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const data = await response.json();
                console.log('Categories data:', data);
                setListCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        const fetchProducts = async () => {
            try {
                console.log('Fetching products...');
                const response = await fetch('http://127.0.0.1:8000/api/produits', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                console.log('Products response:', response);
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const data = await response.json();
                console.log('Products data:', data);
                setListProduits(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchCategories();
        fetchProducts();
    }, []);
  return (
    <section  className="bg-background py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 flex justify-center">
          <h2 className="text-2xl font-bold text-slate-700">Nos produits</h2>
        </div>
        <div className="flex items-center justify-center mb-16">
          <Navigate_categories />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {listProduits.map((produit) => (
            <div key={produit.id} className="rounded-lg bg-card shadow-md">
              <Image
                src={'/images/' +  produit.image_produits}
                alt="Product 1"
                width={400}
                height={300}
                className="h-60 w-full rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-card-foreground">
                  {produit.nom_produit}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {produit.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-primary">
                    {produit.prix}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="w-[245px] h-[48px] rounded-none bg-white text-orange-400 border transition-colors border-orange-400 hover:bg-orange-400 hover:text-white">
            Afficher plus
            </button>
        </div>
      </div>
    </section>
  );
}
