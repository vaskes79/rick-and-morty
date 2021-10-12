import { useQuery } from "@apollo/client";
import { GET_CHARACTES } from "../../gql";
import { CharacterItem, ICharacterItem } from "../CharacterItem";
import { Search } from "../Search";
import { Container, Member } from "./AppStyles";

export interface GetCharcterRes {
  characters: {
    results: ICharacterItem[];
  };
}

export function App() {
  const { loading, error, data } = useQuery<GetCharcterRes>(GET_CHARACTES);

  if (loading) {
    return (
      <Container>
        <h2>loading...</h2>
      </Container>
    );
  }

  if (error || !data) {
    return (
      <Container>
        <h2>error...</h2>
      </Container>
    );
  }

  return (
    <Container>
      <header>
        <Search />
      </header>
      <main>
        {data.characters.results.map((item) => (
          <CharacterItem key={item.id} {...item} />
        ))}
      </main>
      <footer>
        <h2>Party</h2>
        <div className="member-wrap">
          <Member>
            <span className="name">Rick</span>
          </Member>
          <Member>
            <span className="name">Morty</span>
          </Member>
        </div>
      </footer>
    </Container>
  );
}
