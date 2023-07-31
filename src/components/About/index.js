// Write your code here
import Header from '../Header'

import './index.css'

const About = () => (
  <div>
    <Header />
    <div className="about-image-container">
      <img
        className="desktop-about-image"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="About"
      />
    </div>
  </div>
)

export default About
