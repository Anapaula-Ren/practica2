export const ProductForm = () => {
  return (
    <main className="page">
      <div className="container">
        <section className="card" aria-labelledby="product-form-title">
          <header className="card__header stack stack--tight">
            <span className="badge badge--primary">
              Nuevo producto
            </span>

            <h1 id="product-form-title">Registrar producto</h1>

            <p className="text-muted">
              Completa la información para agregar un producto al catálogo.
            </p>
          </header>

          <form className="stack">
            <div className="grid">
              <div className="form-group">
                <label htmlFor="title">Título</label>

                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Ej. Monitor ultrawide"
                  autoComplete="off"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Categoría</label>

                <select
                  id="category"
                  name="category"
                  required
                >
                  <option value="" disabled>
                    Selecciona una categoría
                  </option>

                  <option value="electronics">Electrónica</option>
                  <option value="home">Hogar</option>
                  <option value="clothing">Ropa</option>
                  <option value="other">Otra</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Descripción</label>

              <textarea
                id="description"
                name="description"
                placeholder="Describe las características principales del producto"
                rows={5}
                required
              />

              <small className="form-help">
                Incluye detalles que ayuden a identificar el producto.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="price">Precio</label>

              <input
                id="price"
                name="price"
                type="number"
                min="0.01"
                step="0.01"
                inputMode="decimal"
                placeholder="0.00"
                aria-describedby="price-help"
                required
              />

              <small id="price-help" className="form-help">
                Ingresa el precio en MXN.
              </small>
            </div>

            <footer className="card__footer cluster cluster--spread">
              <button className="btn btn--secondary" type="reset">
                Limpiar
              </button>

              <button className="btn btn--primary" type="submit">
                Guardar producto
              </button>
            </footer>
          </form>
        </section>
      </div>
    </main>
  );
};