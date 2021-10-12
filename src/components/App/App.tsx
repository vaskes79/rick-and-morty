import { useQuery } from "@apollo/client";
import { GET_CHARACTES } from "../../gql";
import { CharacterItem, ICharacterItem } from "../CharacterItem";
import { Container } from "./AppStyles";

interface GetCharcterRes {
  characters: {
    results: ICharacterItem[];
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
    <Container>
      <header>search</header>
      <main>
        {data.characters.results.map((item) => (
          <CharacterItem key={item.id} {...item} />
        ))}
      </main>
      <footer>main</footer>
    </Container>
  );
}
