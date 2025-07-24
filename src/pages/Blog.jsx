import NewsletterSignup from "../components/NewsletterSignup"
import './Blog.css'
export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of Sneaker Culture",
      description: "Explore how sneakers transformed from athletic wear to fashion statements and cultural symbols.",
      image: "https://cdn.shopify.com/s/files/1/0705/8373/files/history_1_480x480.jpg?v=1709227618",
      author: "John Smith",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Top 10 Sneaker Releases This Month",
      description: "Discover the most anticipated sneaker drops and limited editions hitting the market.",
      image: "https://sneakernews.com/wp-content/uploads/2022/12/Nike-SNKRS-top10-sneaker-releases-2022-0.jpg",
      author: "Lisa Johnson",
      date: "2024-01-12",
    },
    {
      id: 3,
      title: "How to Style Your Sneakers",
      description: "Learn different ways to incorporate sneakers into your everyday wardrobe for any occasion.",
      image: "https://i.ytimg.com/vi/x83SFKsqF_o/maxresdefault.jpg",
      author: "Mike Chen",
      date: "2024-01-10",
    },
    {
      id: 4,
      title: "Sneaker Care and Maintenance Tips",
      description: "Keep your kicks looking fresh with our comprehensive guide to sneaker care and cleaning.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdLjiA8qWJBtHwgXw5wEI-IRV5BATPRD0ToQ&s",
      author: "Sarah Davis",
      date: "2024-01-08",
    },
  ]

  return (
    <div className="blog-page">

      {/* Blog Hero */}
      <section className="blog-hero">
        <div className="container">
          <h1>KicksVault Blog</h1>
          <p>Stay updated with the latest in sneaker culture, releases, and style tips</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="blog-posts">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="blog-image" />
                <div className="blog-content">
                  <h2 className="blog-title">{post.title}</h2>
                  <p className="blog-description">{post.description}</p>
                  <div className="blog-meta">
                    <span className="blog-author">By {post.author}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <button className="read-more-btn">Read More</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

    </div>
  )
}
