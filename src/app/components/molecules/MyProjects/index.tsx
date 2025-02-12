import React from 'react';
import { Label } from '@components/atons/Label';
import TitleSection from '@components/atons/ShowMyName';
import ContainerSection from '@components/atons/ContainerSection';
import CardResumeProject from '../CardResumeProjects';

import { projectsWorked } from '../../../../utils/constants';




const MyProjects = () => {
    return (
        <ContainerSection id="portfolio" className='max-w-full flex flex-col gap-y-6'>
            <Label text='🔗 Portfólio' />
            <TitleSection text='Trabalhos e projetos' />
            <div data-testid='wrapperProjects' className="flex overflow-scroll md:overflow-auto md:grid justify-items-center items-center w-full gap-8 mt-20 md:grid-cols-2 2xl:grid-cols-3 mx-auto">
                {projectsWorked.map(({ title, description, image, projectLink }, index) => <CardResumeProject key={index} title={title || ''} description={description || ''} projectLink={projectLink || ''} image={image || ''} />)}
            </div>
        </ContainerSection>
    );
};

export default MyProjects;