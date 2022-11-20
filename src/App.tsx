import { createGlobalStyle } from "styled-components"
import Products from "./views/products"


function App() {
  const GlobalStyles = createGlobalStyle`
    html, body{
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      background-color: #F9F9F9;
    }
  `

  return (
    <>
      <GlobalStyles />
      <Products />
    </>
  );
}

export default App
