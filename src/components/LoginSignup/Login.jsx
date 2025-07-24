
import { useState } from "react"
import { Link } from "react-router-dom"
import './LogSig.css'


export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      console.log("Login attempt:", formData)
      alert("Login functionality will be implemented soon!")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="auth-page">

      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Welcome Back</h1>
            <p>Sign in to your SideKicks account</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                />
                <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <Link href="/forgot-password" className="forgot-link">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="auth-button" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="auth-divider">
            <span>or</span>
          </div>

          <div className="social-login">
            <button className="social-button google">
              <span>Continue with Google</span>
            </button>
            <button className="social-button facebook">
              <span>Continue with Facebook</span>
            </button>
          </div>

          <div className="auth-footer">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="auth-link">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
