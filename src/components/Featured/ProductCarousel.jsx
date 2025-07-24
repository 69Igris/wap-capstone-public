export default function ProductCarousel({ products, onAddToCart }) {
  return (
    <div className="product-carousel">
      <div className="carousel-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image || "/placeholder.svg?height=200&width=200&query=sneaker product"}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-title">{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <p className="product-description">{product.description}</p>
              <button className="view-button" onClick={onAddToCart}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

