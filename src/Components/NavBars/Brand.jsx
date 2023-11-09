
import brandImage from '../../Assets/Brand/brand.png';

const Brand = () => {

    return (
    <div className="d-flex align-items-center text-light" >
    <a class="navbar-brand" href="App.js">
        <img src={brandImage} alt="Bootstrap" width="50" height="50"></img>
    </a>
    <a className= "text-light" href="App.js"><h1>Delta Gamers</h1></a>
    </div>
    )
}
export default Brand;