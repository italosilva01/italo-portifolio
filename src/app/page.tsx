'use client';
import { ThemeProvider } from '@mui/material';

import { Menu } from '@components/Menu';
import { Experiences } from '@/app/components/molecules/Experiences';
import WrapperContent from '@components/atons/WrapprContent';
import Hr from '@components/atons/Hr';
import About from '@components/molecules/About';
import MyProjects from '@components/molecules/MyProjects';
import { Resume } from '@components/molecules/Resume';
import MySkills from './components/molecules/MySkills';
import theme from './theme';

export default function Home() {

  return (
    <ThemeProvider theme={theme}>
      <main className="flex min-h-screen flex-col items-center align-middle gap-5.5">
        <WrapperContent>
          <Menu />
        </WrapperContent>
        <WrapperContent>
          <Resume />
        </WrapperContent>
        <Hr />
        <WrapperContent>
          <Experiences />
        </WrapperContent>
        <Hr />
        <WrapperContent>
          <About />
        </WrapperContent>
        <WrapperContent>
          <MyProjects />
        </WrapperContent>
        <WrapperContent>
          <MySkills />
        </WrapperContent>
      </main>
    </ThemeProvider>
  );
}
