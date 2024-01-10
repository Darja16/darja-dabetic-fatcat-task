import React from 'react';
import { UserData } from '../types';

type ListComponentProps = {
    data: UserData[] | undefined;
    error: any;
    isLoading: boolean;
    renderItem: (user: UserData) => React.ReactNode;
};

const ListComponent: React.FC<ListComponentProps> = ({
    data,
    error,
    isLoading,
    renderItem,
}) => {
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="container mx-auto my-8 flex flex-wrap start">
            {data?.map((user: UserData) => (
                <div
                    key={user.id}
                    className="w-full sm:w-1/2 md:w-1/3 px-2 py-2"
                >
                    {renderItem(user)}
                </div>
            ))}
        </div>
    );
};

export default ListComponent;
