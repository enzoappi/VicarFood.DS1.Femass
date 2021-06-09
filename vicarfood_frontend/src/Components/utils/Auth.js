import { UserProvider } from './MyContext'

export const isAuthenticated = () => {
    if(UserProvider.existe) {
        //console.log(UserProvider.existe)
        return true;
    } else {
        //console.log(UserProvider.existe)
        return false;
    }
};