"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { JSX, SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";

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
    const [isProduct, setIsProduct] = useState<boolean>(true);
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <Tabs defaultValue="products">
                        <div className="flex items-center">
                            <TabsList>
                                <TabsTrigger onClick={() => setIsProduct(true)} value="products">Produits</TabsTrigger>
                                <TabsTrigger onClick={() => setIsProduct(false)} value="categories">Categories</TabsTrigger>
                            </TabsList>
                            <Link href={isProduct ? '/admin_page/ajouter_produit' : '/admin_page/ajouter_categorie'} className="ml-auto border border-slate-700 px-4 py-2 rounded-sm hover:bg-slate-700 hover:text-white transition-colors">
                                Ajouter Un Nouveau
                            </Link>
                        </div>
                        {/* produits */}
                        <TabsContent value="products">
                            <Card x-chunk="dashboard-06-chunk-0">
                                <CardHeader>
                                    <CardTitle>Vos Produits</CardTitle>
                                    <CardDescription>Gérez vos produits.</CardDescription>
                                    <CardContent>
                                        <div className="w-1/2 mt-4 flex flex-col items-start gap-4">
                                            <h1>Rechercher un Article Spécifique</h1>
                                            <Input type="search" placeholder="recherchez" className="w-[453px]" />
                                        </div>
                                    </CardContent>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Image</TableHead>
                                                <TableHead>Nom</TableHead>
                                                <TableHead>Description</TableHead>
                                                <TableHead>Prix</TableHead>
                                                <TableHead>Categorie</TableHead>
                                                <TableHead>
                                                    <span className="sr-only">Actions</span>
                                                </TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>
                                                    <Image src={'/images/salon1.png'} alt="product1" width={50} height={50}
                                                        className="w-20 h-fit rounded-sm"
                                                    />
                                                </TableCell>
                                                <TableCell className="font-medium">Salon</TableCell>
                                                <TableCell>description</TableCell>
                                                <TableCell>499.99 MAD</TableCell>
                                                <TableCell>Salon</TableCell>
                                                <TableCell className="flex gap-7">
                                                    <Link href={"/admin_page/produit/" + 1}>
                                                        <Button className="w-[125px]" variant="outline">modifier</Button>
                                                    </Link>
                                                    <AlertDialog>
                                                        <AlertDialogTrigger
                                                            className="w-[125px] border rounded-sm border-red-400 text-red-400 hover:bg-red-400 hover:text-white transition-colors">
                                                            Suprimmer
                                                        </AlertDialogTrigger>
                                                        <AlertDialogContent>
                                                            <AlertDialogHeader>
                                                                <AlertDialogTitle>Etes-vous absolument sûr ?</AlertDialogTitle>
                                                                <AlertDialogDescription>
                                                                    Cette action ne peut pas être annulée. Cela supprimera définitivement l'élément de la base de données.
                                                                </AlertDialogDescription>
                                                            </AlertDialogHeader>
                                                            <AlertDialogFooter>
                                                                <AlertDialogCancel>Annuler</AlertDialogCancel>
                                                                <AlertDialogAction className="bg-red-400 hover:bg-red-700">Continuer</AlertDialogAction>
                                                            </AlertDialogFooter>
                                                        </AlertDialogContent>
                                                    </AlertDialog>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                                <CardFooter>
                                    <div className="text-xs text-muted-foreground">
                                        affichant <strong>1-1</strong> sur <strong>1</strong>
                                        produits
                                    </div>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        {/* categories */}
                        <TabsContent value="categories">
                            <Card x-chunk="dashboard-06-chunk-0">
                                <CardHeader>
                                    <CardTitle>Catégories</CardTitle>
                                    <CardDescription>Gérez vos catégories de produits.</CardDescription>
                                    <CardContent>
                                        <div className="w-1/2 mt-4 flex flex-col items-start gap-4">
                                            <h1>Rechercher un Article Spécifique</h1>
                                            <Input type="search" placeholder="recherchez" className="w-[453px]" />
                                        </div>
                                    </CardContent>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Nom Catégorie</TableHead>
                                                <TableHead>Description</TableHead>
                                                <TableHead>
                                                    <span className="sr-only">Actions</span>
                                                </TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="font-medium">Appliances</TableCell>
                                                <TableCell>Home and kitchen appliances.</TableCell>
                                                <TableCell className="flex gap-7">
                                                    <Link href={"/admin_page/categorie/" + 1}>
                                                        <Button className="w-[125px]" variant="outline">modifier</Button>
                                                    </Link>
                                                    <AlertDialog>
                                                        <AlertDialogTrigger
                                                            className="w-[125px] border rounded-sm border-red-400 text-red-400 hover:bg-red-400 hover:text-white transition-colors">
                                                            Suprimmer
                                                        </AlertDialogTrigger>
                                                        <AlertDialogContent>
                                                            <AlertDialogHeader>
                                                                <AlertDialogTitle>Etes-vous absolument sûr ?</AlertDialogTitle>
                                                                <AlertDialogDescription>
                                                                    Cette action ne peut pas être annulée. Cela supprimera définitivement l'élément de la base de données.
                                                                </AlertDialogDescription>
                                                            </AlertDialogHeader>
                                                            <AlertDialogFooter>
                                                                <AlertDialogCancel>Annuler</AlertDialogCancel>
                                                                <AlertDialogAction className="bg-red-400 hover:bg-red-700">Continuer</AlertDialogAction>
                                                            </AlertDialogFooter>
                                                        </AlertDialogContent>
                                                    </AlertDialog>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                                <CardFooter>
                                    <div className="text-xs text-muted-foreground">
                                        affichant <strong>1-1</strong> sur <strong>1</strong>
                                        catégories
                                    </div>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </main>
            </div>
        </div>
    )
}

function MoveVerticalIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <polyline points="8 18 12 22 16 18" />
            <polyline points="8 6 12 2 16 6" />
            <line x1="12" x2="12" y1="2" y2="22" />
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
