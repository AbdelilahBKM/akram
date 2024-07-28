"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { Categorie, Produits } from "@/types/Produit";
import Link from "next/link";
import { LoadingProducts } from "./loadingProducts";
import { DOMAIN_NAME } from "@/utils/app_variables";

export default function Product_section() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [listProduits, setListProduits] = useState<Produits[]>([]);
  const [listCategories, setListCategories] = useState<Categorie[]>([]);
  const [produitsAfficher, setProduitsAfficher] = useState<Produits[]>([]);
  const [activeCategory, setActiveCategory] = useState(1);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchCategories = async () => {
      try {
        console.log("Fetching categories...");
        const response = await fetch(`${DOMAIN_NAME}/api/categories`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Categories response:", response);
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        const data = await response.json();
        console.log("Categories data:", data);
        setListCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchProducts = async () => {
      try {
        console.log("Fetching products...");
        const response = await fetch(`${DOMAIN_NAME}/api/produits`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Products response:", response);
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        const data = await response.json();
        console.log("Products data:", data);
        setListProduits(data);
        setProduitsAfficher(
          data.filter((prod: Produits) => prod.categorie.id === activeCategory)
        );
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchCategories();
    fetchProducts();
  }, [activeCategory]);

  useEffect(() => {
    setProduitsAfficher(
      listProduits.filter((prod) => prod.categorie.id === activeCategory)
    );
  }, [listProduits, activeCategory]);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  const productsToDisplay = showAll
    ? produitsAfficher
    : produitsAfficher.slice(0, 8);

  return (
    <section className="bg-background py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 flex justify-center">
          <h2 className="text-2xl font-bold text-slate-700">Nos produits</h2>
        </div>
        <div className="flex items-center justify-center mb-16">
          <nav className="flex justify-center p-4 bg-gray-100 rounded-full w-full sm:w-3/4 md:w-1/2">
            <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4 text-slate-700">
              {listCategories.map((category) => (
                <li key={category.id}>
                  <div>
                    <button
                      className={`px-3 py-2 rounded-full ${
                        activeCategory === category.id
                          ? "bg-white font-semibold shadow"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.nom_categorie}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {isLoading ? (
          <LoadingProducts />
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {productsToDisplay.map((produit) => (
                <div
                  key={produit.id}
                  className="rounded-lg bg-card shadow-md cursor-pointer"
                >
                  <Image
                    src={`${DOMAIN_NAME}/storage/images/${produit.image_produits}`}
                    alt="Product 1"
                    width={400}
                    height={300}
                    className="h-60 w-full rounded-t-lg object-cover"
                  />
                  <div className="p-4">
                    <Link
                      href={"/produits/" + produit.id}
                      className="text-lg font-semibold text-card-foreground hover:underline transition-all"
                    >
                      {produit.nom_produit}
                    </Link>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {produit.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-semibold text-primary">
                        {produit.prix} MAD
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <button
                disabled={listProduits.length <= 8}
                className="w-[245px] h-[48px] rounded-none bg-white text-orange-400 border transition-colors border-orange-400 hover:bg-orange-400 hover:text-white"
                onClick={handleShowMore}
              >
                {showAll ? "Afficher moins" : "Afficher plus"}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
