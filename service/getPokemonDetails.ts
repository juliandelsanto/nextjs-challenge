export async function getPokemonDetails(name: string) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
      throw new Error("Failed to fetch Pokemon details");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Pokemon details:", error);
    throw error;
  }
}
