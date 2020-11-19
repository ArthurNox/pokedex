import styled from 'styled-components';

export const Container = styled.footer`
width: 90vw;
  height: 9vh;
  background-color:#4D4D51;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;

button {
  padding: 1vw;
  margin:0 0.3em 0.3em 0;
  border-radius:0.15em;
  box-sizing: border-box;
  text-decoration:none;
  text-transform:uppercase;
  font-weight:400;
  color:#FFFFFF;
  background-color:#3369ff;
  box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);

  cursor: pointer;
}

button:hover{
  background-color:#009900;
}

input{
  width: 41vw;
  height: 4vh;
}`