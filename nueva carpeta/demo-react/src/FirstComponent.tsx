interface EstudianteProps{
  name: string;
  lastName: string;
  age: number;
}



export const FirstComponent = ({name, lastName, age}: EstudianteProps) => {
    // const name:string = 'Eva'
    // const lastName:string = 'Contreras'
    // const age:number = 21
  return (
    <div>
      <h1>{name}</h1>
      <h2>{lastName}</h2>
      <h3>{age}</h3>
    </div>
  )
}
 