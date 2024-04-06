import './App.scss';
import NavBar from '../components/navbar/NavBar';
import Home from '../pages/home/Home';
import Contact from '../pages/contact/Contact';
import Experience from '../pages/experience/Experience';
import About from '../pages/about/About';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ThemeSwitcher from '../components/buttons/theme-switcher/ThemeSwitcher';

function App() {
  const useDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useDark ? useState('dark') : useState('light');

  const pageNames = [
    {
      href: '/',
      name: 'home',
      component: <Home />,
    },
    {
      href: '/about',
      name: 'about',
      component: <About theme={theme} />,
    },
    {
      href: '/experience',
      name: 'experience',
      component: <Experience theme={theme} />,
    },
    {
      href: '/contact',
      name: 'contact',
      component: <Contact theme={theme} />,
    },
  ];

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
      <div className={`foreground-components  ${theme}`}>
        <BrowserRouter>
          <NavBar theme={theme} pageNames={pageNames} />
          <Routes>
            {pageNames.map((pageName) => (
              <Route
                key={`${pageName.component}`}
                path={pageName.href}
                element={pageName.component}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </div>

      <div className={`toggle-border ${theme}`}>
        <div className="light-dark-toggle">
          <FormGroup>
            <FormControlLabel
              control={
                <ThemeSwitcher
                  sx={{ m: 0 }}
                  checked={theme === 'dark' ? true : false}
                />
              }
              onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              label=""
            />
          </FormGroup>
        </div>
      </div>
    </>
  );
}

export default App;
