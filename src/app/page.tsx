'use client';
import { Menu } from '@components/Menu';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import dynamic from 'next/dynamic';
import { Experiences } from '@/app/components/molecules/Experiences';
import WrapperContent from '@components/atons/WrapprContent';

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
  return (
    <ThemeProvider theme={theme}>
      <main className="flex min-h-screen flex-col items-center align-middle gap-5.5 md:px-7.30%   ">
        <WrapperContent>
          <Menu />
        </WrapperContent>
        <WrapperContent>
          <ResumeDinamic />
        </WrapperContent>
        <WrapperContent>
          <Experiences />
        </WrapperContent>
      </main>
    </ThemeProvider>
  );
}
