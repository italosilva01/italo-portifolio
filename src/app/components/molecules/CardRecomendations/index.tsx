import React from 'react'
import { Card } from '../../atons/Card'
import Text from '../../atons/Text';
import { useMobile } from '@/app/hooks/UseMobile';

interface CardRecomendationsProps {
    description: string;
    position: string;
    name: string;
    image: string;

}

const QUOTES_SIZE_MOBILE = 19;
const QUOTES_SIZE_DESKTOP = 32;


const PROFILE_IMAGE_SIZE_MOBILE = 38;
const PROFILE_IMAGE_SIZE_DESKTOP = 64;

export const CardRecomendations = ({ description, image, name, position }: CardRecomendationsProps) => {
    const isMobileScreen = useMobile();
    const currentSizeQuotes = isMobileScreen ? QUOTES_SIZE_MOBILE : QUOTES_SIZE_DESKTOP;
    const currentSizeProfileImage = isMobileScreen ? PROFILE_IMAGE_SIZE_MOBILE : PROFILE_IMAGE_SIZE_DESKTOP;
    return (
        <Card.Root className="min-w-[298px] max-w-[298px] md:max-w-[500px] !p-[1rem] flex flex-col justify-between items-start">
            <Card.Quotes size={currentSizeQuotes} />
            <div className="flex flex-col gap-8 justify-start items-start mb-auto">
                <Card.Resume className='text-sm h-fit overflow-y-auto md:text-base'>{description}</Card.Resume>
            </div>
            <div className="flex items-center gap-2 mt-3">
                <Card.Image src={image} className='rounded-[50%]' alt='test' width={currentSizeProfileImage} height={currentSizeProfileImage} />
                <div>
                    <Text content={name} className='font-bold text-white text-xs md:text-xl' />
                    <Text content={position} className="text-xs md:text-xl text-purple-dull" />
                </div>
            </div>
        </Card.Root >
    )
}
