import React, { ReactNode } from 'react';
import { Tooltip } from '../Tooltip';

interface ToolTipBlackProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    label: string;
};

export const ToolTipBlack: React.FC<ToolTipBlackProps> = ({ children, label, ...res }) => (
    <Tooltip.Root {...res}>
        {children}
        <Tooltip.Content label={label} />
    </Tooltip.Root>
);