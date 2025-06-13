
import Dashboard from "./view/dashboard";
import AboutUs from "./view/aboutUs";
import Page1 from "./view/page1";
import Page2 from "./view/page2";
import NavBar from "./component/navBar";
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState('light'); // Default mode is light
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = "Text Editor - Light Mode";
      setInterval(() => {
        document.title = "Text Editor -Amazing Light Mode";
      }, 2000);
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.title = "Text Editor - Dark Mode";
      setInterval(() => {
        document.title = "Text Editor install now";
      }, 1000);
    }
  };
  return (
    <Router>
      <div>
        <NavBar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/about" element={<AboutUs mode={mode} toggleMode={toggleMode} />} />
          <Route path="/page-1" element={<Page1 mode={mode} toggleMode={toggleMode} />} />
          <Route path="/page-2" element={<Page2 mode={mode} toggleMode={toggleMode} />} />
          <Route path="/" element={<Dashboard mode={mode} toggleMode={toggleMode} />} />
        </Routes>
      </div>
    </Router>
  );
}


