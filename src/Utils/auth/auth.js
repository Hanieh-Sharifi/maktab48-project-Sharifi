// check if logged in and we have token
export const isLoggedIn = () => {
    if (localStorage.getItem('token'))
    {
        return true;
    }
    return false;
}

// clear tokens and log out
export const logOut = () => {
    localStorage.clear();
}