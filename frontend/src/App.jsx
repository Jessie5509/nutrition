import { useEffect } from "react";
import Home from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { Recipes } from "./components/Recipes";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  useEffect(() => {
    const toTopButton = document.getElementById("to-top-button");

    const handleScroll = () => {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        toTopButton.classList.remove("hidden");
      } else {
        toTopButton.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section>
      <Home />
      <AboutMe />
      <Services />
      <Recipes />
      <Contact />
      <button
        id="to-top-button"
        onClick={goToTop}
        title="Go To Top"
        className="hidden fixed z-90 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-lime-800 text-white text-3xl font-bold"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </section>
  );
}

export default App;
