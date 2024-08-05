import React, { createContext, useState, useContext } from 'react';
// Create a context with a default value (optional)
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    console.log(theme)


    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook for easier use of context
export const useTheme = () => useContext(ThemeContext);