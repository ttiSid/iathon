import Nav from "./Nav";
import Header from "./Header";
import Ia from "./IA";
import World from "./World";
import Footer from "./Footer";
import Types from "./Types";
import Country from "./Country";
import Test from "./Test";

import "../index.css";

function App() {
  return (
    <>
      <Nav />
      <div className="content">
        <Header />
        <World />
        <Ia />
        <Types />
        <Country />
        <Test />
      </div>
      <Footer />
    </>
  );
}

export default App;
