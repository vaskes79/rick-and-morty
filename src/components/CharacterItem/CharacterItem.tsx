import { FC } from "react";
import { Container } from "./CharacterItemStyles";

export interface ICharacterItem {
  id: number | string;
  name: string;
  image: string;
}

export const CharacterItem: FC<ICharacterItem> = ({ id, name, image }) => {
  return (
    <Container href={name}>
      <img className="img" src={image} alt={name} />
      <button className="btn" data-id={id}></button>
    </Container>
  );
};
