import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import { monedas } from '../__mocks__/cryptomonedas';


const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    --webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: .8rem;
`;



const useMoneda = (label, stateInicial, MONEDAS) => {

    // State de nuestro custom hook

    const [state, actualizarState] = useState(stateInicial);

    const Seleccionar = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => actualizarState(e.target.value)}
                value={state}
                data-testid="selectMonedas"
            >
                <option value="MXN">--Seleccione--</option>
                {MONEDAS.map(moneda => (
                    <option key={moneda.codigo}
                        value={moneda.codigo}>{moneda.nombre}</option>
                ))}
            </Select>
        </Fragment>
    );

    // Retornar state, interfaz y función que modifica el state

    return [state, Seleccionar, actualizarState];
}



export default useMoneda;