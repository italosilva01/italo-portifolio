import React, { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className,  ...rest }) => {
    return (
        <div className={`border-1 rounded-2xl py-[1.875rem] px-[1.5rem] border-purple-dull ${className}`} {...rest}>
            {children}
        </div>
    );
};

export default Card;