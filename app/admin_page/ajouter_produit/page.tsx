"use client";
import { FormEvent, useEffect, useReducer, useRef, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { RootState } from "@/store/redux";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '@/store/authReducer';
import { Categorie, Produits } from '@/types/Produit';
import { AlertCircle, X } from 'lucide-react';

export default function AjouterProduit() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
  const router = useRouter();
  const dispatch = useDispatch();

  if (!isAuth) {
    dispatch(logout());
    router.push('/admin_page');
  }

  const api_token = useSelector((state: RootState) => state.auth.token);

  const formRef = useRef<HTMLFormElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [imageName, setImageName] = useState<string | null>(null);
  const [listCategories, setListCategories] = useState<Categorie[]>([]);
  const [nomProd, setNomProd] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [prixProduit, setPrixProduit] = useState<number>(0.00);
  const [categorie, setCategorie] = useState<Number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [notification, setNotification] = useState('');

  useEffect(() => {
    setError('');
    setNotification('');
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

    fetchCategories();
  }, []);

  const handleAlertDialogConfirm = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSelectChange = (value: string) => {
    setCategorie(Number(value));
  };

  const UploadImage = async () => {
    setError('');
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await fetch('http://localhost:8000/api/upload-image', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${api_token}`,
            'Accept': 'application/json',
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Upload failed');
        }
        const data = await response.json();
        setImageName(data.imageName);
        console.log('image uloaded:' , imageName);

      } catch (error) {
        console.error('Error uploading image:', error);
        setError("Erreur lors de l'envoi de l'image:");
      }
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setNotification('');
    setIsLoading(true);

    if (nomProd && description && prixProduit > 0 && imageName && categorie !== 0) {
      try {
        const response = await fetch('http://localhost:8000/api/produits', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${api_token}`
          },
          body: JSON.stringify({
            'nom_produit': nomProd,
            'image_produits': imageName,
            'description': description,
            'prix': prixProduit,
            'categorie': categorie
          })
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Product added successfully:', result);
          setNotification('Produit ajouté avec succès !');

          setIsLoading(false);
          setNomProd('');
          setDescription('');
          setPrixProduit(0);
          setCategorie(0);
          setImageName(null);

        } else {
          const errorResult = await response.json();
          console.error('Error adding product:', errorResult);
          setError("Une erreur s'est produite lors de la connexion.");
        }
      } catch (error) {
        setIsLoading(false);
        console.error('Network error:', error);
        setError("Une erreur est survenue lors de l'ajout du produit.");
      }
    } else {
      setIsLoading(false);
      setError('Veuillez remplir tous les champs.');
    }
  };

  return (
    <section className='flex flex-col items-center justify-center mb-7 bg-slate-100 min-h-screen'>
      {notification && (
        <Alert variant={'default'} className='w-[500px] border-green-800 text-green-800 mt-4'>
          <X onClick={() => setNotification('')} className="h-5 w-5 text-green-800 cursor-pointer" />
          <AlertTitle>Succès!</AlertTitle>
          <AlertDescription>
            {notification}
          </AlertDescription>
        </Alert>
      )}
      <Card className='mt-4 shadow w-[775px]'>
        <CardHeader>
          <CardTitle>Ajouter Produit</CardTitle>
          <CardDescription>Mettez à jour les détails de votre produit.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} ref={formRef} className="grid gap-6">
          <CardContent>
            <div className="grid gap-2 mb-4">
              <Label htmlFor="image">Image du produit</Label>
              <div className="flex items-center justify-between gap-2">
                <Input id="image" type="file" onChange={handleFileChange} />
                <div onClick={UploadImage} className="text-sm w-[250px] border border-slate-700 text-slate-700 rounded-sm px-4 py-3 text-center hover:bg-slate-700 hover:text-white transition-colors cursor-pointer">Télécharger Image</div>
              </div>
            </div>
            <div className="grid gap-2 mb-4">
              <Label htmlFor="title">Titre du produit</Label>
              <Input value={nomProd} onChange={(e) => setNomProd(e.target.value)} id="title" placeholder="Entrez le titre du produit" />
            </div>
            <div className="grid gap-2 mb-4">
              <Label htmlFor="description">Description du produit</Label>
              <Textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description" placeholder="Entrez la description du produit" className="min-h-[120px]" />
            </div>
            <div className="grid gap-2 mb-4">
              <Label htmlFor="price">Prix du produit</Label>
              <Input value={prixProduit} onChange={(e) => setPrixProduit(Number(e.target.value))} min={1} id="price" type="number" placeholder="Entrez le prix du produit" />
            </div>
            <Select value={categorie.toString()} onValueChange={handleSelectChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Categorie de produit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem key={0} value="0">Categorie de produit</SelectItem>
                {listCategories?.map((categorie) => (
                  <SelectItem key={categorie.id} value={categorie.id.toString()}>{categorie.nom_categorie}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
          <CardFooter className='flex flex-col gap-2 items-start'>
            <Alert variant="destructive" className={error ? 'block' : 'hidden'}>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Erreur:</AlertTitle>
              <AlertDescription>
                {error}
              </AlertDescription>
            </Alert>
            <AlertDialog>
              <AlertDialogTrigger disabled={isLoading} className='border border-slate-800 text-slate-800 px-4 py-2 rounded-sm hover:bg-slate-800 hover:text-white transition-colors'>
                {isLoading ? 'Veuillez patienter...' : 'Ajouter Produit'}
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>En êtes-vous absolument sûr ?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Cette action créera un nouveau produit.
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
    </section>
  );
}
