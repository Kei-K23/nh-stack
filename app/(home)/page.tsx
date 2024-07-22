"use client"

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Clipboard, Github } from "lucide-react"
import Link from "next/link";
import { useRef } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const FEATURES = [
    {
        title: "E2E type-safe",
        description: "By combining NextJS with HonoJS, we can get beautiful end-to-end type-safe between front-end and back-end that cann't get in standlone NextJS app.",
        className: "text-emerald-500"
    },
    {
        title: "Scalability",
        description: "Unlike traditional route handler in NextJS, HonoJS bring a lot of flexibility and power for build back-end for NextJS such as easy to use middlewares, code organization and much more.",
        className: "text-blue-500"
    },
    {
        title: "Better data fetching and state management",
        description: "Along with NextJS, HonoJS, Tanstack Query is use in this tech stack to overcome the complexicity of data fetching and managing the state.",
        className: "text-sky-500"
    }
]

export default function Home() {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleCopy = () => {
        if (inputRef.current) {
            navigator.clipboard.writeText(inputRef.current?.value)
                .then(() => {
                    console.log('Text copied to clipboard');
                })
                .catch(err => {
                    console.error('Error copying text: ', err);
                });
        }
    };

    return (
        <main>
            <section className="mt-20 flex justify-center items-center px-4">
                <h1 className="max-w-[700px] text-center text-3xl md:text-4xl lg:text-5xl font-bold">Create a <span className="text-blue-500">full-stack</span>, end-to-end <span className="text-emerald-500">type-safe</span>, <span className="text-sky-500">NextJS</span> web application with power by <span className="text-orange-500">HonoJS</span></h1>
            </section>
            <section className="mt-8 flex justify-center items-center flex-col gap-2 px-4">
                <Link
                    href={"https://github.com/Kei-K23/nh-stack"}
                    target="_blank"
                    className={cn(buttonVariants({
                        variant: "outline"
                    }), "rounded-xl flex items-center gap-x-2 w-[130px]")}
                >
                    <Github /> Github
                </Link>
                <div className="rounded-lg w-[350px] md:w-[370px] border flex items-center gap-1">
                    <Input ref={inputRef} readOnly value={"git clone https://github.com/Kei-K23/nh-stack"} className="border-none w-full focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" />
                    <Button size={"sm"} variant={"ghost"} onClick={handleCopy}>
                        <Clipboard className="size-5" />
                    </Button>
                </div>
            </section>
            <section className="mt-8 flex justify-center items-center flex-col gap-2 px-4">
                <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">Why this full-stack web development tech stack? 🤔</h2>
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8 px-8 w-full md:w-[700px] lg:w-[1000px] xl:w-[1250px]">
                    {
                        FEATURES.map(f => (
                            <Card key={f.title}>
                                <CardHeader>
                                    <CardTitle className={cn(f.className)}>{f.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        {f.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </section>
        </main>
    );
}
