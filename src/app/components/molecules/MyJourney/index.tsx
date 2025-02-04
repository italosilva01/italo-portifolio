import React from 'react';

import ContainerSection from "../../atons/ContainerSection"
import { Label } from '../../atons/Label';
import TitleSection from '../../atons/ShowMyName';
import Text from '../../atons/Text';
import { educacionalExperiencies, professionalExperiencies } from '@/utils/constants';
import { CardExperience } from '../CardExperiences';

export const MyJourney = () => {
    return (
        <ContainerSection className="w-full flex flex-col gap-y-4 md:gap-y-6">
            <Label text='💼 Carreira' className="md:mx-auto" />
            <TitleSection
                text='Trajetória<br/>até aqui'
                classList='block md:hidden'
            />
            <TitleSection
                text='Trajetória até aqui'
                classList="md:mx-auto hidden md:block text-center"
            />
            <div className="grid grid-rows-2 md:grid-cols-2 w-full overflow-hidden gap-6">
                <div className="w-full overflow-x-scroll md:h-fit md:overflow-auto">
                    <div className="w-fit md:mx-auto md:text-center mb-6 md:mb-16">
                        <Text content="Área profissional" className="font-extrabold text-white whitespace-pre-line md:text-3xl" />
                        <Text content="2020 · Atualmente" className="text-xs md:text-2xl" />
                    </div>
                    <div className="w-full flex gap-[18px] overflow-x-auto py-2.5 md:flex-col md:scroll-auto md:h-full md:items-center">
                        {professionalExperiencies.map((item, index) => <CardExperience text={item.title} key={index} textResume={item.description} durationExperience={item.durationExperience} fromTo={item.fromTo} shortTextResume={item.shortDescription} />)}
                    </div>
                </div>
                <div className="w-full overflow-x-scroll md:h-fit md:overflow-auto">
                    <div className="w-fit md:mx-auto md:text-center mb-6 md:mb-16">
                        <Text content="Área Acadêmica" className="font-extrabold text-white whitespace-pre-line md:text-3xl" />
                        <Text content="2017 · Atualmente" className="text-xs md:text-2xl" />
                    </div>
                    <div className="w-full flex gap-[18px] overflow-x-auto py-2.5 md:flex-col md:scroll-auto md:h-full md:items-center">
                        {educacionalExperiencies.map((item, index) => <CardExperience text={item.title} key={index} textResume={item.description} durationExperience={item.durationExperience} fromTo={item.fromTo} shortTextResume={item.shortDescription} />)}
                    </div>


                </div>
            </div>
        </ ContainerSection >
    );

}