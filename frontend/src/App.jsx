import Home from './components/Home'
import { AboutMe } from './components/AboutMe';
import { Recipes } from './components/Recipes';
import { Services } from './components/Services';
import { Contact } from './components/Contact';

function App() {
  return (
    <div>
      <Home />
      <AboutMe />
      <Services />
      <Recipes />
      <Contact />
    </div>
  );
}

export default App;
