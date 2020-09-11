import React from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const MensajeDeError = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: #fff;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
`;
const Error = ({ mensaje }) => {
    return (
        <MensajeDeError>
            {mensaje}
        </MensajeDeError>
    )
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Error;
