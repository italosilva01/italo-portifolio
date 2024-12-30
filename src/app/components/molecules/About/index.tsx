import { useEffect, useState } from 'react';
import { Label } from '@components/atons/Label';
import TitleSection from '@components/atons/ShowMyName';
import Text from '@components/atons/Text';
import Image from 'next/image';

const MIN_WIDTH_MEDIUM_SCREEN = 768;

const About = () => {
  const [myName, setMyName] = useState<string>('Francisco <br /> Italo');
  const styleText = `w-50`;

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MIN_WIDTH_MEDIUM_SCREEN);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setMyName('Francisco Italo <br /> Silva do nascimento');
    }
  }, [isMobile]);

  return (
    <div className="flex flex-col md:flex-row gap-8" id='about'>
      {isMobile ? (
        <Image
          data-testid="profile_image"
          src="/profile.png"
          alt="Francisco Italo"
          width={285}
          height={236}
          className="rounded-full mx-auto"
          priority
        />
      ) : (
        <div className='hidden lg:block my-auto'>
          <Image
            data-testid="profile_image"
            src="/profile.png"
            alt="Francisco Italo"
            width={515}
            height={515}
            className="rounded-full"
            priority
          />
        </div>
      )}
      <div className="flex flex-col gap-8">
        <Label text="🧐Sobre mim" />
        <TitleSection
          classList="!text-2xl md:!text-5xl md:max-w-[663px]"
          text={myName}

        />
        <Text
          className={styleText}
          content="Mas pode me chamar apenas de Italo. Prazer! Há mais de 4 anos desenvolvendo e programamando interfaces com React + Javascript + Typescript. Sou bacharel em Tecnologia da Informação pela Universidade Federal do Rio Grande do Norte e desenvolvedor Front-end com React e Typescript desde 2020."
        />
        <Text
          className={styleText}
          content="🚀 Tentando ser um pouquinho melhor do que ontem todos os dias."
        />
      </div>
    </div>
  );
};

export default About;
