import { ListCharacters } from "../ListCharacters";
import { Search } from "../Search";
import { Container, Member } from "./AppStyles";

export function App() {
  return (
    <Container>
      <header>
        <Search />
      </header>
      <main>
        <ListCharacters />
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
