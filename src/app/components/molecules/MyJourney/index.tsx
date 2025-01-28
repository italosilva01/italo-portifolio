import React from 'react';

import ContainerSection from "../../atons/ContainerSection"
import { Label } from '../../atons/Label';
import TitleSection from '../../atons/ShowMyName';
import Text from '../../atons/Text';
import { professionalExperiencies } from '@/utils/constants';
import { CardExperience } from '../CardExperiences';

export const MyJourney = () => {
    return (
        <ContainerSection className="border !border-blue-600 w-full flex flex-col gap-y-4 md:gap-y-6">
            <Label text='💼 Carreira' className="md:mx-auto" />
            <TitleSection
                text='Trajetória<br/>até aqui'
                classList='block md:hidden'
            />
            <TitleSection
                text='Trajetória até aqui'
                classList="md:mx-auto hidden md:block text-center"
            />
            <div className="grid grid-rows-2  md:grid-cols-2 w-full overflow-hidden">
                <div className="border border-red-600 w-full overflow-x-scroll">
                    <div className="w-fit md:mx-auto md:text-center">
                        <Text content="Área profissional" className="font-extrabold text-white whitespace-pre-line md:text-3xl" />
                        <Text content="2020 · Atualmente" className="text-xs md:text-2xl" />
                    </div>
                    <div className="w-full flex gap-[18px] overflow-x-auto py-2.5">
                        {professionalExperiencies.map((item, index) => <CardExperience text={item.title} key={index} textResume={item.description} />)}
                    </div>


                </div>
                {/* <div className="">
                    <div className="w-fit md:mx-auto md:text-center">
                        <Text content="Área Acadêmica" className="font-extrabold text-white whitespace-pre-line md:text-3xl" />
                        <Text content="2017 · Atualmente" className="text-xs md:text-2xl" />
                    </div>
                    <div className="flex gap-[18px]">
                        {professionalExperiencies.map((item, index) => <p key={index}>{item.title}</p>)}
                    </div>

                </div> */}
            </div>
        </ ContainerSection >
    );

}