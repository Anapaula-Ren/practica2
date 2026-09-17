//let
//const
//var 
/*var username = 'Juan'
let age = 30
const isActive = false
const sueldo:number = 100

var sueldoActual = 20*/
/*function CalcularSueldo ()
{
  var sueldoActual = 10
  return sueldoActual;
}
console.log(CalcularSueldo())*/

import { divdir, multiplicar, restar } from "./basic_operations";

//USO DE BACKTICKS???
/*const fisrtName = 'Juan'
const lastName = 'Perez'
console.log(`Hola ${fisrtName} ${lastName}`)*/

/*const student = {
    name: 'Juan',
    numControl: 12345,
    age: 30
}*/

/*interface student{
  name:string,
    numControl:number
    age:number
  
}
const mystudent:student = {
  name: 'Juan',
    numControl: 12345,
    age: 35
}
console.log(mystudent)*/

//import "./functions.ts"

//import "./arrays.ts"

//import "./Desestructuracion.ts"

//import "./enums.ts"

//import sumar from './basic_operations.ts'
/*import {sumar, restar, multiplicar, divdir} from './basic_operations'

console.log(sumar(1,2), restar(1,2), multiplicar(1,2), divdir(1,2));*/

/*import {getStudent} from "./promises"

getStudent(true)
  .then(response=>{
    console.log(response)
  })
  .catch(error=> {
    console.log(error)
  })

console.log('hola')*/

import {addProduct, getProducts, updateProduct} from "./fetch"
const products = await getProducts()
console.log(products)

const porduct = {title: 'New Product', price: 100};
console.log(await addProduct(porduct))

const porductUpdate = {title: 'Updated Product', price: 39.99};
console.log(await updateProduct(1, porductUpdate))
//console.log(updateProduct())