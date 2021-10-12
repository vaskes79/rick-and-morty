import styled from "styled-components/macro";

export const SearchInput = styled.input`
  border: 1px solid #a0a0a0;
  padding: 22px 27px 25px;
  width: 100%;
  transition: border-color 0.3s ease;
  appearance: none;
  font-family: inherit;
  font-size: 30px;
  line-height: 35.16px;
  font-weight: 300;
  text-transform: uppercase;
  color: #000;

  :focus,
  :active,
  :hover {
    outline: none;
    border: 1px solid blue;
  }
`;
