import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import Featured from '../Featured/Featured'
const Hero = () => {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">Step Into Premium Sneaker Culture</h1>
                <p className="hero-description">
                  Discover the latest drops, exclusive collaborations, and iconic classics. 
                  Elevate your style with our curated collection of premium sneakers.
                </p>
                <div className="hero-buttons">
                  <Link to="/about" className="btn btn-primary">Our Story</Link>
                  <Link to="/contactus" className="btn btn-secondary">Contact Us</Link>
                </div>
              </div>
              <div className="hero-image">
                <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Premium Sneakers" />
              </div>
            </div>
          </div>
        </section>

        <section className='featured-products'>
            <h1 className="featured-title">Featured Products</h1>
            <Featured />
        </section>

        <section className="about-section">
          <div className="container">
            <div className="about-content">
              <div className="about-image">
                <img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="KicksVault Store" />
              </div>
              <div className="about-text">
                <h2 className="about-title">Passion For Premium Sneakers</h2>
                <p className="about-description">
                  Founded by sneaker enthusiasts with a passion for quality craftsmanship and design, 
                  KicksVault has grown from a small online store to a respected name in sneaker culture.
                </p>
                <p className="about-description">
                  We pride ourselves on offering authentic products, exceptional service, and a 
                  shopping experience that honors the culture and community around sneakers.
                </p>
                <Link to="/about" className="btn btn-primary">Learn Our Story</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Hero