/* ItemList.js */
import Item from './Item';
import './item.css';

const ItemList = ({ products }) => {
  return (
    <div className="row ItemListContainer">
      <h1 className="col-12 text-center">Lista de Productos</h1>

      {products.map(product => (
        <div key={product.id} className="col-md-4 card-container">
          <Item product={product} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
