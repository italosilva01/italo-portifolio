'use client';
import { ThemeProvider } from '@mui/material';

import { Menu } from '@components/Menu';
import About from '@components/molecules/About';
import MyProjects from '@components/molecules/MyProjects';
import { Resume } from '@components/molecules/Resume';
import MySkills from './components/molecules/MySkills';
import { MyJourney } from './components/molecules/MyJourney';
import theme from './theme';
import Recomendations from './components/molecules/Recomendations';
import Conect from './components/organimis/Conect';
import { Footer } from './components/atons/Footer';

export default function Home() {

  return (
    <ThemeProvider theme={theme}>
      <main className="flex min-h-screen flex-col items-center align-middle gap-5.5 w-11/12 m-auto md:px-7.30%">
        <Menu />
        <Resume />
        <About />
        <MyProjects />
        <MySkills />
        <MyJourney />
        <Recomendations />
        <Conect />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
