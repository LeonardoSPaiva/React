import ItemList from "./ItemList";
import { gFetch } from '../../Moock/Mock';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './item.css';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    
    const category= useParams().category;
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result = await gFetch();
                               
               if (category) {
                    setProducts(result.filter((product) => product.category === category));
                }else{
                setProducts(result);   
                }
                
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchProducts();
    }, [category]);

    return (
        <div>
            <div className="ItemListContainer">
                
                <h3>{category}</h3>
            </div>
            <div>
                <ItemList products= {products}/>
            </div>
        </div>
    );
};

export default ItemListContainer;