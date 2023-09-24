import Nav from "./Nav";
import Header from "./Header";
import Ia from "./IA";
import World from "../contains/World";
import Footer from "./Footer";
import Types from "../contains/Types";
import Country from "../contains/Country";
import Test from "../contains/Test";


import "../index.css";

function App() {
  return (
    <div className="page">
      <Nav />
      <div className="content">
        <Header />
        <World />
        <Ia />
        <Types />
        <Test />
        <Country />
      </div>
      <Footer />
    </div>
  );
}

export default App;
