import type {RefObject} from 'react'

type ProductFormProps ={
  addProductAction: (formData: FormData) => void
  isPending: boolean,
  inputProductNameRef: RefObject<HTMLInputElement|null>
}
 
export function ProductForm({addProductAction, isPending, inputProductNameRef}: ProductFormProps) {
 
  return (
    <form className="product-form" action={addProductAction}>
      <div className="product-form__intro">
        <h2>Nuevo producto</h2>
        <p>Completa los datos para registrar un producto.</p>
      </div>
 
      <div className="product-form__fields">
        <div className="field">
          <label htmlFor="product-name">Nombre</label>
          <input
            id="product-name"
            name="name"
            type="text"
            placeholder="Nombre del producto"
            required
            autoComplete="off"
            ref={inputProductNameRef}
          />
        </div>
 
        <div className="field">
          <label htmlFor="product-description">Descripción</label>
          <input
            id="product-description"
            name="description"
            type="text"
            placeholder="Descripción breve"
            required
            autoComplete="off"
          />
        </div>
 
        <div className="field">
          <label htmlFor="product-price">Precio</label>
          <input
            id="product-price"
            name="price"
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00"
            required
          />
        </div>
 
        <div className="field">
          <label htmlFor="product-stock">Stock</label>
          <input
            id="product-stock"
            name="stock"
            type="number"
            min="0"
            step="1"
            placeholder="0"
            required
          />
        </div>
      </div>
 
      <button className="button" type="submit" disabled={isPending}>
        {
          isPending ? 'Agregando Producto...' : 'Agregar producto'
        }
      </button>
    </form>
  )
}