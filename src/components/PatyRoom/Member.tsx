import { FC } from "react";
import { Member as Container } from "./PatyRoomStyles";

interface Props {
  defaultName: string;
  name?: string;
  image?: string;
}

export const Member: FC<Props> = ({ image, name, defaultName }) => {
  return (
    <Container>
      {image && name ? (
        <img className="img" src={image} alt={name} />
      ) : (
        <span className="name">{defaultName}</span>
      )}
    </Container>
  );
};
