import { useDispatch } from 'react-redux';
import { add_to_cart } from '../../features/cart';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import './ProductCard.scss';

function ProductCard({id, name, price, imgURL}){
    const dispatch = useDispatch();

    function addToCart(id, name, price){
        dispatch(add_to_cart({
            id, name, price
        }));
    }

    return(
        <div className='product'>
            <Link to={`/product/${id}`}>
                <img src={imgURL} alt={name + ' Image'}></img>
                <p className='name'>{name}</p>
                <p className='price'>${price}</p>
            </Link>
            <button onClick={() => addToCart(id, name, price)}>Add to Cart</button>
        </div>
    )
}

ProductCard.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    imgURL: PropTypes.string
}


export default ProductCard