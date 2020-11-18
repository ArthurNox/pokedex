import styled from 'styled-components';

export const Container = styled.header`

  height: 10vh;
  width:100%;

  background-color: #E9342E;
  color:white;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  /* box-shadow: 2px 2px 4px #000; */
  box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);

  display: flex;
  justify-content: center;
  align-items:center;

  h1{
    cursor:pointer;
  }

  a{
    text-decoration:none;
    color: white;
  }

`