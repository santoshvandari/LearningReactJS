// import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav>
      <ul>
        {/* <li> <Link to="#">Home</Link> </li>
        <li> <Link to="#">Services</Link> </li>
        <li> <Link to="#">About</Link> </li>
        <li> <Link to="#">Contact </Link> </li> */}
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Header;


