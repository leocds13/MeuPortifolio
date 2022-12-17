import { House } from "phosphor-react";
import { FC } from "react";

export const Menu: FC = () => {
    return (
        <header className='fixed bottom-4 left-1/2 -translate-x-1/2'>
            <ul className='flex w-52 h-12 justify-evenly items-center border border-dark-10 dark:border-light-500 rounded-full backdrop-blur'>
                <li><a href="#top"><House /></a></li>
                <li><a href="#top"><House /></a></li>
                <li><a href="#top"><House /></a></li>
                <li><a href="#top"><House /></a></li>
            </ul>
        </header>
    );
}