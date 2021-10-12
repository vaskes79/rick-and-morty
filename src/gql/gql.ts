import { gql } from "@apollo/client";

export const GET_CHARACTES = gql`
  query Characters {
    characters {
      results {
        name
        id
        image
      }
    }
  }
`;
