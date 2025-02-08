import React from 'react'

import ContainerSection from '../../atons/ContainerSection'
import { Label } from '../../atons/Label'
import TitleSection from '../../atons/ShowMyName'
import { CardRecomendations } from '../CardRecomendations'
import { recomendations } from '@/utils/constants'

const Recomendations = () => {
    return (
        <ContainerSection id='#recomendations' className='w-full flex flex-col gap-y-4'>
            <Label text='💬 Recomendações' className='md:mx-auto w-fit' />
            <TitleSection
                text="Em<br/> depoimento"
                classList="mb-4 block md:mx-auto md:hidden"
            />
            <TitleSection
                text="Em depoimento"
                classList="mb-4 hidden md:mx-auto md:block"
            />
            <div className="flex w-full overflow-x-auto gap-6 md:grid md:grid-cols-2 md:!gap-3 lg:grid-cols-3">
                {recomendations.map(({ imageProfile, textRecomendation, namePerson, position }) =>
                    <CardRecomendations image={imageProfile} description={textRecomendation} key={namePerson} name={namePerson} position={position} />
                )}
            </div>
        </ContainerSection>
    )
}

export default Recomendations