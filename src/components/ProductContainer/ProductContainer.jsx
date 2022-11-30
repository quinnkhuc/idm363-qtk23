import './ProductContainer.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { add_to_cart } from '../../features/cart';

export default function ProductContainer({description, id, name, price, imgURL}){
    const dispatch = useDispatch();

    function addToCart(id, name, price){
        dispatch(add_to_cart({
            id, name, price
        }));
    }

    return(
        <div className='container' id='product'>
            <img src={imgURL} alt={name + ' Image'}></img>
            <div>
                <p className='name'>{name}</p>
                <p className='price'>${price}</p>
                <p className='description'>{description}</p>
                <button onClick={() => addToCart(id, name, price)}>Add to Cart</button>
            </div>
        </div>
    )
}

ProductContainer.propTypes = {
    description: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    imgURL: PropTypes.string
}