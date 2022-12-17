import { FC } from "react";

export const About: FC = () => {
    return (
        <section className="my-4">
            <span>Um pouco sobre mim 😁</span>

            <div className='flex justify-evenly gap-8 mt-4 text-justify'>
                <div 
                    className='
                        flex-1 
                        p-4 
                        border border-dark-10 dark:border-light-500 
                        rounded-lg 
                        shadow-sm shadow-dark-10 dark:shadow-light-500
                        bg-light-700 dark:bg-dark-200'
                >
                    <h3 className='text-lg mb-2'>Historia</h3>
                    <p>Desde pequeno sonhava em ter minha empresa e certeza que tinha haver com a area de tecnologia 🤖 </p>
                    <p>Comecei relativamente cedo os estudos na programação quando tinha 15 já comecei que pesquisar e dar os primeiros paços, na época começei com <strong>java</strong>.</p>
                </div>

                <div 
                    className='
                        flex-1 
                        p-4 
                        border border-dark-10 dark:border-light-500 
                        rounded-lg 
                        shadow-sm shadow-dark-10 dark:shadow-light-500
                        bg-light-700 dark:bg-dark-200'
                >
                    <h3 className='text-lg mb-2'>Histórico proficional</h3>
                    <ol className='list-inside list-decimal'>
                        <li>Colégio Politec -  - Estágio na escola onde fiz o técnico</li>
                        <li>Estágio em uma empresa, mas agora focado em programação</li>
                        <li>Efetivado</li>
                    </ol>
                </div>
            </div>
        </section>
    );
}