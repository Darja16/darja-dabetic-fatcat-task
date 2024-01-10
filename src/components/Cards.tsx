import React from 'react';
import clsx from 'clsx';
import Button from './Button';

type CardsProps = {
    cards: {
        title: string;
        image: string;
        description: string;
        background: string;
        onClick?: () => void;
        buttonText: string;
    }[];
};

const Cards: React.FC<CardsProps> = ({ cards }) => (
    <div className={clsx('flex', 'justify-center', 'items-center')}>
        <div className={clsx('grid', 'grid-cols-2', 'gap-8', 'w-8/12')}>
            {cards.map(
                ({
                    title,
                    image,
                    description,
                    background,
                    onClick,
                    buttonText,
                }) => (
                    <div
                        key={title}
                        className={clsx('rounded-md', 'p-8', background)}
                    >
                        <img src={image} alt="Icon" width="120" />
                        <div className="my-8">
                            <div
                                className={clsx(
                                    'text-2xl',
                                    'font-bold',
                                    'mb-2'
                                )}
                            >
                                {title}
                            </div>
                            <div className={clsx('text-xl')}>{description}</div>
                        </div>
                        {onClick && buttonText && (
                            <Button onClick={onClick}>{buttonText}</Button>
                        )}
                    </div>
                )
            )}
        </div>
    </div>
);

export default Cards;
