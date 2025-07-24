import React from 'react'
import TestimonialCarousel from './TestimonialCarousel'
import ProductCarousel from './ProductCarousel'
import { useState } from 'react'
import { useEffect } from 'react'
import './common.css'
const Featured = () => {
  const [products, setProducts] = useState([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/c/80ed-2f3e-4225-96c6")
      const data = await response.json()
      // Randomly select 6 products for the featured carousel
      const shuffledProducts = data.sort(() => 0.5 - Math.random())
      const randomProducts = shuffledProducts.slice(0, 6)
      setProducts(randomProducts)
    } catch (error) {
      console.error("Error fetching products:", error)
    }
  }

  const addToCart = () => {
    setCartCount((prev) => prev + 1)
  }

  const sellingPoints = [
    {
      id: 1,
      image: "https://www.darveys.com/blog/wp-content/uploads/2024/03/Luxury-Sneakers-Brands-In-The-World-Banner.jpg",
      title: "Premium Quality Sneakers",
      description:
        "Discover our curated collection of premium sneakers from top brands worldwide. Each pair is carefully selected for quality, comfort, and style.",
      imageLeft: true,
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2JranG75tq4V88rgn-BYpqN9VcM18hydi6A&s",
      title: "Fast & Secure Delivery",
      description:
        "Get your favorite kicks delivered to your doorstep within 2-3 business days. We ensure secure packaging and tracking for every order.",
      imageLeft: false,
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      feedback:
        "Amazing quality sneakers and super fast delivery. Sidekicks has become my go-to store for all my sneaker needs.",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Sarah Chen",
      feedback:
        "Love the variety and authentic products. The customer service is exceptional and the prices are competitive.",
      photo: "https://imageio.forbes.com/specials-images/imageserve/5c928fa04bbe6f52641ab341/0x0.jpg?format=jpg&crop=2124,2123,x980,y756,safe&height=416&width=416&fit=bounds",
    },
    {
      id: 3,
      name: "Mike Rodriguez",
      feedback:
        "Best sneaker shopping experience online. The website is easy to navigate and the product descriptions are detailed.",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy0l8eZ00m6FTJO9Yu3PqzxPnAWEQXYoKZiA&s",
    },
    {
      id: 4,
      name: "Emma Davis",
      feedback:
        "Fantastic collection of limited edition sneakers. SideKicks always has the latest releases before anyone else.",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCYo2bs74WaRm_kasQGefBmvfReOpesp64g&s",
    },
    {id: 5,
      name: "Shawn Mendes",
      feedback:
        "Fantastic collection of limited edition sneakers. SideKicks always has the latest releases before anyone else.",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiONwMmU2G4vWjt-sEOrYE_0gkZ2UfuUM5UA&s",
    }
  ]

  return (
    <div className="home-page">

    
      <section className="featured-products">
        <div className="container">
          {/* <h2 className="section-title">Featured Products</h2> */}
          <ProductCarousel products={products} onAddToCart={addToCart} />
        </div>
      </section>

      <section className="selling-points">
        <div className="container">
          {sellingPoints.map((point) => (
            <div key={point.id} className={`selling-point ${point.imageLeft ? "image-left" : "image-right"}`}>
              <div className="selling-point-image">
                <img src={point.image || "/placeholder.svg"} alt={point.title} />
              </div>
              <div className="selling-point-content">
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

     
     

    </div>
  )
}



export default Featured