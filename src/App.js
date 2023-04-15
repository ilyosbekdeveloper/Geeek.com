import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import GlobalStyle from './styles/GlobalStyles'
import { useEffect, useState } from "react";
import Main from "./Components/Main";
import Subjects from "./Components/Subjects/Subjects";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import Question from "./Components/Questions";
import Join from "./Components/Join";
import Footer from "./Components/Footer/Footer";

function App() {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    localTheme && setTheme(JSON.parse(localTheme));
  }, []);

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    localStorage.setItem('theme', JSON.stringify(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      {/* Global styles */}
      <GlobalStyle/>

      {/* Header */}
      <Header themeChanger={toggleTheme} changer={theme} darkMode={theme}/>

      {/* main section */}
      <Main darkMode={theme}/>

      {/* Subjects */}
      <Subjects darkMode={theme}/>

      {/* About section */}
      <About darkMode={theme}/>

      {/* About section */}
      <Testimonials darkMode={theme}/>

      {/* Question */}
      <Question darkMode={theme}/>

      {/* Join */}
      <Join darkMode={theme}/>

      {/* Footer */}
      <Footer darkMode={theme}/>
    </div>
  );
}

export default App;
