import React, { HTMLAttributes } from 'react';

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
    label?: string;
}

const ToolTipRoot: React.FC<TooltipProps> = ({
    children,
    className = '',
    ...rest
}) => (
    <div
        className={`relative flex flex-col items-center group ${className}`}
        {...rest}
    >
        {children}
    </div>
);

const ToolTipContent: React.FC<TooltipProps> = ({
    label = '',
    className = '',
    ...rest
}) => (
    <div
        className={`absolute bottom-0 z-10 flex flex-col items-center hidden mb-6 group-hover:flex overflow-visible`}
        {...rest}
    >
        <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg rounded-md overflow-visible">{label}</span>
    </div>
);

export const Tooltip = {
    Root: ToolTipRoot,
    Content: ToolTipContent,
};