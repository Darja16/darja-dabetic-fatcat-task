import React from 'react';
import ListComponent from './ListComponent';
import { useUsersQuery } from '../queries';

const UserList: React.FC = () => {
    const { data, error, isLoading } = useUsersQuery();

    const renderItem = (user: any) => (
        <div className="bg-white p-4 mb-4 shadow-md rounded-md w-full">
            <h2 className="text-lg font-semibold mb-2">{user.name}</h2>
            <p className="text-gray-600 mb-2">ID: {user.id}</p>
            <p className="text-gray-600 mb-2">Username: {user.username}</p>
            <p className="text-gray-600 mb-2">Email: {user.email}</p>
            <p className="text-gray-600 mb-2">Phone: {user.phone}</p>
            <hr className="my-2" />
        </div>
    );

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4">Users List</h1>
            <ListComponent
                data={data}
                error={error}
                isLoading={isLoading}
                renderItem={renderItem}
            />
        </div>
    );
};

export default UserList;
