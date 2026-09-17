const students =[
    {name: "Juan", numcontrol: 12345, age: 50},
    {name: "Ana", numcontrol: 12346, age: 100},
    {name: "Pedro", numcontrol: 12347, age: 50}
]

const names = students.map(student=> `${student.name},`) //nos pide crear unaontacia o referencia de cada objeto o elememto que queremo recorrer ?
console.log(names) 

const estudiante = students.find(student => student.name == "Juan")
console.log(estudiante)

const someStudent = students.some (student => student.age ==10)
console.log(someStudent)

const todosConEdad50 = students.every (student =>student.age >=50)
console.log(todosConEdad50)

const edadTotal = students.reduce((total, student) => total + student.age,0) // el 0 es pa decire que va sumar numeros
console.log(edadTotal)

//console.log(students.includes())
console.log([1,2,3].includes(2)) //nos dice si el elemento que le pasamos esta dentro del array

//sort ayuda a ordenar lo elementos a partir de una nsoeke
const numbers = [1,4,10,2]
const sortNumebers = numbers.sort((a,b)=>a-b) 
console.log(sortNumebers)//a-b es para ordenarlos de menor a mayor, b-a es para ordenarlos de mayor a menor
