"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import { AlertCircle, X } from "lucide-react";
import { DOMAIN_NAME } from "@/utils/app_variables";

export default function ContactForm() {
  const [nom, setNom] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [erreur, setErreur] = useState<string>("");
  const [notification, setNotification] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmition = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setErreur("");
    setNotification("");
  
    if (nom && email && message) {
      try {
        const response = await fetch(`${DOMAIN_NAME}/api/contact`, {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nom_client: nom,        
            email_client: email,
            message_client: message,
          }),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.errors[0] || "Error while sending contact info");
        }
  
        setNotification(
          "Merci de nous avoir contactés, nous vous répondrons dans les plus brefs délais."
        );
        setNom("");
        setEmail("");
        setMessage("");
      } catch (error: any) {
        console.error("Erreur:", error);
        setErreur(
          "Une erreur est survenue lors de l'enregistrement de vos informations de contact, veuillez réessayer plus tard."
        );
      } finally {
        setIsLoading(false);
      }
    } else {
      setErreur("Tous les champs sont obligatoires");
      setIsLoading(false);
    }
  };
  

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="bg-orange-200 px-4 py-6 md:px-6 md:py-8">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-orange-500">
            <h1 className="uppercase text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contactez-nous
            </h1>
            <p className="max-w-[700px] text-lg md:text-xl">
              Vous avez une question ou vous souhaitez collaborer avec nous ?
              Remplissez le formulaire ci-dessous et nous vous répondrons dès
              que possible.
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section id="contact" className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-3xl px-4 md:px-6 text-slate-800">
            <Card>
              {notification && (
                <Alert
                  variant="default"
                  className="border-green-800 text-green-800 mt-4 w-fit mx-4"
                >
                  <X
                    onClick={() => setNotification("")}
                    className="h-5 w-5 text-green-500 cursor-pointer"
                  />
                  <AlertTitle>Succès!</AlertTitle>
                  <AlertDescription>{notification}</AlertDescription>
                </Alert>
              )}
              <CardHeader>
                <CardTitle>Contactez-nous</CardTitle>
                <CardDescription>
                  Remplissez le formulaire ci-dessous et nous vous répondrons
                  dès que possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmition} className="grid gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Nom et prénom</Label>
                      <Input
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        id="name"
                        type="text"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      id="message"
                      placeholder="Votre message"
                      className="min-h-[150px]"
                    />
                  </div>
                  {erreur && (
                    <Alert
                      variant="destructive"
                      className="block"
                    >
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Erreur:</AlertTitle>
                      <AlertDescription>{erreur}</AlertDescription>
                    </Alert>
                  )}
                  <Button
                    disabled={isLoading}
                    className="uppercase w-[245px] h-[48px] rounded-none bg-white text-orange-400 border transition-colors border-orange-400 hover:bg-orange-400 hover:text-white"
                    type="submit"
                  >
                    {isLoading ? "Veuillez patienter" : "Envoyer"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
