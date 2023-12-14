import "./App.scss";
import NavBar from "../components/navbar";
import HomePage from "./home";
import ResumePage from "./resume";
import PhotographyPage from "./photography";
import AboutPage from "./about";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ThemeSwitcher from "../components/theme-switcher";

function App() {
  //will update this to be based on the time of day
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
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/photography" element={<PhotographyPage />} />
        </Routes>
      </BrowserRouter>

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

/**
 *   const [showAlert, setShowAlert] = useState(false);
  function renderAlert() {
    console.log("Alert has been rendered");
    setShowAlert(true);
  }
    <div>
      <Button onClickButton={renderAlert}>Click Me!</Button>
      {showAlert && (
        <Alert onCancelButton={() => setShowAlert(false)}>Warning!!!</Alert>
      )}
    </div>
    */

export default App;
