import * as usersAPI from './users-api';

export async function signUp(userData) {

    const token = await usersAPI.signUp(userData);
    localStorage.setItem('token', token);
    return token;
}

export function getToken() {
    const token = localStorage.getItem('token');
    
    if (!token) return null;
    
    const payload = JSON.parse(atob(token.split('.')[1]));
    console.log('THIS IS THE PAYLOAD: ', payload)
    // token uses seconds not ms like Date
    if (payload.exp < Date.now() / 1000) {  
        localStorage.removeItem('token');
        return null;
    }
    
    return token;
}

export function getUser() {
    const token = getToken();
    
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export async function login(userData) {
    const token = await usersAPI.login(userData);
    localStorage.setItem('token', token);
        return token;
}

export function logout() {
    localStorage.removeItem('token');
}

export function checkToken() {
    // check token returns a string, make it Date object for more flexibility
    console.log(usersAPI.checkToken(), 'checking tokens yayayyaya')
    return usersAPI.checkToken()
    .then(dateString => new Date(dateString));
}