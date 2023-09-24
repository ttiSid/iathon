import Nav from "./Nav";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";

import "../index.css";

function App() {
  return (
    <div className="page">
      <Nav />
      <div className="content">
        <Header />
        <Section />
      </div>
      <Footer />
    </div>
  );
}

export default App;
