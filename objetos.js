const obj = {
    nombre: 'Gabriel',
    apellido: 'Caballero',
    edad: 42,
    isDeveloper: 'true',
    altura: 1.92, 
}
console.log(obj.edad);


const listaMia = [
    {nombre: 'Gabriel', apellido: 'Caballero', edad: 42, isDeveloper: 'true', altura: 1.92 },
]
const listaAmigos = [   
    {nombre: 'Marito',  apellido: 'Ayala', edad: 43, isDeveloper: 'false', altura: 1.85 },
    {nombre: 'Guillermo',  apellido: 'Alonso', edad: 40, isDeveloper: 'false', altura: 1.90 },
]

const lista = [...listaMia, ...listaAmigos]
lista.sort( (a, b) => a.edad - b.edad )
console.log(lista)
