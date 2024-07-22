"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Clipboard, Github } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FEATURES = [
  {
    title: "E2E type-safe",
    description:
      "By combining NextJS with HonoJS, we can get beautiful end-to-end type-safe between front-end and back-end that cann't get in standlone NextJS app.",
    className: "text-emerald-500",
  },
  {
    title: "Scalability",
    description:
      "Unlike traditional route handler in NextJS, HonoJS bring a lot of flexibility and power for build back-end for NextJS such as easy to use middlewares, code organization and much more.",
    className: "text-blue-500",
  },
  {
    title: "Better data fetching and state management",
    description:
      "Along with NextJS, HonoJS, Tanstack Query is use in this tech stack to overcome the complexicity of data fetching and managing the state.",
    className: "text-sky-500",
  },
];

const TECH_STACK = [
  {
    name: "NextJS",
    description:
      "Next.js is a popular open-source React framework created by Vercel. It enables developers to build web applications with server-side rendering, static site generation, and client-side rendering, providing a versatile and powerful toolset for modern web development.",
  },
  {
    name: "TypeScript",
    description:
      "TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, meaning that any valid JavaScript code is also valid TypeScript code. TypeScript adds static type definitions to JavaScript, which can improve code quality and developer productivity by catching errors early in the development process.",
  },
  {
    name: "HonoJS",
    description:
      "Hono - means flame🔥 in Japanese - is a small, simple, and ultrafast web framework built on Web Standards. It works on any JavaScript runtime: Cloudflare Workers, Fastly Compute, Deno, Bun, Vercel, Netlify, AWS Lambda, Lambda@Edge, and Node.js.",
  },
  {
    name: "Drizzle ORM",
    description:
      "Drizzle ORM is a modern, TypeScript-first Object-Relational Mapper (ORM) designed to simplify database interactions for developers. It offers a range of features that make it a popular choice for TypeScript and JavaScript applications.",
  },
  {
    name: "Tailwind CSS",
    description:
      "Tailwind CSS is a highly customizable, utility-first CSS framework that allows developers to rapidly build modern, responsive user interfaces. Unlike traditional CSS frameworks that come with predefined components and styles, Tailwind provides a set of low-level utility classes that let developers compose custom designs directly in their markup.",
  },
  {
    name: "Clerk",
    description:
      "Need more than just a sign-in box? Clerk is a complete suite of embeddable UIs, flexible APIs, and admin dashboards to authenticate and manage your users.",
  },
];

export default function Home() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard
        .writeText(inputRef.current?.value)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((err) => {
          console.error("Error copying text: ", err);
        });
    }
  };

  return (
    <main>
      <section className="mt-20 flex justify-center items-center px-4">
        <h1 className="max-w-[700px] text-center text-3xl md:text-4xl lg:text-5xl font-bold">
          Create a <span className="text-blue-500">full-stack</span>, end-to-end{" "}
          <span className="text-emerald-500">type-safe</span>,{" "}
          <span className="text-sky-500">NextJS</span> web application with
          power by <span className="text-orange-500">HonoJS</span>
        </h1>
      </section>
      <section className="mt-8 flex justify-center items-center flex-col gap-2 px-4">
        <Link
          href={"https://github.com/Kei-K23/nh-stack"}
          target="_blank"
          className={cn(
            buttonVariants({
              variant: "outline",
            }),
            "rounded-xl flex items-center gap-x-2 w-[130px]"
          )}
        >
          <Github /> Github
        </Link>
        <div className="rounded-lg w-[350px] md:w-[370px] border flex items-center gap-1">
          <Input
            ref={inputRef}
            readOnly
            value={"git clone https://github.com/Kei-K23/nh-stack"}
            className="border-none w-full focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button size={"sm"} variant={"ghost"} onClick={handleCopy}>
            <Clipboard className="size-5" />
          </Button>
        </div>
      </section>
      <section className="mt-8 flex justify-center items-center flex-col gap-2 px-4">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
          Why this full-stack web development tech stack? 🤔
        </h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8 px-8 w-full md:w-[700px] lg:w-[1000px] xl:w-[1250px]">
          {FEATURES.map((f) => (
            <Card key={f.title}>
              <CardHeader>
                <CardTitle className={cn(f.className)}>{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="mt-8 flex justify-center items-center flex-col gap-2 px-4">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
          Tech stack to create this E2E type-safe NextJS application
        </h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8 px-8 w-full md:w-[700px] lg:w-[1000px] xl:w-[1250px]">
          {TECH_STACK.map((f) => (
            <Card key={f.name}>
              <CardHeader>
                <CardTitle>{f.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <footer className="my-4 text-center">
        <p>Create with 💙 by Kei-K</p>
      </footer>
    </main>
  );
}
