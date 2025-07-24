import { useState } from "react"

export default function FAQ() {
  const [openItems, setOpenItems] = useState({})

  const faqItems = [
    {
      id: 1,
      question: "Are all products authentic?",
      answer:
        "Yes, we guarantee 100% authenticity on all our products. Each item goes through our verification process.",
    },
    {
      id: 2,
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unworn items in original packaging with tags attached.",
    },
    {
      id: 3,
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide. Shipping costs and delivery times vary by location.",
    },
    {
      id: 4,
      question: "How can I track my order?",
      answer: "Once your order ships, you will receive a tracking number via email to monitor your package.",
    },
  ]

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="faq-section">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqItems.map((item) => (
          <div key={item.id} className="faq-item">
            <button className="faq-question" onClick={() => toggleItem(item.id)}>
              {item.question}
              <span className={`faq-icon ${openItems[item.id] ? "open" : ""}`}>+</span>
            </button>
            {openItems[item.id] && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
