import { useState } from 'react'
import type { Product } from '../components/ProductCards'

export const useProduct = () => {
const [title, setTitle] = useState('')
const [category, setCategory] = useState('')
const [description, setDescription] = useState('')
const [price, setPrice] = useState(0.0)
const [products, setProducts] = useState<Product[]>([])

const handleCreateProduct = () => {
  const newProduct: Product = {
    id: Date.now().toString(),
    titulo: title,
    categoria: category,
    descripcion: description,
    precio: price
  }
  setProducts([...products, newProduct])
  setTitle('')
  setCategory('')
  setDescription('')
  setPrice(0.0)
}
  
    return {
    title,
    setTitle,
    category,
    setCategory,
    description,
    setDescription,
    price,
    setPrice,
    products,
    setProducts,
    handleCreateProduct
  }
}
