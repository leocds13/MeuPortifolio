import { FC } from "react";

type CoverProps = {};

export const Cover: FC<CoverProps> = () => {
    return (
        <section className='w-full h-72 mb-2 bg-devDescktopBg bg-cover bg-center flex justify-center items-center'>
            <div className='w-full h-72 bg-gradient-to-r from-dark-10 to-dark-300 opacity-50'>
            </div>
            <h1 className='text-4xl absolute text-light-500'>Leonardo</h1>
        </section>
    );
}