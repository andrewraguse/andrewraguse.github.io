import "./App.scss";
import NavBar from "../components/navbar/NavBar";
import Home from "../pages/home/Home";
import Resume from "../pages/resume/Resume";
import Photography from "../pages/photography/Photography";
import About from "../pages/about/About";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ThemeSwitcher from "../components/theme-switcher/ThemeSwitcher";

function App() {
  //Todo: will update this to be based on the time of day
  const [theme, setTheme] = useState("light");

  return (
    <>
      <div className="background-components">
        <div className={`stars stars-${theme}`}></div>
        <div className={`twinkle twinkle-${theme}`} />
        <div className={`moon-sun moon-sun-${theme}`} />
        <div className="clouds">
          <div className={`clouds1 clouds1-${theme}`} />
          <div className={`clouds2 clouds2-${theme}`} />
          <div className={`clouds3 clouds3-${theme}`} />
        </div>
      </div>
      <div className="foreground-components">
        <BrowserRouter>
          <NavBar theme={theme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About theme={theme} />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/photography" element={<Photography />} />
          </Routes>
        </BrowserRouter>
      </div>

      <div className={`toggle-border-${theme}`} />
      <div className="light-dark-toggle">
        <FormGroup>
          <FormControlLabel
            control={<ThemeSwitcher sx={{ m: 20 }} />}
            onChange={() => setTheme(theme === "light" ? "dark" : "light")}
            label=""
          />
        </FormGroup>
      </div>
    </>
  );
}

export default App;
