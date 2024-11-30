import React from 'react';
import { Card } from '../../atons/Card';

interface CardResumeProjectsProps {
    title: string;
    description: string;
    projectLink: string;
    image: string;
}

const CardResumeProjects: React.FC<CardResumeProjectsProps> = ({ title, description, image, projectLink }) => {
    return (
        <a href={projectLink} target='_blank' rel="noopener noreferrer" className="w-fit">
            <Card.Root onClick={() => console.log(projectLink)} className="max-w-[300px] max-h-[371px] h-[371px] flex flex-col gap-2 cursor-pointer">
                <Card.Title >{title}</Card.Title>
                <Card.Resume className="mt-[0.047rem] text-sm">{description}</Card.Resume>
                <Card.WrapLabel className="w-full flex gap-2">
                    <Card.Label text='React JS' className='max-w-[6.625rem]' />
                    <Card.Label text='Typescript' />
                </Card.WrapLabel>
                <Card.Image src={image} alt={title} width={300} height={160} className="rounded-2xl overflow-hidden" />
            </Card.Root>
        </a>
    );
};

export default CardResumeProjects;