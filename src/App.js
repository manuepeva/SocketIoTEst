import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import cryptoImagen from './Images/cryptomonedas.png';
import Formulario from './Components/Formulario/Formulario';
import Cotizacion from './Components/Cotizacion/Cotizacion';
import Spinner from './Components/Spinner/Spinner';



const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;
    @media (min-width: 992px){
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
    }
`;

const Imagen = styled.img`
    max-width: 100%;
    margin-top: 5rem;
`;

const Heading = styled.h1`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-align: left;
    font-weight: 700;
    font-size: 50px;
    margin-bottom: 50px;
    margin-top: 80px;

    &::after{
      content: '';
      width: 100px;
      height: 6px;
      background-color: #66a2fe;
      display: block;
    }
`;


function App() {

  const [moneda, guardarMoneda] = useState('');
  const [cryptomoneda, guardarCryptoMoneda] = useState('');
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {

    const cotizarCryptoMoneda = async () => {

      // Evitamos la ejecución la primera vez
      if (moneda === '') {
        return;
      }


      // Hacer la consulta a la API para obtener la cotizacion

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);

      // Mostrar el Spinner
      guardarCargando(true);

      // Using set time out to hide the spinner

      setTimeout(() => {

        // Cambiar el estado de cargando

        guardarCargando(false);

        // Guardar la cotizacion
        guardarResultado(resultado.data.DISPLAY[cryptomoneda][moneda]);
      }, 3000);


    }
    cotizarCryptoMoneda();

  }, [moneda, cryptomoneda]);


  // Mostrar el spinner o resultado

  const componente = (cargando) ? <Spinner /> : <Cotizacion
    resultado={resultado}
  />



  return (
    <Contenedor>
      <div>
        <Imagen
          src={cryptoImagen}
          alt="Imagen Crypto"
        />
      </div>
      <div>
        <Heading>
          Cotiza Crypto Monedas al Instante
        </Heading>
        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCryptoMoneda={guardarCryptoMoneda}
        />
        {componente}
      </div>
    </Contenedor>
  );
}

export default App;
