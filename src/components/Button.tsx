import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
    children: React.ReactNode;
    onClick?(): void;
    className?: string;
    type?: 'submit' | undefined;
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className,
    type,
    disabled,
}) => (
    <button
        className={clsx(
            'rounded-lg',
            'px-4',
            'py-2',
            'bg-black',
            'text-white',
            className
        )}
        onClick={onClick}
        type={type}
        disabled={disabled}
    >
        {children}
    </button>
);

export default Button;
