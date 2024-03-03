import Image from "next/image";
import { getSession } from "@auth0/nextjs-auth0";
import CustomLink from "@/components/atoms/CustomLink";

export default async function Header() {
    const session = await getSession();

  return (
    <div className=" fixed top-0  w-full  bg-zinc-900 ">
      <nav className= "flex justify-items-center justify-between  h-20  ml-10 ">
        <Image
          width={50}
          height={50}
          src="/Pages/Home/pokeIcon.svg"
          alt="logo"
          className="dark:invert"
        />
        <ul className="mr-10">
            {!!session?.user && (
                <div>
                    <CustomLink 
                        href="/api/auth/logout" 
                        textSize="text-xl" 
                        title="Logout"
                    />
                  
                </div>
            )}
        </ul>
      </nav>
    </div>
  );
}
