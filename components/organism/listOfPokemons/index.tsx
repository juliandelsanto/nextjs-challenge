import { useState, useEffect } from "react";
import { getPokemonData } from "@/service/getPokemonData";
import Pagination from "@/components/molecules/Pagination";
import Pokemon from "@/types/Pokemon";

const ListOfPokemons = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await getPokemonData();
      setPokemonData(pokemonData);
    };
    fetchData();
  }, []);

  // Paginar los resultados
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pokemonData.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar de página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-4xl mb-8 text-center ">The Nextjs Pokedex</h1>
      <ul className="lg:w-[80%]">
        {currentItems.map((poke, index) => (
          <li key={index}>
            <a className="border p-4 border-grey my-2 hover:shadow-md capitalize flex items-center text-lg bg-black rounded-md ">
              <img
                src={poke.image}
                alt={poke.name}
                className="w-20 h-20 mr-3"
              />
              <span className="mr-2 font-bold">{index + 1}.</span>
              {poke.name}
            </a>
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
