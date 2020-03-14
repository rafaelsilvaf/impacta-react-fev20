import React, {useState, useEffect } from 'react';
import {Lista} from './Lista'

export const Componente2 = _ => {
    const [nome, setNome] = useState('');
    const [categorias] = useState( ['INFORMATICA', 'REDES', 'ADM']);

    useEffect(() => {
        setTimeout(() => setNome('Rafael'), 3000);
        setTimeout(_ => setNome(''), 5000);
    }, []);

    const renderLista = () =>{
        return categorias.map((cat, index) => <Lista key={index} texto={cat} />)
    }

   return(
    <div>
        <h1>Meu Segundo Componente - {nome}</h1>
        <ul>
            {renderLista()}
        </ul>
    </div>
    );
}