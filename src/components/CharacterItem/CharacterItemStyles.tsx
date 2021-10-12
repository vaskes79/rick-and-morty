import styled from "styled-components/macro";

export const Container = styled.a`
  position: relative;
  display: inline-block;
  border: 2px solid transparent;
  width: 180px;
  height: 220px;
  background: #dadada;
  appearance: none;
  transition: border-color 0.3s ease;
  overflow: hidden;

  :focus,
  :hover,
  :active {
    outline: none;
    border: 2px solid blue;

    .img {
      transform: scale(1.05);
    }
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .btn {
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    background: rgba(255, 255, 255, 0.75);
    border: 2px solid transparent;
    transition: border-color 0.3s ease;
    cursor: pointer;

    :focus,
    :hover,
    :active {
      outline: none;
      border: 2px solid blue;
    }

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
      background: #000;
      height: 14px;
    }

    ::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    ::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
`;
