const CardItem = () => {

return(
    <div className="card" style={{ width: '18rem' }}>
        <img src="..." class="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Descripcion</p>
            <p className="card-text">Descripcion</p>
            <p className="card-text">Descripcion</p>
            <a href="APP.JS" className="btn btn-primary">-</a>
            <a href="APP.JS" className="btn btn-primary">Add Cart</a>
            <a href="APP.JS" className="btn btn-primary">+</a>
        </div>
    </div>
)


}
export default CardItem;