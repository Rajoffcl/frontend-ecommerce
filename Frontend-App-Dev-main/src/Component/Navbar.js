import logo from "../assets/primechoice-high-resolution-logo-white (1).png";


const Navbar=()=>
    {
return(
<nav className="navbar">
        <div className="align-left top">
          <div className="menu">
            <ul className="menu-links">
              <li><a className="menu-btn" href="/">Home</a></li>
              <li><a href="/about/company">About</a></li>
              <li><a href="/offers">Offfers</a></li>
              <li><a href="contact/email">Contact</a></li>
            </ul>
          </div>
        </div>
        <a href="/AdminSignin"><img src={logo} alt="Logo" className="navbar-logo" /> {/* Logo Image */}</a>
        <div className="align-right top">
          <div className="search-container">
                    <div className='sig'>
                    <ul className="menu-links">
                    <li><a href="/signin">SignIn</a></li>
                    </ul>
                    </div>
          </div>
        </div>
      </nav>
);
    };
    export default Navbar;