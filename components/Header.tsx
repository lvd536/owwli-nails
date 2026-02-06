"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { browserRoutes } from "@/consts/routes";

export default function Header() {
    const handleBurgerClick = () => {
        document.getElementById("burgerMenu")?.classList.toggle("hidden");
        document.getElementById("burgerMenu")?.classList.toggle("flex");
    };
    return (
        <div className="flex w-full px-8 py-2 items-center justify-between bg-foreground/8">
            <p className="text-xl font-bold">Owwli nails</p>
            <nav className="hidden sm:flex gap-6 text-lg font-semibold">
                <Link href={browserRoutes.home.path}>
                    {browserRoutes.home.label}
                </Link>
                <Link href={browserRoutes.works.path}>
                    {browserRoutes.works.label}
                </Link>
                <Link href={browserRoutes.contacts.path}>
                    {browserRoutes.contacts.label}
                </Link>
            </nav>
            <a
                href="http://t.me/oliweeshka"
                className="hidden sm:block py-2 px-4 rounded-full bg-foreground text-background font-semibold"
            >
                Связаться
            </a>
            <Menu className="hidden max-sm:block" onClick={handleBurgerClick} />
            <div
                id="burgerMenu"
                className="hidden fixed top-0 left-0 w-full h-full flex-col items-center justify-center gap-4 font-bold text-xl bg-background/80 z-90"
                onClick={handleBurgerClick}
            >
                <nav className="flex flex-col items-center justify-center gap-6 text-xl font-semibold">
                    <Link href={""}>О себе</Link>
                    <Link href={""}>Работы</Link>
                    <Link href={""}>Контакты</Link>
                </nav>
                <a
                    href="http://t.me/oliweeshka"
                    className="flex justify-center py-2 px-8 rounded-full bg-foreground text-background font-semibold"
                >
                    Связаться
                </a>
            </div>
        </div>
    );
}
