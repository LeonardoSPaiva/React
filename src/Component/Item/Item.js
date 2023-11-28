
import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

const Item = ({ product }) => {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={product.foto} className="card-img-top" alt="..."  style={{ width: '50%', height: '50%' }}></img>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price}</p>
                    <Link className="btn btn-primary" to={`/item/${product.id}`}>Detalle</Link>
                  
                </div>
            </div>
        </div>
    )
}
export default Item;