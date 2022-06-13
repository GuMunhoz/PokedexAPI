import styled from "styled-components";

export const Container = styled.div`
  h1 {
    text-align: center;
  }

  main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
    align-items: center;
    justify-items: center;
    margin-top: 4em;
    text-transform: capitalize;

    div {
      background-color: #efefef;
      height: 4em;
      width: 70%;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      &:hover {
        background-color: black;
        color: #fff;
      }
    }
  }
`;
