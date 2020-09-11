import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled';
import useMoneda from '../../Hooks/useMoneda';
import useCryptoMoneda from '../../Hooks/useCryptoMoneda';
import Error from '../Error/Error';
import axios from 'axios';



const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color 3s ease;


    &:hover{
        background-color: #326ac0;
        cursor: pointer;

    }
`;



const Formulario = ({ guardarCryptoMoneda, guardarMoneda }) => {

    // State del Listado de Crypto Monedas de la API 

    const [listadocrypto, guardarCryptoMonedas] = useState([]);
    const [error, guardarError] = useState(false);

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar Americano' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' },
        { codigo: 'PEN', nombre: 'Sol Peruano' }
    ]

    // Utiliar el hook useMoneda

    const [moneda, Seleccionar] = useMoneda('Elige tu Moneda', '',
        MONEDAS);

    // Utilizar el custom hook useCryptoMoneda

    const [cryptomoneda, SeleccionarCrypto] = useCryptoMoneda('Elige tu Crypto Moneda',
        '', listadocrypto);

    // Ejecutar llamada a la API 

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);

            guardarCryptoMonedas(resultado.data.Data);
        }

        consultarAPI();
    }, [])


    // Info del usuario cuando envía submit

    const cotizarMoneda = e => {
        e.preventDefault();

        // Validar la informacion del formulario

        if (moneda === '' || cryptomoneda === '') {
            guardarError(true);
            return;
        }

        // Caso contrario pasar los datos al componente principal

        guardarError(false);
        guardarMoneda(moneda);
        guardarCryptoMoneda(cryptomoneda);
    }


    return (
        <form
            onSubmit={cotizarMoneda}

        >
            {error ? <Error
                mensaje="Todos los Campos son Obligatorios"
            /> : null}

            <Seleccionar />

            <SeleccionarCrypto />

            <Button
                type="submit"
                value="calcular"
            />

        </form>
    )
}

export default Formulario;
