"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { browserRoutes } from "@/consts/routes";
import { usePathname } from "next/navigation";

export default function Header() {
    const path = usePathname();

    const handleBurgerClick = () => {
        document.getElementById("burgerMenu")?.classList.toggle("hidden");
        document.getElementById("burgerMenu")?.classList.toggle("flex");
    };

    return (
        <div className="flex w-full px-8 py-2 items-center justify-between bg-foreground/8">
            <Link href={browserRoutes.home.path} className="text-xl font-bold">
                Owwli nails
            </Link>
            <nav className="hidden sm:flex gap-6 text-lg font-semibold">
                <Link
                    href={browserRoutes.home.path}
                    className={`${path === browserRoutes.home.path && "text-indigo-500"} transition-text duration-300`}
                >
                    {browserRoutes.home.label}
                </Link>
                <Link
                    href={browserRoutes.works.path}
                    className={`${path === browserRoutes.works.path && "text-indigo-500"} transition-text duration-300`}
                >
                    {browserRoutes.works.label}
                </Link>
                <Link
                    href={browserRoutes.contacts.path}
                    className={`${path === browserRoutes.contacts.path && "text-indigo-500"} transition-text duration-300`}
                >
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
                    <Link
                        href={browserRoutes.home.path}
                        className={`${path === browserRoutes.home.path && "text-indigo-500"} transition-text duration-300`}
                    >
                        О себе
                    </Link>
                    <Link
                        href={browserRoutes.works.path}
                        className={`${path === browserRoutes.works.path && "text-indigo-500"} transition-text duration-300`}
                    >
                        Работы
                    </Link>
                    <Link
                        href={browserRoutes.contacts.path}
                        className={`${path === browserRoutes.contacts.path && "text-indigo-500"} transition-text duration-300`}
                    >
                        Контакты
                    </Link>
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
