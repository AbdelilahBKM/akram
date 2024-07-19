import { Button } from "@/components/ui/button";
import Navigate_categories from "./navigate-categories";
import { produits } from "@/types/Produit";
import Image from "next/image";

export default function Product_section() {
  return (
    <section className="bg-background py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 flex justify-center">
          <h2 className="text-2xl font-bold text-slate-700">Nos produits</h2>
        </div>
        <div className="flex items-center justify-center mb-16">
          <Navigate_categories />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {produits.map((produit) => (
            <div key={produit.id} className="rounded-lg bg-card shadow-md">
              <Image
                src={produit.image}
                alt="Product 1"
                width={400}
                height={300}
                className="h-60 w-full rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-card-foreground">
                  {produit.nom}
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
