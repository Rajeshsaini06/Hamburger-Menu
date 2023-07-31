// Write your code here
import Poppup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <div className="container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <Poppup
      modal
      trigger={
        <button
          type="button"
          data-testid="hamburgerIconButton"
          className="hamburger-icon-button"
        >
          <GiHamburgerMenu size={30} />
        </button>
      }
    >
      {close => (
        <div className="modal-container">
          <button
            className="close-button"
            type="button"
            // eslint-disable-next-line react/no-unknown-property
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose size="30" color="#616e7c" />
          </button>
          <ul className="nav-links-list">
            <li className="nav-link-item">
              <Link className="nav-link" to="/" onClick={() => close()}>
                <AiFillHome size="36" />
                <p className="nav-link-content">Home</p>
              </Link>
            </li>
            <li className="nav-link-item">
              <Link className="nav-link" to="/about" onClick={() => close()}>
                <BsInfoCircleFill size="32" />
                <p className="nav-link-content">About</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Poppup>
  </div>
)

export default withRouter(Header)
