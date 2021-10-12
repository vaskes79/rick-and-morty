import { FC } from "react";
import { useAppState } from "../App";
import { Container } from "./PatyRoomStyles";

import { Member } from "./Member";

export const PatyRoom: FC = () => {
  const { rick, morty } = useAppState();

  return (
    <Container>
      <h2>Party</h2>
      <div className="member-wrap">
        <Member {...rick} defaultName="Rick" />
        <Member {...morty} defaultName="Morty" />
      </div>
    </Container>
  );
};
