import { useState, useEffect } from "react";
import Link from "next/link";
import { getPokemonData } from "@/service/getPokemonData";
import Pagination from "@/components/molecules/Pagination";
import Pokemon from "@/types/Pokemon";
import Spinner from "@/components/atoms/Spinner";

const ListOfPokemons = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [loadingTime, setLoadingTime] = useState<number | null>(null); 

  useEffect(() => {
    const fetchData = async () => {
      const startTime = performance.now();
      const pokemonData = await getPokemonData();
      const endTime = performance.now(); 
      setPokemonData(pokemonData);
      setLoadingTime(endTime - startTime); 
    };
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pokemonData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col items-center w-full">
      {loadingTime === null && <Spinner />}
      <ul className="lg:w-[80%]">
        {currentItems.map((poke, index) => (
          <li key={index}>
            <Link
              className="border p-4 border-grey my-2  hover:border-[#00C8D3] transition duration-200 capitalize flex items-center text-lg bg-black rounded-md cursor-pointer"
              href={`/pokemon/${poke.name}`}
              key={poke.name + "Card"}
            >
              <img
                src={poke.image}
                alt={poke.name}
                className="w-20 h-20 mr-3"
              />
              {poke.name}
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={pokemonData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ListOfPokemons;
