import { useQuery } from "@apollo/client";
import { GET_CHARACTES } from "../../gql";

interface CharacterItem {
  id: number | string;
  name: string;
  image: string;
}

interface GetCharcterRes {
  characters: {
    results: CharacterItem[];
  };
}

export function App() {
  const { loading, error, data } = useQuery<GetCharcterRes>(GET_CHARACTES);

  if (loading) {
    return <h3>loading...</h3>;
  }

  if (error || !data) {
    return <h3>Error</h3>;
  }

  return (
    <>
      <header>
        {data.characters.results.map(({ id, name, image }) => (
          <a href={name} key={id}>
            <img src={image} alt={name} />
            <button data-id={id}>x</button>
          </a>
        ))}
      </header>
      <main>main</main>
      <footer>main</footer>
    </>
  );
}
