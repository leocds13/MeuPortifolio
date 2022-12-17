import { CaretDown, CaretUp } from "phosphor-react";
import React, { ReactNode, useState } from 'react';

interface CardProps {
    title: string;
    children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="relative rounded-lg shadow-sm shadow-dark-10 dark:shadow-light-500 bg-neutral-50 dark:bg-dark-100">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`
                        w-full 
                        px-4 py-3 
                        flex gap-4 justify-between
                        text-left 
                        font-medium 
                        leading-5 
                        transition duration-150 ease-in-out 
                        ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}
                >
                    {title}
                    {isOpen ? (
                        <CaretDown />
                    ) : (
                        <CaretUp />
                    )}
                </button>
                {isOpen && (<></>
                )}
                {
                    isOpen && (
                        <div
                            className={`
                                px-4 py-3 
                                mt-1
                                text-sm 
                                leading-5 
                                rounded-b-lg 
                                animate-dropdown
                            `}
                            style={{
                                ...(isOpen ? {} : { display: 'none' })
                            }}
                        >
                            {children}
                        </div>
                    )
                }
            </div>
        </div>
    );
};