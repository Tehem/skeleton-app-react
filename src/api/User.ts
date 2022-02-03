import config from '../config';

export const fetchUserById = async (
    token: string,
    userId: string,
    options?: RequestInit
) => {
    const apiUrl = config.api.endpointUrl;
    const headers = options && options.headers ? options.headers : {};

    const user = await fetch(`${apiUrl}/users/me`, {
        ...options,
        headers: {
            ...headers,
            // Add the Authorization header to the existing headers
            Authorization: `Bearer ${token}`,
        },
    });
    return await user.json();
};
