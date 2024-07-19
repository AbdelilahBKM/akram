/**
 * v0 by Vercel.
 * @see https://v0.dev/t/he3bHt0qOVb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import Navigate_categories from "./navigate-categories"

export default function Product_section() {
  return (
    <section className="bg-background py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary">Nos produits</h2>
        </div>
        <div>
            <Navigate_categories />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="rounded-lg bg-card shadow-md">
            <img
              src="/placeholder.svg"
              alt="Product 1"
              width={400}
              height={300}
              className="h-60 w-full rounded-t-lg object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-card-foreground">Tapis Berbère</h3>
              <p className="mb-4 text-sm text-muted-foreground">Tapis artisanal marocain</p>
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-primary">1 200 MAD</span>
                <Button size="sm">Ajouter</Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-card shadow-md">
            <img
              src="/placeholder.svg"
              alt="Product 2"
              width={400}
              height={300}
              className="h-60 w-full rounded-t-lg object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-card-foreground">Poterie Marocaine</h3>
              <p className="mb-4 text-sm text-muted-foreground">Vase en céramique artisanal</p>
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-primary">450 MAD</span>
                <Button size="sm">Ajouter</Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-card shadow-md">
            <img
              src="/placeholder.svg"
              alt="Product 3"
              width={400}
              height={300}
              className="h-60 w-full rounded-t-lg object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-card-foreground">Lanterne Marocaine</h3>
              <p className="mb-4 text-sm text-muted-foreground">Lanterne en métal ajourée</p>
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-primary">300 MAD</span>
                <Button size="sm">Ajouter</Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-card shadow-md">
            <img
              src="/placeholder.svg"
              alt="Product 4"
              width={400}
              height={300}
              className="h-60 w-full rounded-t-lg object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-card-foreground">Coussin Marocain</h3>
              <p className="mb-4 text-sm text-muted-foreground">Coussin en velours brodé</p>
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-primary">200 MAD</span>
                <Button size="sm">Ajouter</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Button size="lg">Afficher plus</Button>
        </div>
      </div>
    </section>
  )
}