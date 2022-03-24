import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";


const App = () => {
  return (
    <>
      <div className="hero">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </>
  );
};

export default App;
