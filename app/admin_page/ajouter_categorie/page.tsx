"use client";
import { FormEvent, useEffect, useReducer, useRef, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from 'next/navigation';
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
} from "@/components/ui/alert-dialog";


import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";

import { RootState } from "@/store/redux";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '@/store/authReducer';
import { AlertCircle, Terminal, X } from 'lucide-react';
import { DOMAIN_NAME } from '@/utils/app_variables';


export default function AjouterProduit() {
    const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
        if (!isAuth) {
            dispatch(logout());
            router.push('/admin_page');
        }
    });
    
    const api_token = useSelector((state: RootState) => state.auth.token);

    const formRef = useRef<HTMLFormElement>(null);
    const [nomCategorie, setNomCategorie] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [notification, setNotification] = useState('');

    const handleAlertDialogConfirm = () => {
        if (formRef.current) {
            formRef.current.requestSubmit();
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setNotification('');
        setIsLoading(true);
        if (nomCategorie !== '' && description !== '') {
            try {
                const response = await fetch(`${DOMAIN_NAME}/api/categories`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${api_token}`
                    },
                    body: JSON.stringify({
                        'nom_categorie': nomCategorie,
                        'description_categorie': description
                    })
                });

                if (response.ok) {
                    const result = await response.json();
                    console.log('catégorie added successfully:', result);
                    setNotification('catégorie ajouté avec succès !');

                    setIsLoading(false);
                    setDescription('');
                    setNomCategorie('');

                } else {
                    const errorResult = await response.json();
                    console.error('Error adding product:', errorResult);
                    setError("Une erreur s'est produite lors de la connexion.");
                }
            } catch (error) {
                setIsLoading(false);
                console.error('Network error:', error);
                setError('Une erreur est survenue lors de l\'ajout du catégorie.');
            }
        } else {
            setIsLoading(false);
            setError('Veuillez remplir tous les champs.');
        }
    };

    return (
        <section className='flex flex-col items-center justify-start bg-slate-100 min-h-screen py-[125px]'>
            {
                notification !== '' &&
                <Alert variant={'default'} className='w-[500px] border-green-800 text-green-800 mt-4'>
                    <X onClick={() => setNotification('')} className="h-5 w-5 text-green-800 cursor-pointer" />
                    <AlertTitle>Succès!</AlertTitle>
                    <AlertDescription>
                        {notification}
                    </AlertDescription>
                </Alert>
            }
            <Card className='mt-4 shadow w-[775px]'>
                <CardHeader>
                    <CardTitle>Ajouter Catégorie</CardTitle>
                    <CardDescription>Mettez à jour les détails de votre produit.</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit} ref={formRef} className="grid gap-6">
                    <CardContent>
                        <div className="grid gap-2 mb-4">
                            <Label htmlFor="title">Titre du Catégorie</Label>
                            <Input value={nomCategorie} onChange={(e) => setNomCategorie(e.target.value)} id="title" placeholder="Entrez le titre du produit" />
                        </div>
                        <div className="grid gap-2 mb-4">
                            <Label htmlFor="description">Description du Catégories</Label>
                            <Textarea value={description}
                                onChange={(e) => setDescription(e.target.value)} id="description" placeholder="Entrez la description du produit" className="min-h-[120px]" />
                        </div>
                    </CardContent>
                    <CardFooter className='flex flex-col gap-2 items-start'>
                        <Alert variant="destructive" className={error !== '' ? 'block' : 'hidden'}>
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Erreur:</AlertTitle>
                            <AlertDescription>
                                {error}
                            </AlertDescription>
                        </Alert>
                        <AlertDialog>
                            <AlertDialogTrigger disabled={isLoading ? true : false} className='border border-slate-800 text-slate-800 px-4 py-2 rounded-sm hover:bg-slate-800 hover:text-white transition-colors'>
                                {isLoading ? 'veuillez patienter...' : 'Ajouter Catégorie'}
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>En êtes-vous absolument sûr ?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Cette action créera une nouvelle catégorie
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Annuler</AlertDialogCancel>
                                    <AlertDialogAction onClick={handleAlertDialogConfirm}>Continuer</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </CardFooter>
                </form>
            </Card>
        </section >
    )
}


