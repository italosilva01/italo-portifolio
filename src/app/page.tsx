'use client';
import { Menu } from '@components/Menu';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import dynamic from 'next/dynamic';
import { Experiences } from '@/app/components/molecules/Experiences';
import WrapperContent from '@components/atons/WrapprContent';
import Hr from '@components/atons/Hr';
import About from '@components/molecules/About';
import MyProjects from './components/molecules/MyProjects';

const ResumeDinamic = dynamic(
  () =>
    import('@components/molecules/Resume').then(
      (component) => component.Resume
    ),
  {
    ssr: false,
  }
);

export default function Home() {
  const commumStyled = "flex flex-col gap-5.5";

  return (
    <ThemeProvider theme={theme}>
      <main className="flex min-h-screen flex-col items-center align-middle gap-5.5">
        <WrapperContent className={commumStyled}>
          <Menu />
          <ResumeDinamic />
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

      </main>
    </ThemeProvider>
  );
}
