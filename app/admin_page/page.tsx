"use client"
import Admin_page from "@/components/admintwo";
import LoginPage from "@/components/login";
import { RootState } from "@/store/redux";
import { useSelector } from "react-redux";

export interface IAdmin {
    email: string;
    password: string;
}


export default function page() {
    const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
    return (
        <div>
            {
                isAuth ?
                    <Admin_page />
                    :
                    <LoginPage />
            }
        </div>
    );
}