import "./Navbar.css";
import logo from "../logo1.jpeg"
export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg  nabvar">
  <div className="container-fluid">
    <a className="navbar-brand logoNav" href="#navbar"><img src={logo} alt="logo" /> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link " href="#navbar">Home</a>
        <a className="nav-link" href="#navbar">Features</a>
        <a className="nav-link" href="#footer">Contact</a>
       
      </div>
    </div>
  </div>
</nav>
    </>
  );
}


