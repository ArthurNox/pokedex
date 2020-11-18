import styled from 'styled-components';

export const Container = styled.nav`
  width: 20vw;
  height: 90vh;
  background-color:#4D4D51;
  box-shadow: 2px 2px 4px #000;

  /* position: fixed; */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


button {
  padding:0.7em 1.4em;
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
  width: 80%;
  height: 35px;
}
`