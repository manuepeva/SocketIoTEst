import React from 'react'
import {render, screen} from '@testing-library/react'
import Formulario from '../Components/Formulario/Formulario'
import userEvent from '@testing-library/user-event'
import {monedas, cryptos} from '../__mocks__/cryptomonedas'
import axios from 'axios'

const mockAxios = axios

const guardarMoneda = jest.fn()
const guardarCryptoMoneda = jest.fn()
test('<useCryptomonedas />', async() =>{
    // Consumir datos del mock api
    mockAxios.get = jest.fn().mockResolvedValue({
        data: cryptos
    })
    render(
        <Formulario 
        guardarMoneda={guardarMoneda}
        guardarCryptoMoneda={guardarCryptoMoneda}
        />
    )
    // Verificar la cantidad de opciones de monedas
    const monedasDropdown = screen.getByTestId('selectMonedas')
    expect(monedasDropdown.children.length).toEqual(monedas.length + 1)

    // Verificar la cantidad de opciones de cryptomonedas
    const opciones = screen.findAllByTestId('opcion-crypto')
    expect(await opciones).toHaveLength(10)

    expect(mockAxios.get).toHaveBeenCalled()
    expect(mockAxios.get).toHaveBeenCalledTimes(1 )

    // Select cryptomoneda y dólares
    userEvent.selectOptions(screen.getByTestId('selectMonedas'), 'USD')
    userEvent.selectOptions(screen.getByTestId('selectMonedas'), 'BTN')

    // Verificar que las funciones se hayan llamado
    expect(guardarMoneda).toHaveBeenCalled()

})
