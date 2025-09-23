"use client";

import { Card, CardTitle, CardHeader } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <section className=" w-screen h-screen flex justify-center items-center bg-[#ECECEC]">
        <article>
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={() => setTheme("light")}
          >
            light
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={() => setTheme("dark")}
          >
            dark
          </button>
        </article>
      </section>
    </>
  );
}
