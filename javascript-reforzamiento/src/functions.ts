const estudiante = {
    name: 'test',
    lastName: 'clase',
//dent d els objetos dse p uede defini funciones
    getFullName: function(){
        console.log(this.name + this.lastName)
    },
// la arrow function no puede acceder a la info de la constante/ objeto
    /*getName: () =>
    {
        console.log(this.name)
    }*/
   getName: function(){
    const name = () => {                      //al estar dentor de una funcion, el arrow funcrion
        return this.name
    }
    return name()
   }
}
console.log (estudiante.getName());

estudiante.getFullName();