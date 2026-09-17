import { useState } from "react"
import {type Product} from '../components/ProductCards.tsx'
 
export const AddProduct = () => {
    const [products, setProducts] = useState<Product[]>([])
   
    const handleAddProduct = () =>
    {
        const newProduct: Product =
        {
            id: Date.now().toString(),
            titulo: "Laptop HP 15-dw3003la",
            categoria: "Computadoras",
            descripcion: "Laptop HP 15-dw3003la, Intel Core i5-1135G7, 8GB RAM, 256GB SSD, Windows 11 Home",
            precio: 24999
        }
        setProducts([...products,newProduct])
    }
 
    return (
        <div>
            <button onClick={handleAddProduct}>Add Product</button>
            {
                products.map(product=>
                <ProductCards key={product.id} product = {product}/>)
            }
        </div>
    )
}
 
 