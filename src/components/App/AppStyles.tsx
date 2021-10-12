import styled from "styled-components/macro";

export const Container = styled.section`
  padding: 142px 0;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  max-width: 810px;
  min-height: 100vh;

  header {
    width: 100%;
  }

  main {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    justify-content: center;
    padding-bottom: 100px;
  }

  footer {
    h2 {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 30px;
      line-height: 35px;
      text-align: center;
    }
    .member-wrap {
      display: flex;
      gap: 30px;
    }
  }
`;

export const Member = styled.div`
  position: relative;
  width: 180px;
  height: 220px;
  background: #dadada;

  .name {
    display: inline-block;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: 14px;
  }
`;
