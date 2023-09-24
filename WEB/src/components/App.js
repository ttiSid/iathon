import Nav from "./Nav";
import Header from "./Header";
import World from "../contains/World";
import Footer from "./Footer";
import Types from "../contains/Types";

import "../index.css";


function App() {
  return (
    <div className="page">
      <Nav />
      <div className="content">
        <Header />
        <World />
        <Types />
      </div>
      <Footer />
    </div>
  );
}

export default App;
