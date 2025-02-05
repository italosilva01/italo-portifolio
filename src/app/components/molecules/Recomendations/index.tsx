import React from 'react'

import ContainerSection from '../../atons/ContainerSection'
import { Label } from '../../atons/Label'
import TitleSection from '../../atons/ShowMyName'

const Recomendations = () => {
    return (
        <ContainerSection className='w-full flex flex-col gap-y-4 border border-red-600'>
            <Label text='💬 Recomendações' className='md:mx-auto w-fit' />
            <TitleSection
                text="Em<br/> depoimento"
                classList="mb-4 block md:mx-auto md:hidden"
            />
            <TitleSection
                text="Em depoimento"
                classList="mb-4 hidden md:mx-auto md:block"
            />
        </ContainerSection>
    )
}

export default Recomendations