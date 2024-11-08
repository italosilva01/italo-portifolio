import React, { HTMLAttributes, ImgHTMLAttributes } from 'react';
import { Typography, TypographyProps } from '@mui/material';
import { Label } from '../Label';
import Image, {ImageProps} from 'next/image';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

const CardRoot: React.FC<CardProps> = ({ children, className,  ...rest }) => {
    return (
        <div className={`border-1 rounded-2xl py-[1.875rem] px-[1.5rem] border-purple-dull ${className}`} {...rest}>
            {children}
        </div>
    );
};

const CardTitle = ({children,...rest}:TypographyProps)=>{
    return <Typography variant='h1' {...rest}>{children}</Typography>
}


const CardResume = ({children,...rest}:TypographyProps)=>{
    return <Typography variant='h2' {...rest}>{children}</Typography>
}

const CardWrapLabel = ({children,...rest}:HTMLAttributes<HTMLDivElement>)=>{
    return <div {...rest}>{children}</div>
}

interface CardLabelProps {
    text: string;
}

const CardLabel = ({ text }:CardLabelProps) => {
    return <Label text={text}/>
}

const CardImage = ({ alt, ...rest}:ImageProps)=>{
    return <div>
        <Image alt={alt} {...rest}/>
    </div>
}


export const Card = {
    Root:CardRoot,
    Title:CardTitle,
    Resume:CardResume,
    WrapLabel:CardWrapLabel,
    Label:CardLabel,
    Image:CardImage
}