import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useContext} from "react"
import { cartContext } from "../../context/cartContext";
/* import MyButton from "../MyButton/MyButton";
import { Link } from "react-router-dom"; */

function ItemDetail({product}) {
     const { addToCart } = useContext(cartContext);

  function onAddToCart(count) {
    alert(`Agregaste ${count} items al carrito!`);
    /* setState(count) */
    addToCart(product, count);
  }
    return (
        <div className="card__detail">
            <div className="card__detail__img">
                <img src={product.imgurl} alt="Product img" />
            </div>
            <div className="card__detail__description">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h4 className="price">$ {product.price}</h4>
            </div>
                <ItemCount onAddToCart={onAddToCart} stock={product.stock}  />
        </div>
    )
}

export default ItemDetail