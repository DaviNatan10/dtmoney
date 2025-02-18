import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --background: #F0F2F5;
  --red: #E52E4D;
  --blue: #5429CC;

  --blue-light: #6933FF;
  
  --text-tittle: #363F5F;
  --text-body: #969CB3;
  

  --shape: #FFFFFF;


  
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

 //font-size 16px (desktop)
 html{
  @media (max-width: 1080px) {
    font-size: 93.75;
  }
  @media(max-width: 72px){
    font-size: 87.5; 
  }
 }
body {
  background:var(--background);
  -webkit-font-smoothing: antialiased;

}
button {
  cursor: pointer;

}
[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`
