    import React, {useState} from 'react';
    import './detail.css';

    const ItemCount = ({stock}) => {
    
        const [count, setCount] = useState(1);

        const handleRestar = () => {
            if (count > 1) {
                setCount(count - 1)
            }
        }

        const handleSumar = () => {
            if (count < stock) {
                setCount(count + 1)
            }
        }


    const handleAdd = () => {
        console.log({count})
    }

    return (
        <div>
            <div>
                <div className="item-count-container">
                    <button className="btn btn-primary item-count-button" onClick={handleRestar}>-</button>
                    <p className="card-text item-count-display">({count})</p>
                    <button className="btn btn-primary item-count-button" onClick={handleSumar}>+</button>
                </div>
                <div className="add-button-container">
                    <button className="btn btn-primary add-button" onClick={handleAdd}>Agregar</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;