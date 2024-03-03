import Image from "next/image";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import CustomLink from "@/components/atoms/CustomLink";

export default async function Home() {
  const session = await getSession();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col items-center px-24 py-10">
      <div className="mt-20 relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[200px] md:after:w-full sm:after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="font-bold text-6xl mb-9">PokeNext</h1>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/Pages/Home/pokeIcon.svg"
          alt="poke logo"
          width={180}
          height={37}
          priority
        />
      </div>
      
      <div className="mb-32 text-center w-[240px] lg:mb-0 mt-9">
        <CustomLink
          href="api/auth/login" 
          textSize="text-2xl" 
          title="Login or register"
        />
      </div>
    </main>
  );
}
