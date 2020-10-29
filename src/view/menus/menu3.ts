import { leerTeclado } from '../entradaTeclado'

export const menu3 = async () => {
    let opcion3: number
    console.log('\n')
    console.log('1.- Calcular Kilometros ')
    console.log('2.- Calcular Gastos ')
    console.log('3.- Modificar velocidad ')
    console.log('4.- Modificar tiempo ')
    console.log('5.- Repostar ')
    console.log('0.- Salir ')
    opcion3 = parseInt( await leerTeclado('Seleccione una opcion de nuestro programa') )
    return opcion3
}