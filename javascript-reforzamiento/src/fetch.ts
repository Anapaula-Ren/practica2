/*export const getProduct = () => {
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));
}*/

interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}
export async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products')
 
    if(!response.ok) {
        console.error('La peticion fallo')
    }
    //const products = await response.json()
    const products: Product[] = await response.json()
    return products;
}

export async function addProduct(product: ProductDto) {
    
const response = await fetch('https://fakestoreapi.com/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(product)
})
if (!response.ok) {
    console.error('La peticion fallo')  
} 
const porductresponse = await response.json()
return porductresponse;
}

interface ProductDto {
    title: string,
    price: number
}

/*export function updateProduct(){
    const product = { title: 'Updated Product', price: 39.99 };
fetch('https://fakestoreapi.com/products/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(product)
})
  .then(response => response.json())
  .then(data => console.log(data));
}*/

export async function updateProduct(product:number, porductUpdate: ProductUpdateDto) {
    
    const response = await fetch('https://fakestoreapi.com/products/${productId}', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },        

  body: JSON.stringify(porductUpdate)
})
  if(!response.ok){
    console.error('La peticion fallo')
  }
  const updateResponse = await response.json()
  return updateResponse;
}

interface ProductUpdateDto{
title: string,
    price: number
} 