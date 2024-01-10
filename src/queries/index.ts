import { useQuery } from 'react-query';
import { fetchUsersData } from '../api';

export const useUsersQuery = () => {
    return useQuery('users', fetchUsersData);
};
