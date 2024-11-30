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
            <div className="flex flex-col items-center w-full gap-8 mt-[100px] md:grid md:grid-cols-5 md:mx-auto">
                {projectsWorked.map(({ title, description, image, projectLink }, index) => <CardResumeProjects key={index} title={title || ''} description={description || ''} projectLink={projectLink || ''} image={image || ''} />)}
            </div>

        </ContainerSection>
    );
};

export default MyProjects;