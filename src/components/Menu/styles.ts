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
  background-color: #33CC66;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition: 0.3s;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);

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