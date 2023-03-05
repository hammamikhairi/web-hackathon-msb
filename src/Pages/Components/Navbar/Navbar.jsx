import { Link } from "react-router-dom";
import "./navbar.sass";

const NavbarPhantom = () => <div  id="phantom"></div>

const MainNavbar = () => {



  return (
    <div id="navbar" className="navbar-container"  >
      <div className="navbar">
        <div className="logo">
          <Link to="/home"><h1 id="logo" onClick={ () => { window.scrollTo(0, 0) }}>TERIAK</h1></Link>
        </div>
        <ul className="links">
          <li className="bilink"><Link to="/home">Search</Link></li>
          <li className="bilink"><Link to="/home">History</Link></li>
          <li className="bilink"><Link to="/home">Profile</Link></li>
        </ul>
      </div>
    </div>
  );
}

const Navbar = () =>
  <>
    <MainNavbar />
    <NavbarPhantom />
  </>

export default Navbar