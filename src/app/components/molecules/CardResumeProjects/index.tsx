import React from 'react';
import { Card } from '../../atons/Card';

interface CardResumeProjectsProps {
    title: string;
    description: string;
    link: string;
    image:string;
}

const CardResumeProjects: React.FC<CardResumeProjectsProps> = ({ title, description, image, link }) => {
    return (
       <Card.Root onClick={()=>console.log(link)}>
        <Card.Title>{title}</Card.Title>
        <Card.Resume>{description}</Card.Resume>
        <Card.WrapLabel>
            <Card.Label text='React JS'/>
            <Card.Label text='Typescript'/>
        </Card.WrapLabel>
        <Card.Image src={image} alt={title}/>
       </Card.Root>
    );
};

export default CardResumeProjects;