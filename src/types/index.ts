export interface Item {
    title: string;
    description: string;
    image?: string;
}

export interface Card {
    title: string;
    image: string;
    description: string;
    background: string;
    onClick?: () => void;
    buttonText: string;
}

export interface PostFormData {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface UserData {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}
