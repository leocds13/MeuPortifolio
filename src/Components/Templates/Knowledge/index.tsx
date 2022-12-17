import { FC } from "react";
import { Card } from "../../Molecules/Card";

export const Knowledge: FC = () => {
    return (
        <section className="my-4">
            <h2 className='text-2xl'>Conhecimentos</h2>
            <div className="h-3"/>
            <div className='flex justify-evenly '>
                <Card title='FrontEnd'>
                    <h3>FrontEnd</h3>
                </Card>
                <Card title='BackEnd'>
                    <h3>BackEnd</h3>
                </Card>
            </div>
        </section>
    );
}