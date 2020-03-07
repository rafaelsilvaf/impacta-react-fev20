import React from 'react';
import {Lista} from './Lista';
export class Componente1 extends React.Component {
    initialState = {
        nome: '',
        idade: '',
        email: '',
        telefone: '',
        cep: '',
        dataNascimento: '',
        categorias : ['INFORMATICA','REDES','ADM']
    }

state = this.initialState
    limpar (){
        this.setState(this.initialState);}

    componentDidMount (){
        setTimeout(_=> this.setState({...this.state, nome:'rafael'}),3000)
        setTimeout(_=> this.limpar(),5000);

    }
     
    
    
    
    
    render (){
        return (
            <div>

                <h1>Meu Primeiro componente - {this.state ? this.state.nome : ''}</h1>
                    <ul>    
       
                        {this.state.categorias.map((cat,index) => <Lista key ={index} texto={cat}/>  )}
                
                    </ul>
            </div>
            
            );
        }
    }