import CartWiget from "./CartWidget";
import Brand from "./Brand";
import { Link } from "react-router-dom";
import "./layout.css";

const NavBars = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Brand />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="APP.JSnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li><Link to="/productos/Auriculares">Auriculares</Link></li>
                <li><Link to="/productos/Teclados">Teclados</Link></li>
                <li><Link to="/productos/Mouses">Mouse</Link></li>
                <li><Link to="/productos/Microfonos">Microfonos</Link></li>
                <li><Link to="/productos/Parlantes">Parlantes</Link></li>
            </ul>
            

            <div className="d-flex">
              <CartWiget />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBars;
