const estudiantes = {
    name: 'test',
    lastName: 'test2',
    age: 30
}
//en lugar de esto

/*const name=estudiantes.name
const lastName=estudiantes.lastName
const age=estudiantes.age*/

//con la desestruturacion se puede

const{name, lastName, age} = estudiantes
console.log(name, lastName, age)
const numbers = [1,2,3]
const [a,b] = numbers
console.log(a,b)


const materia = {
    semestre: 8,
    nombre: 'quimica',
    turno: 'M'
}

//si le quiero agragar una pripoedad a la materia pero  el objeto tiene que pasar por una funcion .
//si no hacems una copai dle objeto al mdoificarl la nueva propiedad modificamso el objeto oirginal cuando no necesarimemte se usa eso
//

const materiaModificada= materia
materiaModificada['maestro'] = 'pepe'
console.log(materia, materiaModificada) //el objeto original se modifico por que se le agrego una propiedad al objeto modificado

const materiModificada2 =
{
    ...materia
}
console.log(materiModificada2)
console.log(materia)

const materias = ['quimica', 'historia', 'mate']
const materiaModificas = materias
materiaModificas.push('geografia')
console.log(materias, materiaModificas)

const materiasModificas2 = [
    ...materias,
    'deportes'
]
console.log(materias, materiasModificas2)