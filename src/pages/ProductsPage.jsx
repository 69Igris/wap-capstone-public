
import { useState, useEffect } from "react"
import ProductGrid from "../components/ProductGrid"
import FAQ from "../components/FAQ"

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [priceFilter, setPriceFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [brandFilter, setBrandFilter] = useState("all")
  const [sizeFilter, setSizeFilter] = useState("all")
  const [colorFilter, setColorFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [availableTypes, setAvailableTypes] = useState([])
  const [availableBrands, setAvailableBrands] = useState([])
  const [availableSizes, setAvailableSizes] = useState([])
  const [availableColors, setAvailableColors] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    filterProducts()
  }, [products, priceFilter, typeFilter, brandFilter, sizeFilter, colorFilter, searchQuery])

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/c/80ed-2f3e-4225-96c6")
      const data = await response.json()
      setProducts(data)
      setFilteredProducts(data)

      const categories = [...new Set(data.map((product) => product.category).filter(Boolean))]
      const brands = [...new Set(data.map((product) => product.brand).filter(Boolean))]
      const sizes = [...new Set(data.flatMap((product) => product.sizes || []).filter(Boolean))]
      const colors = [...new Set(data.map((product) => product.color).filter(Boolean))]

      setAvailableTypes(categories)
      setAvailableBrands(brands)
      setAvailableSizes(sizes)
      setAvailableColors(colors)
    } catch (error) {
      console.error("Error fetching products:", error)
    }
  }

  const filterProducts = () => {
    let filtered = products

    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    if (priceFilter === "0-50") {
      filtered = filtered.filter((product) => product.price <= 50)
    } else if (priceFilter === "50-100") {
      filtered = filtered.filter((product) => product.price > 50 && product.price <= 100)
    } else if (priceFilter === "100+") {
      filtered = filtered.filter((product) => product.price > 100)
    }

    if (typeFilter !== "all") {
      filtered = filtered.filter((product) => product.category === typeFilter)
    }

    if (brandFilter !== "all") {
      filtered = filtered.filter((product) => product.brand === brandFilter)
    }

    if (sizeFilter !== "all") {
      filtered = filtered.filter((product) => product.sizes && product.sizes.includes(sizeFilter))
    }

    if (colorFilter !== "all") {
      filtered = filtered.filter((product) => product.color === colorFilter)
    }

    setFilteredProducts(filtered)
  }

  const addToCart = () => {
    setCartCount((prev) => prev + 1)
  }

  const clearAllFilters = () => {
    setPriceFilter("all")
    setTypeFilter("all")
    setBrandFilter("all")
    setSizeFilter("all")
    setColorFilter("all")
    setSearchQuery("")
  }

  const handleSearch = (e) => {
    e.preventDefault()
  }

  return (
    <div className="products-page">

      

      <div className="container">
        <h1 className="page-title">Our Products</h1>

        <div className="search-container">
        <div className="container">
          <form className="search-bar" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for sneakers..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>
      </div>

        <div className="filters">
          <div className="filter-row">
            <div className="filter-group">
              <label>Price Range:</label>
              <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)} className="filter-select">
                <option value="all">All Prices</option>
                <option value="0-50">$0 - $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="100+">$100+</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Category:</label>
              <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="filter-select">
                <option value="all">All Categories</option>
                {availableTypes.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Brand:</label>
              <select value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)} className="filter-select">
                <option value="all">All Brands</option>
                {availableBrands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="filter-row">
            <div className="filter-group">
              <label>Size:</label>
              <select value={sizeFilter} onChange={(e) => setSizeFilter(e.target.value)} className="filter-select">
                <option value="all">All Sizes</option>
                {availableSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Color:</label>
              <select value={colorFilter} onChange={(e) => setColorFilter(e.target.value)} className="filter-select">
                <option value="all">All Colors</option>
                {availableColors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <button onClick={clearAllFilters} className="clear-filters-btn">
                Clear All Filters
              </button>
            </div>
          </div>

          <div className="filter-results">
            <p>
              Showing {filteredProducts.length} of {products.length} products
            </p>
            {searchQuery && (
              <p className="search-info">
                {filteredProducts.length > 0
                  ? `Search results for "${searchQuery}"`
                  : `No products found for "${searchQuery}"`}
              </p>
            )}
          </div>
        </div>

        {filteredProducts.length === 0 && products.length > 0 && (
          <div className="no-results">
            <div className="no-results-content">
              <h3>No products found</h3>
              <p>
                {searchQuery
                  ? `Sorry, we couldn't find any products matching "${searchQuery}". Try adjusting your search or filters.`
                  : "No products match your current filters. Try adjusting your selection."}
              </p>
              <button onClick={clearAllFilters} className="clear-filters-btn">
                Clear All Filters
              </button>
            </div>
          </div>
        )}

        {filteredProducts.length > 0 && <ProductGrid products={filteredProducts} onAddToCart={addToCart} />}

        <div className="coming-soon">
          <p>More products coming soon</p>
        </div>

        <FAQ />
      </div>

    </div>
  )
}
