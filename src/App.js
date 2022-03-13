import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import MySkills from "./components/MySkills";
import Contact from "./components/Contact";
import { date } from "./date";

function App() {
  return (
    <div className="App">
      <Header date={date.header} />
      <main>
        <AboutMe date={date.aboutMe} />
        <MyProjects date={date.myProjects} />
        <MySkills />
      </main>
      <Contact />
    </div>
  );
}

export default App;
