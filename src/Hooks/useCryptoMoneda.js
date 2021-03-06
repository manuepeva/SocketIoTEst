import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';


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



const useCryptoMoneda = (label, stateInicial, MONEDAS) => {


    // State de nuestro custom hook

    const [state, actualizarState] = useState(stateInicial);

    const SeleccionarCrypto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => actualizarState(e.target.value)}
                value={state}
                data-testid="select-cryptos"
            >
                <option value="MXN">--Seleccione--</option>
                {MONEDAS.map(moneda => (
                    <option 
                    key={moneda.CoinInfo.Id}
                    value={moneda.CoinInfo.Name}
                    data-testid="opcion-crypto"
                    >{moneda.CoinInfo.FullName}</option>
                ))}
            </Select>
        </Fragment>
    );

    // Retornar state, interfaz y función que modifica el state

    return [state, SeleccionarCrypto, actualizarState];
}

export default useCryptoMoneda;