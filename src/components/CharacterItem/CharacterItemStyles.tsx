import styled from "styled-components/macro";

export const Container = styled.a`
  position: relative;
  display: inline-block;
  width: 180px;
  height: 220px;
  background: #dadada;

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .btn {
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    border: 1px solid transparent;
    cursor: pointer;

    ::before,
    ::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(0);
      z-index: 1000;
      display: inline-block;
      width: 2px;
      background: red;
      height: 10px;
    }

    ::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    ::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
`;
