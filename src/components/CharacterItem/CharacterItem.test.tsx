import { render, screen } from "@testing-library/react";
import { AppStateProvider } from "../App";
import { CharacterItem } from "./CharacterItem";

test("render CharacterItem with props", () => {
  const props = {
    name: "Rick",
    id: "1",
    image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
  };

  render(
    <AppStateProvider>
      <CharacterItem {...props} />
    </AppStateProvider>
  );
  const characterItemComp = screen.getByTestId("CharacterItem");
  expect(characterItemComp).toBeInTheDocument();
});
