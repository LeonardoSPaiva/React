import { gFetchId } from '../../Moock/Mock';
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import './detail.css';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const itemId = useParams().id;
    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const result = await gFetchId(Number(itemId));
                setItem(result);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };
 
        fetchDetail();
    }, [itemId]);

    return (
        <div className='ItemDetailContainer'>
            {item&&   <ItemDetail item= {item}/>}
            
        </div>
    );
};

export default ItemDetailContainer;