import { CharacterItem } from "../CharacterItem";
import { useAppState } from "../App";

export function ListCharacters() {
  const { loading, characters, error } = useAppState();

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }

  if (characters.length < 1) {
    return <h2>Chracters not found</h2>;
  }

  return (
    <>
      {characters.map((item) => (
        <CharacterItem key={item.id} {...item} />
      ))}
    </>
  );
}
