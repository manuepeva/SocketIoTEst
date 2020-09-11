import React from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ResultadoDiv = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
`;

const Parrafos = styled.p`
    font-size: 18px;

    span{
        font-weight: bold;
    }
`;

const Precio = styled.p`
    font-size: 30px;

    span{
        font-weight: bold; 
    }
`;


const Cotizacion = ({ resultado }) => {

    if (Object.keys(resultado).length === 0) {
        return null;
    }

    return (
        <ResultadoDiv>
            <Precio>El Precio es: <span>{resultado.PRICE}</span></Precio>
            <Parrafos>El Precio más alto del Día es: <span>{resultado.HIGHDAY}</span></Parrafos>
            <Parrafos>El Precio más bajo del Día es: <span>{resultado.LOWDAY}</span></Parrafos>
            <Parrafos>La Variación de las últimas 24 Hrs fue: <span>{resultado.CHANGEPCT24HOUR}</span></Parrafos>
            <Parrafos>Última Actualización: <span>{resultado.LASTUPDATE}</span></Parrafos>
        </ResultadoDiv>
    )
}

Cotizacion.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Cotizacion;
