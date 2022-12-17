import { FC } from "react";
import { Card } from "../../Molecules/Card";

export const Projects: FC = () => {
    return (
        <section className="my-4">
            <h2 className='text-2xl'>Projetos desenvolvidos:</h2>
            <ul className="mt-3 grid grid-cols-2">
                <li className="p-2">
                    <Card title='BackEnd'>
                        <h3>BackEnd</h3>
                    </Card>
                </li>
                <li className="p-2">
                    <Card title='BackEnd'>
                        <h3>BackEnd</h3>
                    </Card>
                </li>
                <li className="p-2">
                    <Card title='BackEnd'>
                        <h3>BackEnd</h3>
                    </Card>
                </li>
                <li className="p-2">
                    <Card title='BackEnd'>
                        <h3>BackEnd</h3>
                    </Card>
                </li>
            </ul>
        </section>
    );
}