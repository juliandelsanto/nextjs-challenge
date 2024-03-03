"use client";
import { useEffect } from "react";
import { getSession } from "@auth0/nextjs-auth0";
import ListOfPokemons from "@/components/organism/ListOfPokemons";

export default function DashboardPage() {
  useEffect(() => {
    async function fetchData() {
      const session = await getSession();
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-bold text-6xl mt-24 mb-8 text-center ">PokeNext</h1>
      <ListOfPokemons />
    </div>
  );
}
