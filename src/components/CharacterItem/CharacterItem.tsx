import { FC } from "react";
import { Character } from "../App/types";
import { Container } from "./CharacterItemStyles";

export const CharacterItem: FC<Character> = ({ id, name, image }) => {
  return (
    <Container href={name}>
      <img className="img" src={image} alt={name} />
      <button className="btn" data-id={id}></button>
    </Container>
  );
};
