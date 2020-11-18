import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body, input, button {
  font-size: 16px;
  font-weight: 600; 
  font-family: 'Press Start 2P', cursive;
}`

export const TopSection = styled.div`


`

export const ContentSection = styled.div`
  display: flex;
  position:relative;
`
