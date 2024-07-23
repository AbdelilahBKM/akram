"use client";
import { useParams } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


export default function Component() {
  const params = useParams();
  const id = params.id;
  return (
    <section className='flex items-center justify-center mb-7'>
      <Card>
        <CardHeader>
          <CardTitle>Modifier Produit</CardTitle>
          <CardDescription>Mettez à jour les détails de votre produit.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="image">Image du produit</Label>
              <div className="flex items-center gap-2">
                <Input id="image" type="file" />
                <Button variant="ghost">télécharger</Button>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="title">Titre du produit</Label>
              <Input id="title" placeholder="Entrez le titre du produit" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description du produit</Label>
              <Textarea id="description" placeholder="Entrez la description du produit" className="min-h-[120px]" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Prix du produit</Label>
              <Input min={1} id="price" type="number" placeholder="Entrez le prix du produit" />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <AlertDialog>
            <AlertDialogTrigger className='border border-slate-800 text-slate-800 px-4 py-2 rounded-sm hover:bg-slate-800 hover:text-white transition-colors'>
              Sauvegarder les modifications
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>En êtes-vous absolument sûr ?</AlertDialogTitle>
                <AlertDialogDescription>
                Cette action ne peut pas être annulée. Cela remplacera les anciennes informations sur l'article par les nouvelles.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Annuler</AlertDialogCancel>
                <AlertDialogAction>Continuer</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

        </CardFooter>
      </Card>
    </section>
  )
}