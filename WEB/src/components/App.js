import Nav from "./Nav";
import Header from "./Header";
import World from "../contains/World";
import Footer from "./Footer";

import "../index.css";


function App() {
  return (
    <div className="page">
      <Nav />
      <div className="content">
        <Header />
        <World />
      </div>
      <Footer />
    </div>
  );
}

export default App;
