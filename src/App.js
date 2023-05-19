import React, { useEffect, useState } from 'react';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';



import './App.scss'
import { colors } from './constants/constant';
import Contact from './components/contact/Contact';
export const MainColorContext = React.createContext();


function App() {
  const [currentColor, setCurrentColor] = useState(colors.SILVER)

  const changeColor = (color) => {
    setCurrentColor(color)
  }
  useEffect(() => {
    const timer = setTimeout(() => setCurrentColor(colors.SPRING_GREEN), 1500);
    return () => clearTimeout(timer)
  }, [])
  return (
    <MainColorContext.Provider value={currentColor}>
      <div className='App' >
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
