import GlobalStyle from "./styles/global";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/index.js";
import Header from './components/Header'

function App() {
  return (
/*     <BrowserRouter>
      <Route path="/" exact component={Home} /> */
      <Header />
/*       <GlobalStyle />
    </BrowserRouter> */
  );
}

export default App;
