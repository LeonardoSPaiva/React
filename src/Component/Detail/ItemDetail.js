import ItemCount from "./ItemCount";
import './detail.css';

const ItemDetail = ({ item }) => {
    return (
        
        <div className="ItemDetailContainer">
            <div className="card" style={{ width: '18rem' }}>
                
                <div className="card-body">
                    <img src={item.foto} className="card-img-top" alt="..."  style={{ width: '80%', height: '80%' }}></img>
                    <p className="card-text">{item.category}</p>
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">${item.price}</p>
                    <p className="card-text">Stock({item.stock})</p>
                    <ItemCount stock={item.stock} />                   
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;