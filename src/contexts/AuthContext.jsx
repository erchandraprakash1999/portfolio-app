// contexts/AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    // Initialize the state with user data if available in localStorage
    const storedUserData = JSON.parse(localStorage.getItem('crm'));
    const [user, setUser] = useState(storedUserData || null);
    const [userProfile, setUserProfile] = useState(null);
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDark')) || false);

    const setProfileData = (profileData) => {
        setUserProfile(profileData);
    }
    const login = (userData) => {
        const loggedInUser = {
            isLoggedIn: true,
            userInfo: {
                userId: userData._id,
                isEmailVerified: userData.isEmailVerified,
                userType: userData.userType,
                profileId: userData.profile
            },
            userToken: userData.token
        };
        localStorage.setItem('crm', JSON.stringify(loggedInUser));
        setUser(loggedInUser);
    };

    const logout = () => {
        localStorage.removeItem('crm');
        setUser(null);
    };
    const setDarkMode = () => {
        const newDarkMode = !isDark; // Toggle the dark mode state
        setIsDark(newDarkMode);
        localStorage.setItem('isDark', JSON.stringify(newDarkMode)); // Store as boolean
    };
    return (
        <AuthContext.Provider value={{ user, login, logout, setProfileData, userProfile, isDark, setDarkMode }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };