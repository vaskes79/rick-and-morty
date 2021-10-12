import styled from "styled-components/macro";

export const Container = styled.section`
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
`;

export const Member = styled.div`
  position: relative;
  width: 180px;
  height: 220px;
  background: #dadada;

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

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
