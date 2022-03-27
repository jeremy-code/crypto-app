import "./App.scss";
import { HomePage, Cryptocurrencies, Exchanges, News } from "./views";
import { Router } from "./components";

const App = () => {
  return (
    <Router
      paths={["/", "cryptocurrencies", "exchanges", "news"]}
      elements={[<HomePage />, <Cryptocurrencies />, <Exchanges />, <News />]}
    />
  );
};

export default App;
