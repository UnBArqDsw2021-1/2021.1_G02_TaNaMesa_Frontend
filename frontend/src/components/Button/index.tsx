import React from 'react';

import { NormalButton } from './styles';

interface ButtonProps {
    color: string;
    width?: string;
    padding?: string;
    enabled?: boolean;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
    children,
    color,
    width = "10rem",
    padding = "1.5rem",
    enabled = true,
    onClick,
}) => {
    return (
        <NormalButton
            color={color}
            width={width}
            padding={padding}
            enabled={enabled}
            onClick={onClick}
        >
            {children}
        </NormalButton >
    );
};

export default Button;