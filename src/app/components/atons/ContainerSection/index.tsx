import React, { HTMLAttributes } from 'react';

interface ContainerSectionProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const ContainerSection: React.FC<ContainerSectionProps> = ({ children, ...rest }) => {
    return (
        <div className={`flex flex-col gap-8 ${rest.className}`}>
            {children}
        </div>
    );
};

export default ContainerSection;