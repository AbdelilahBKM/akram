"use client"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { logout } from "@/store/authReducer";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";

export default function Admin_Header() {
    const route = useRouter();
    const dispatch = useDispatch();
    const api_token = useSelector((state: RootState) => state.auth.token);
    console.log(api_token)
    function handleLogout(): void {
        dispatch(logout());
        route.refresh();
    }

    return (
        <header className={"h-[125px] py-5 items-center gap-4 border-b bg-background sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 " + (api_token === '' ? ' hidden' : ' flex')}>
            <Link href={"/admin_page"} className="flex-1">
                <h1 className="text-lg font-semibold">Page d&apos;administration</h1>
            </Link>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                        AK
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>paramètres</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>Se déconnecter</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}