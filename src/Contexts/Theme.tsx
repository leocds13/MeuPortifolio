import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";

type Themes = 'light' | 'dark';

type ThemeContextType = {
    theme: Themes;
    setTheme: React.Dispatch<React.SetStateAction<Themes>>;
}

const ThemeContext = createContext<ThemeContextType>({ theme:'dark', setTheme: () => {} });

type ThemeProviderProps = {
    children?: ReactNode
};

export const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<Themes>(() => localStorage.theme);

    useEffect(() => {
        const rootElement = window.document.documentElement;
        const currentTheme = theme;

        const prevTheme = currentTheme == 'light' ? 'dark' : 'light';
        rootElement.classList.remove(prevTheme);

        rootElement.classList.add(currentTheme);

        localStorage.setItem('theme', currentTheme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{
            theme: theme, 
            setTheme: setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    if (!theme) {
        throw new Error("UseTheme só pode ser usado dentro do ThemeProvider");
    }

    const ToggleTheme = () => {
        setTheme((t) => {
            const nextTheme = t === 'light' ? 'dark' : 'light';
            return nextTheme;
        });
    }

    return {theme, ToggleTheme};
}