import {readFileSync} from 'fs'
import path from 'path'

export const cryptos = JSON.parse(
    readFileSync(path.join(__dirname, 'api.json')).toString()
)


export const monedas = [
        { codigo: 'USD', nombre: 'Dolar Americano' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' },
        { codigo: 'PEN', nombre: 'Sol Peruano' }
    ]