import styled from "styled-components/macro";

export const Container = styled.section`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  max-width: 810px;
  min-height: 100vh;

  header {
    padding-top: 141px;
    width: 100%;
  }

  main {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    justify-content: center;
  }
`;
