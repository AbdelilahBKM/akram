"use client"
import Admin_page from "@/components/admintwo";
import LoginPage from "@/components/login";
import { useState, useEffect } from "react";

export interface IAdmin {
    email: string;
    password: string;
}

const admin: IAdmin = {
    email: 'akram@admin.ma',
    password: 'admin2024'
}

export default function page() {
    const [isAuth, setAuth] = useState(true);
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