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
export const CardRecomendations = ({ description, image, name, position }: CardRecomendationsProps) => {
    const isMobileScreen = useMobile();
    const currentSizeQuotes = isMobileScreen ? 19 : 32;
    const currentSizeProfileImage = isMobileScreen ? 38 : 64;
    return (
        <Card.Root className="min-w-[298px] max-w-[298px] min-h-[243px] md:min-h-[295px]  md:max-[500px] !p-[1rem] relative">
            <Card.Quotes size={currentSizeQuotes} />
            <div className="flex flex-col gap-8 my-auto">
                <Card.Resume className='text-sm h-36 md:h-[155px] overflow-y-auto md:text-base my-auto'>{description}</Card.Resume>
                <div className="flex items-center gap-2 absolute bottom-2">
                    <Card.Image src={image} className='rounded-[50%]' alt='test' width={currentSizeProfileImage} height={currentSizeProfileImage} />
                    <div>
                        <Text content={name} className='font-bold text-white text-xs md:text-xl' />
                        <Text content={position} className="text-xs md:text-xl text-purple-dull" />
                    </div>
                </div>
            </div>
        </Card.Root >
    )
}
