
export default function ProductGrid({ products, onAddToCart }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-grid-card">
          <img
            src={product.image || "/placeholder.svg?height=250&width=250&query=sneaker product"}
            alt={product.name}
            className="product-grid-image"
          />
          <div className="product-grid-info">
            <h3 className="product-grid-title">{product.name}</h3>
            <p className="product-grid-price">${product.price}</p>
            <p className="product-grid-desc">{product.description}</p>
            <button className="add-to-cart-button" onClick={onAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}