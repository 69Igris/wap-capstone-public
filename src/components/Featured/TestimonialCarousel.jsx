import './common.css'
export default function TestimonialCarousel({ testimonials }) {
  return (
    <div className="testimonial-carousel">
      <div className="testimonial-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.photo || "/placeholder.svg"} alt={testimonial.name} className="testimonial-photo" />
            <div className="testimonial-content">
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}