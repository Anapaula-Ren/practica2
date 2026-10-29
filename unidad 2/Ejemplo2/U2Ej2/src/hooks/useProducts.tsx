import {useActionState, useRef} from 'react'
import type {ProductItem } from '../types/ProductItem'
 
const initialState: ProductItem [] = []
 
const useProducts = () => {
    const inputProductNameRef = useRef<HTMLInputElement> | null>(null)
    const ProductAction = async (prevState:ProductItem[], formData:FormData):Promise<ProductItem[]> => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    inputProductNameRef.current?.focus()
    return [
            ...prevState,
            {
                id: crypto.randomUUID(),
                name: formData.get('name') as string,
                description: formData.get('description') as string,
                price: Number.parseFloat(formData.get('price')?.toString()??'0'),
                stock: Number.parseInt(formData.get('stock')?.toString()??'0'),
            }
        ]
}
const [productsState, addProductAction, isLoadedAction] = useActionState(ProductAction, initialState)
    return{
        productsState,
        addProductAction,
        isLoadedAction,
        inputProductNameRef
    }
}
 
export default useProducts