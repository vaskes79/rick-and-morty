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

export const GET_CHARACTES_BY_FILTER_NAME = gql`
  query Characters($name: String) {
    characters(filter: { name: $name }) {
      results {
        name
        image
        id
      }
    }
  }
`;
