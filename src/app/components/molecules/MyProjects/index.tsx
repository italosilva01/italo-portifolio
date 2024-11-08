import React from 'react';
import { Label } from '@components/atons/Label';
import TitleSection from '@components/atons/ShowMyName';
import ContainerSection from '@components/atons/ContainerSection';
import CardResumeProjects from '../CardResumeProjects';

const MyProjects = () => {   
    return (       
            <ContainerSection>
            <Label text='🔗 Portfólio'/>
            <TitleSection text='Trabalhos e projetos' />
            {/* <CardResumeProjects title='Move.it' description="Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios." link='teste' image='https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fplus.unsplash.com%2Fpremium_photo-1664474619075-644dd191935f%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VtfGVufDB8fDB8fHww&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimagem&docid=4hIycTGIukdarM&tbnid=2brKLR3s5kTpPM&vet=12ahUKEwiVyeuX0cyJAxXmD7kGHVDxFTUQM3oECBcQAA..i&w=3000&h=2003&hcb=2&ved=2ahUKEwiVyeuX0cyJAxXmD7kGHVDxFTUQM3oECBcQAA' /> */}
            </ContainerSection>
    );
};

export default MyProjects;