"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { JSX, SVGProps, useEffect, useState } from "react";
import { RootState } from "@/store/redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Messages } from "@/types/Messages";
import { ChevronUp } from "lucide-react";
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
import { Input } from "@/components/ui/input";

export default function Liste_des_messages() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
  const api_token = useSelector((state: RootState) => state.auth.token);
  const [listMessage, setListMessages] = useState<Messages[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortAsc, setSortAsc] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (!isAuth || api_token === "") {
      router.push("/admin_page");
    }

    const getAllMessage = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/contact/", {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${api_token}`,
          },
        });
        if (!response.ok) {
          throw new Error("une erreur s'est produite lors de la récupération des données de contact");
        }
        const data: Messages[] = await response.json();
        setListMessages(data);
      } catch (error) {
        console.error(error);
      }
    };

    getAllMessage();
  }, [isAuth, api_token, router]);

  const filteredMessages = listMessage.filter((message) =>
    message.nom_client.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.email_client.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.message_client.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedMessages = [...filteredMessages].sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();
    return sortAsc ? dateA - dateB : dateB - dateA;
  });

  return (
    <section className="flex items-center justify-center bg-slate-100">
      <Card className="w-full mx-7 my-12">
        <CardHeader>
          <CardTitle>Messages des utilisateurs</CardTitle>
          <CardDescription>Gérez les messages de vos utilisateurs.</CardDescription>
        </CardHeader>
        <div className="w-1/2 mt-4 bg-slate-50 flex flex-col items-start gap-4 mx-5 my-2">
          <h1 className="text-slate-700">Rechercher un Message Spécifique:</h1>
          <Input
            type="search"
            placeholder="recherchez"
            className="w-[453px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Message</TableHead>
                <TableHead
                  className="flex gap-2 items-center cursor-pointer"
                  onClick={() => setSortAsc((prev) => !prev)}
                >
                  Date
                  <ChevronUp className={`transition-transform ${sortAsc ? "rotate-180" : ""}`} />
                </TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedMessages.map((message, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{message.nom_client}</TableCell>
                  <TableCell>{message.email_client}</TableCell>
                  <TableCell>{message.message_client}</TableCell>
                  <TableCell>{new Date(message.created_at).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <AlertDialog>
                      <AlertDialogTrigger className="w-[125px] h-9 border rounded-sm border-red-400 text-red-400 hover:bg-red-400 hover:text-white transition-colors">
                        Supprimer
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Êtes-vous absolument sûr ?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Cette action ne peut pas être annulée. Cela supprime définitivement le message.
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
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
}

function FilePenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function MoveHorizontalIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function TrashIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
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
  );
}
