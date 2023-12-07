import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);

  function onClickNext() {
    setPage(page + 20);
    console.log("ClickNext", page);
  }
  function onClickPrev() {
    setPage(page - 20);
    console.log("ClickPrev", page);
  }
  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page}`
        );
        const data = await response.json();
        console.log(data);
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]);

  return (
    <main>
      {page > 0 && (
        <button
          type="button"
          onClick={() => {
            onClickPrev();
          }}
        >
          Previous Page
        </button>
      )}
      <button
        type="button"
        onClick={() => {
          onClickNext();
        }}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>Dino {name}</li>
        ))}
      </ul>
    </main>
  );
}
