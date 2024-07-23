import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LoginPage() {
    return (
        <div className="grid h-screen w-full grid-cols-1 lg:grid-cols-2 bg-orange-100">
            <div className="relative hidden lg:block">
                <Image src="/images/door.png" alt="admin_panel_image" fill className="object-cover" />
            </div>
            <div className="flex items-center justify-center p-6 sm:p-12">
                <div className="mx-auto w-full max-w-md space-y-6">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold text-orange-400">Bienvenu!</h1>
                        <p className="text-muted-foreground">Entrez vos informations d'identification pour accéder au panneau d'administration.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2 mb-7">
                            <Label htmlFor="email" className="text-base">Email</Label>
                            <Input className="border border-orange-500" id="email" type="email" placeholder="m@example.com" required />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password" className="text-base">mot de passe</Label>
                                <Link href="#" className="text-sm font-medium underline underline-offset-4 text-orange-400 hover:text-black transition-colors" prefetch={false}>
                                    Mot de passe oublié?
                                </Link>
                            </div>
                            <Input className="border border-orange-500" id="password" type="password" placeholder="mot de passe" required />
                        </div>
                        <Button type="submit" className="w-full h-[48px] rounded-none bg-white text-orange-400 border transition-colors border-orange-400 hover:bg-orange-400 hover:text-white">
                            Sign in
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}