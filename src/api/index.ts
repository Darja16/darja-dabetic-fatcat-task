import { UserData, PostFormData } from '@homework-task/types';

export const fetchUsersData = async (): Promise<UserData[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await res.json();

    if (!res.ok) {
        throw new Error('Failed to fetch users data');
    }

    return json;
};

export const fetchPostsData = async (): Promise<PostFormData[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await res.json();

    if (!res.ok) {
        throw new Error('Failed to fetch post data');
    }

    return json;
};

export const postFormData = async (
    formData: PostFormData
): Promise<PostFormData> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (!res.ok) {
        throw new Error('Failed to post data');
    }

    return res.json();
};
