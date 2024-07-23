import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { login } from "@/store/authReducer";
import { useRouter } from "next/navigation";
import type { RootState } from "@/store/rootReducer";
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { AlertCircle } from "lucide-react";
export default function LoginPage() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            const response = await fetch("http://127.0.0.1:8000/api/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                const data = await response.json();
                const token = data.token;
                console.log(token);
                dispatch(login(token));
                setIsLoading(false);

            } else {
                const data = await response.json();
                setError("Non autorisé");
                setIsLoading(false);
            }
        } catch (error) {
            console.error("An error occurred during login:", error);
            setError("Une erreur s'est produite lors de la connexion. ");
            setIsLoading(false);
        }
    };

    return (
        <div className="grid h-screen w-full grid-cols-1 lg:grid-cols-2 bg-orange-100">
            <div className="relative hidden lg:block">
                <Image src="/images/door.png" alt="admin_panel_image" fill className="object-cover" />
            </div>
            <form onSubmit={handleLogin} className="flex items-center justify-center p-6 sm:p-12">
                <div className="mx-auto w-full max-w-md space-y-6">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold text-orange-400">Bienvenu!</h1>
                        <p className="text-muted-foreground">Entrez vos informations d'identification pour accéder au panneau d'administration.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2 mb-7">
                            <Label htmlFor="email" className="text-base">Email</Label>
                            <Input value={email} onChange={(e) => setEmail(e.target.value)} className="border border-orange-500" id="email" type="email" placeholder="m@example.com" required />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password" className="text-base">mot de passe</Label>
                                <Link href="#" className="text-sm font-medium underline underline-offset-4 text-orange-400 hover:text-black transition-colors" prefetch={false}>
                                    Mot de passe oublié?
                                </Link>
                            </div>
                            <Input value={password} onChange={(e) => setPassword(e.target.value)} className="border border-orange-500" id="password" type="password" placeholder="mot de passe" required />
                        </div>
                        {
                            error !== '' &&
                            <Alert variant="destructive">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Erreur:</AlertTitle>
                                <AlertDescription>
                                    {error}
                                </AlertDescription>
                            </Alert>
                        }
                        <Button disabled={isLoading ? true : false} type="submit" className="w-full h-[48px] rounded-none bg-white text-orange-400 border transition-colors border-orange-400 hover:bg-orange-400 hover:text-white">
                            {
                                isLoading ? 'veuillez patienter ...' : 'Sign in'
                            }
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}