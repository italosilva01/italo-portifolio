import React from 'react';
import { Label } from '@components/atons/Label';
import TitleSection from '@components/atons/ShowMyName';
import ContainerSection from '@components/atons/ContainerSection';
import CardResumeProjects from '../CardResumeProjects';

import { projectsWorked } from '../../../../utils/constants';




const MyProjects = () => {
    return (
        <ContainerSection id="portfolio">
            <Label text='🔗 Portfólio' />
            <TitleSection text='Trabalhos e projetos' />
            <div data-testid='wrapperProjects' className="flex overflow-scroll md:grid justify-items-center items-center w-full gap-8 mt-[100px] md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 mx-auto">
                {projectsWorked.map(({ title, description, image, projectLink }, index) => <CardResumeProjects key={index} title={title || ''} description={description || ''} projectLink={projectLink || ''} image={image || ''} />)}
            </div>

        </ContainerSection>
    );
};

export default MyProjects;