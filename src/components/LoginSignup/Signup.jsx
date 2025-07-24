import { Link } from "react-router-dom"
import { useState } from "react"
import './LogSig.css'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters"
    }

    if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters"
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      console.log("Signup attempt:", formData)
      alert("Account created successfully! Please check your email to verify your account.")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="auth-page">

      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Create Account</h1>
            <p>Join SideKicks and discover amazing sneakers</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your first name"
                  className={errors.firstName ? "error" : ""}
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your last name"
                  className={errors.lastName ? "error" : ""}
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
              </div>
            </div>

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
                  placeholder="Create a password"
                  className={errors.password ? "error" : ""}
                />
                <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="password-input">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password"
                  className={errors.confirmPassword ? "error" : ""}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>
                  I agree to the{" "}
                  <Link href="/terms" className="terms-link">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="terms-link">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            <button type="submit" className="auth-button" disabled={isLoading}>
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className="auth-divider">
            <span>or</span>
          </div>

          <div className="social-login">
            <button className="social-button google">
              <span>Sign up with Google</span>
            </button>
            <button className="social-button facebook">
              <span>Sign up with Facebook</span>
            </button>
          </div>

          <div className="auth-footer">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="auth-link">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
