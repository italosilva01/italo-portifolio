import { Label } from '@components/atons/Label';
import ShowMyName from '@components/atons/ShowMyName';
import { useEffect, useState } from 'react';
// import Text from '@components/atons/Text';

const MIN_WIDTH_MEDIUM_SCREEN = 768;

const About = () => {
  const [myName, setMyName] = useState<string>('Francisco <br /> Italo');

  useEffect(() => {
    if (window.innerWidth >= MIN_WIDTH_MEDIUM_SCREEN) {
      setMyName('Francisco Italo <br /> Silva do nascimento');
    }
  }, []);

  return (
    <div>
      <p>Texto no meio</p>
      <div>
        <Label text="🧐Sobre mim" />
        <ShowMyName
          classList="!text-2xl md:!text-5xl max-w-[663px]"
          text={myName}
        />
      </div>
      {/* <Text
        content="Mas pode me chamar apenas de Henrique. Prazer! Há mais de 2 anos desenvolvendo e programando interfaces com JavaScript, React JS e Typescript. Graduado em Análise e Desenvolvimento de Sistemas pela Fatec de São José dos Campos. Interesses em desenvolvimento Front-end com React, React Native e UX/UI Design.
 
🚀 Tentando ser um pouquinho melhor do que ontem todos os dias. "
      /> */}
    </div>
  );
};

export default About;
