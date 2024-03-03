import { getPokemonDetails } from "@/service/getPokemonDetails";
import Image from "next/image";
import Spinner from "@/components/atoms/Spinner";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;
  const pokemonObject = await getPokemonDetails(pokemonName);

  return (
    <div className="mt-20">
      {!pokemonObject ? (
        <Spinner />
      ) : (
        <>
          <h1 className="text-4xl text-bold pt-4 text-center capitalize">
            {pokemonName}
          </h1>
          <div className="flex flex-col md:flex-row md:items-center md:justify-center">
            <div className="m-4 lg:w-1/2 lg:flex lg:justify-end">
              <Image
                src={
                  pokemonObject.sprites.other["official-artwork"].front_default
                }
                height={400}
                width={400}
                alt="pokemon image"
              />
            </div>
            <div className="m-4 md:w-1/2">
              <h3 className="p-3">Weight: {pokemonObject.weight}</h3>
              <div className="flex flex-col">
                {pokemonObject.stats.map((statObject: any) => {
                  const statName = statObject.stat.name;
                  const statValue = statObject.base_stat;
                  return (
                    <div className="flex items-stretch" key={statName}>
                      <h3 className=" p-3 w-full capitalize">
                        {statName}: {statValue}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
