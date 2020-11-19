import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: auto;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  section{
    background-color: #9D9998;
    padding: 6vw;
    margin-top: 1vh;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    
    
    box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
  }

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
  img{
    width: 17rem;
  }
  
  `