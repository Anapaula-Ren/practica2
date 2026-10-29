import '../src/design-system.css'
import { ProductForm } from './components/ProductForm'
import { ProductGrid } from './components/ProductGrid'
import {useProducts} from './hooks/useProducts'
 
function App() {
 
  const {productsState, addProductAction, isLoadedAction, inputProductNameRef} = useProducts()
 
  return (
    <>
      <h1>Catalogo de productos</h1>
      <ProductForm addProductAction={addProductAction} isPending={isLoadedAction} inputProductNameRef={inputProductNameRef} />
      <ProductGrid products={productsState} />
    </>
  )
}
 
export default App
 