import CartWiget from "../CartWidget/CartWidget";
import Brand from "./Brand";
import CategoryItem from "./CategoryItem";
const NavBars = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <Brand />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="APP.JSnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      
             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <CategoryItem category=" Auriculares"/>
              <CategoryItem category=" Teclados"/>
              <CategoryItem category=" Mouses"/>
              <CategoryItem category=" Microfonos"/>
            </ul>
            

            <div class="d-flex">
              <CartWiget />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBars;
