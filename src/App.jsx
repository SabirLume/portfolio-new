import "./index.css";
import Blurb from "./components/Blurb";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Header />
      <Blurb />
      <Experiences />
      <Technologies />
      <Contact />
    </div>
  );
}

export default App;
