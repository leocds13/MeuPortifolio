import { FC } from "react";
import { Moon, Sun } from "phosphor-react";
import { useTheme } from "../../../Contexts/Theme";

export const TopRightMenu: FC<{}> = () => {
    const { theme, ToggleTheme } = useTheme();
    
    return (
        <aside className='fixed top-8 right-8 text-primary-500 hover:text-primary-300'>
            {
                theme === 'light'
                    ? <Moon onClick={ToggleTheme} className="cursor-pointer" />
                    : <Sun onClick={ToggleTheme} className="cursor-pointer" />
            }
        </aside>
    );
}