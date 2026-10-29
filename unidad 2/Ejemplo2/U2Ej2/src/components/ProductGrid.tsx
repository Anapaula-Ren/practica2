import type {ProductItem} from '../types/ProductItem'


const currency = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'USD',
})


interface ProductGridProps{
  products: ProductItem[]
}
export function ProductGrid({ products }: ProductGridProps) {
  const productEntries = Object.entries(products)

  return (
    <section className="catalog" aria-labelledby="catalog-title">
      <div className="catalog__header">
        <h2 id="catalog-title">Productos agregados</h2>
        <p>
          {productEntries.length === 1
            ? '1 producto en el catálogo'
            : `${productEntries.length} productos en el catálogo`}
        </p>
      </div>

      <ul className="product-grid">
        {productEntries.map(([id, product]) => (
          <li key={id} className="product-card">
            <h3>{product.name}</h3>
            <p className="product-card__description">{product.description}</p>
            <dl className="product-card__meta">
              <div>
                <dt>Precio</dt>
                <dd>{currency.format(product.price)}</dd>
              </div>
              <div>
                <dt>Stock</dt>
                <dd>{product.stock}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </section>
  )
}
