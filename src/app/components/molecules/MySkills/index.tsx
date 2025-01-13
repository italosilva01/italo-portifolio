import React from 'react';

import ContainerSection from '../../atons/ContainerSection';
import TitleSection from '../../atons/ShowMyName';
import Text from '../../atons/Text';
import { Label } from '../../atons/Label';
import { mySkills } from './helpers';

const MySkills = () => {

    return (
        <ContainerSection id="skills" className="max-w-full flex flex-col gap-y-4">
            <Label text="🧑‍💻 Skills" className="block md:hidden" />
            <Label
                text="🧑‍💻 Skills · Experiências"
                className="hidden md:block min-w-fit mx-auto"
            />
            <TitleSection
                text="Tecnologias<br/> e habilidades"
                classList="mb-4 block md:mx-auto md:hidden"
            />
            <TitleSection
                text="Tecnologias e habilidades"
                classList="mb-4 hidden md:mx-auto md:block"
            />
            <div className="w-full flex flex-col gap-y-6">
                <div>
                    <Text content="Techs que uso no dia a dia" className="text-sm text-center mb-6 md:text-2xl" />
                    <div className="flex gap-x-[22px] overflow-x-auto flex-nowrap md:justify-center">
                        {mySkills.map((skill) => (
                            <div key={skill.title} className="flex flex-col items-center md:text-[66px]">
                                {skill.icon}
                            </div>))}
                    </div>
                </div>
                <div>
                    <Text content="Outras techs com que já realizei projetos" className="text-sm text-center mb-6 md:text-2xl" />
                    <div className="flex gap-x-[22px] overflow-x-auto flex-nowrap md:justify-center">
                        {mySkills.map((skill) => (
                            <div key={skill.title} className="flex flex-col items-center md:text-[66px]">
                                {skill.icon}
                            </div>))}
                    </div>
                </div>
            </div>
        </ContainerSection>
    );
};

export default MySkills;
