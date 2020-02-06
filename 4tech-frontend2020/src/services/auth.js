import { axios4tech } from './config';

export const login = async (user, password) => {
    try{
        const response = await axios4tech.post('auth/login', {
            userLogin: user,
            password: password
        });

        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('userId', response.data.userId);            
        return response;
        } catch (err) {
            if(err.response){
                return err.response.status;
            }
        return 500;
    }
};

export const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
};
