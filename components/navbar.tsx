import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
    return (
        <header>
            <nav className="mx-auto max-w-4xl w-full flex items-center justify-between py-3 px-6">
                <Link
                    href={"/"}
                    className=" flex items-center gap-2 bg-gradient-to-r from-blue-500 via-teal-500 to-sky-500 bg-clip-text text-transparent text-lg font-semibold"
                >
                    NHTT
                </Link>
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href={"https://github.com/Kei-K23/nhtt-stack"}

                        className={cn(buttonVariants({
                            variant: "outline"
                        }), "rounded-xl flex items-center gap-x-2 font-bold")}
                    >
                        <Github /> Github
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;