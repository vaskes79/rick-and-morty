import { MouseEvent, FC } from "react";
import { useAppDispatch } from "../App";
import { Character, TypeAppAction } from "../App/types";
import { Container } from "./CharacterItemStyles";

export const CharacterItem: FC<Character> = ({ id, name, image }) => {
  const dispatch = useAppDispatch();

  const deleteHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();

    dispatch({ type: TypeAppAction.deleteCharacter, id });
  };

  const addMemberHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    e.preventDefault();

    dispatch({
      type: TypeAppAction.addMember,
      character: { id, name, image },
    });
  };

  return (
    <Container
      data-testid="CharacterItem"
      onClick={addMemberHandler}
      href={name}
    >
      <img className="img" src={image} alt={name} />
      <button className="btn" onClick={deleteHandler}></button>
    </Container>
  );
};
