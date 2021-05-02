import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './styles.css'

function Q01(){
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');

    function calcularIMC(event){
        event.preventDefault();
        let floatPeso = parseFloat(peso.replace(',', '.'));
        let floatAltura = parseFloat(altura.replace(',', '.'));

        const resultado = floatPeso / (floatAltura * floatAltura);
        
        if(resultado > 30){
            alert('Obesidade');
        }else if(resultado >= 25 && resultado <= 30){
            alert('Sobrepeso');
        }else if(resultado < 25){
            alert('Peso Normal');
        }

        setAltura('');
        setPeso('');
    }


    return(
        <div className="page-q01">
            <Link to='/'> Home </Link>
            <h1> Calcular IMC </h1>
            <form onSubmit={calcularIMC}>
                <input 
                    type="text"
                    value={peso}
                    onChange={event => setPeso(event.target.value)}
                    placeholder="Peso"
                    required 
                />
                <input 
                    type="text" 
                    value={altura} 
                    onChange={event => setAltura(event.target.value)} 
                    placeholder="Altura"
                    required
                />
                <button type="submit"> Calcular </button>
            </form>
        </div>
    )
}

export default Q01;