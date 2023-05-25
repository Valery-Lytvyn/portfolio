import React, { useEffect, useState } from "react";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import { colors } from "./constants/colorsConstants";
import Contact from "./components/contact/Contact";
import "./App.scss";

interface MainColorContextType {}

export const MainColorContext = React.createContext<MainColorContextType>(
  {} as MainColorContextType
);

function App() {
  const [currentColor, setCurrentColor] = useState<string>(colors.SILVER);

  const changeColor = (color: string): any => {
    setCurrentColor(color);
  };
  useEffect(() => {
    const timer = setTimeout(() => setCurrentColor(colors.LAWN_GREEN), 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <MainColorContext.Provider value={currentColor}>
      <div className="App">
        <Header changeColor={changeColor} />
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </MainColorContext.Provider>
  );
}

export default App;
