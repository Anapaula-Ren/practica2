// rafc + tab
import './design-system.css'
// import {MainComponent} from './MainComponent.tsx'
// import {ProductCard} from './components/ProductCard.tsx'
// import {StudentCard} from './components/StudentCard.tsx'
// import { products } from './data/products.tsx'
// import { students } from './data/student.tsx'
// import { StudentCard } from './components/StudentCard.tsx'
//import { Contador } from './components/Contador.tsx'
import { AddProduct } from './components/AdProduct.tsx'
 
export const App = () => {
  return (
    <main className="App">
      <div className="container stack">
        <section className="stack">
          {/*<MainComponent cualMaestro={2} />*/}
          {/* <StudentCard /> */}
          {/* <ProductCard /> */}
          {/* { products.map(product=>(
            <ProductCard product = {product} />
          ))}
          <br />
          <h2>Estudiantes</h2>
          {
            students.map(student=>(
              <StudentCard student = {student} />
            ))
          } */}
         {/*<Contador/>*/}
         <AddProduct/>
        </section>
      </div>
    </main>
  )
}
 
 


/*import './desing-system.css'
//import {FirstComponent} from './FirstComponent.tsx'
//import { MainComponent } from './MainComponent.tsx'
import { ProductCards } from './components/ProductCards.tsx'
import { StudentCard } from './components/StudentCard.tsx'
 
export const App = () => {
  return (
    <main className="page">
      <div className="container_stack">
        <section className="stack">
          <ProductCards/>
          <StudentCard/>
        </section>
      </div>
    </main>
  )
}*/
 