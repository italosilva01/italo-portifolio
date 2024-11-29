import React from 'react';
import { Label } from '@components/atons/Label';
import TitleSection from '@components/atons/ShowMyName';
import ContainerSection from '@components/atons/ContainerSection';
import CardResumeProjects from '../CardResumeProjects';
import { projectsWorked } from '@/utils/constants';



const MyProjects = () => {
    return (
        <ContainerSection>
            <Label text='🔗 Portfólio' />
            <TitleSection text='Trabalhos e projetos' />
            {projectsWorked.map(({ title, description, image, link }, index) => <CardResumeProjects key={index} title={title || ''} description={description || ''} link={link || ''} image={image || ''} />)}

        </ContainerSection>
    );
};

export default MyProjects;