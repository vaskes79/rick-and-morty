import { ListCharacters } from "../ListCharacters";
import { PatyRoom } from "../PatyRoom";
import { Search } from "../Search";
import { Container } from "./AppStyles";

export function App() {
  return (
    <Container data-testid="App">
      <header>
        <Search />
      </header>
      <main>
        <ListCharacters />
      </main>
      <footer>
        <PatyRoom />
      </footer>
    </Container>
  );
}
