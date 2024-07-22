import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react"
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1>Create a full-stack, end-to-end type-safe, NextJS web application with <span>NHTT-Stack</span></h1>
            <Link
                href={"https://github.com/Kei-K23/nhtt-stack"}

                className={cn(buttonVariants({
                    variant: "outline"
                }), "rounded-xl flex items-center gap-x-2 w-[130px]")}
            >
                <Github /> Github
            </Link>
        </main>
    );
}
