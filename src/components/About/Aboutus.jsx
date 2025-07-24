import React from 'react';
import './Aboutus.css';
import TeamCarousel from './TeamCarousel';
const Aboutus = () => {
  return (
    <div className="about-container">
        <h1>About <span className="highlight">SideKicks</span></h1>
       
      <div className="our-story">
        <img src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Sneakers" />
        <div className="story">
            <h2 className='title'>Our <span className="highlight">Story</span></h2>
            <p>SideKicks was born from the passion of three lifelong friends and sneaker collectors who wanted to create a premium destination for fellow sneakerheads. What began as a small online store in 2015 has evolved into a respected name in the sneaker community.</p>
            <p>Our founders, Michael, Sarah, and James, combined their expertise in fashion, retail, and design to build a brand that celebrates sneaker culture while providing exceptional customer experience and authentic products.</p>
        </div>
      </div>
      <section className="about-section mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission">
            <h2 className='title' >Our <span className="highlight">Mission</span></h2>
              <p>
                To provide sneaker enthusiasts with access to authentic, high-quality footwear while fostering a
                community that celebrates sneaker culture and individual style.
              </p>
            </div>
            <div className="vision">
            <h2 className='title'>Our <span className="highlight">Vision</span></h2>
              <p>
                To become the world's most trusted and comprehensive platform for sneaker enthusiasts, connecting people
                through their shared passion for exceptional footwear.
              </p>
            </div>
          </div>
        </div>
      </section>

    
      <section>
        <h2 className='title'>Our <span className="highlight">Values</span></h2>
        <div className="values">
          <div>
          <i className="fas fa-check-circle" style={{color:'#ff4365'}}></i>
            <h3 className='title'>Authenticity</h3>
            <p>We guarantee 100% authentic products, verified by our expert team.</p>
          </div>
          <div>
          <i className="fas fa-heart" style={{color:'#ff4365'}}></i>
            <h3 className='title'>Passion</h3>
            <p>Our team lives and breathes sneaker culture, ensuring knowledgeable service.</p>
          </div>
          <div>
            <i className="fas fa-users" style={{color:'#ff4365'}}></i>
            <h3 className='title'>Community</h3>
            <p>We're building a vibrant community of sneaker enthusiasts around shared passion.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className='title'>Meet <span className="highlight">Our Team</span></h2>
        <div className="team">
          <div>
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Michael Thompson" />
            <h3 className='num'>Michael Thompson</h3>
            <p className="highlight">Co-Founder & CEO</p>
            <p>Sneaker collector for over 15 years with expertise in rare and vintage models.</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Sarah Johnson" />
            <h3 className='num'>Sarah Johnson</h3>
            <p className="highlight">Co-Founder & Creative Director</p>
            <p>Former fashion designer with an eye for trends and emerging styles.</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="James Wilson" />
            <h3 className='num'>James Wilson</h3>
            <p className="highlight">Co-Founder & Head of Operations</p>
            <p>Tech expert who built our authentication and inventory systems.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Aboutus;
