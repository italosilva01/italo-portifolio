'use client';
import { ThemeProvider } from '@mui/material';

import { Menu } from '@components/Menu';
import { Experiences } from '@/app/components/molecules/Experiences';
import Hr from '@components/atons/Hr';
import About from '@components/molecules/About';
import MyProjects from '@components/molecules/MyProjects';
import { Resume } from '@components/molecules/Resume';
import MySkills from './components/molecules/MySkills';
import { MyJourney } from './components/molecules/MyJourney';
import theme from './theme';
import Recomendations from './components/molecules/Recomendations';
import Conect from './components/organimis/Conect';

export default function Home() {

  return (
    <ThemeProvider theme={theme}>
      <main className="flex min-h-screen flex-col items-center align-middle gap-5.5 w-11/12 m-auto md:px-7.30%">
        <Menu />
        <Resume />
        {/* <div className="hidden md:block">
          <Hr />
          <Experiences />
          <Hr />
        </div> */}
        <About />
        <MyProjects />
        <MySkills />
        <MyJourney />
        <Recomendations />
        <Conect />
      </main>
    </ThemeProvider>
  );
}
