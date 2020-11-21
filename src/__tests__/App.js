import React from 'react'
import Formulario from '../Components/Formulario/Formulario'
import {render} from '@testing-library/react'

test('La app funciona y no se cierra', () => {
    render(
        <Formulario />
    )
})