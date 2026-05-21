// utils/auth.js
export const isAuthenticated = () => {
    const token = localStorage.getItem("auth_token");
    return token !== null;
};

export const checkAuthAndRedirect = (navigate) => {
    if (!isAuthenticated()) {
        navigate("/login");
        return false;
    }
    return true;
};