import PropTypes from 'prop-types';
import { useDispatch} from 'react-redux';
import { remove_from_cart } from '../../features/cart';

import './CartItem.scss'

export default function CardItem({id, name, price, quantity=0}){
    const dispatch = useDispatch();

    function removeItem(id){
        dispatch(remove_from_cart(id));
    }

    return(
        <div className='cart-item'>
            <div className='item-details'>
                <p> 
                    <span className='name'>{name}</span>
                    <span className='price'>${price}</span>
                    <span className='quantity'>{quantity}</span>
                </p>
            </div>
            <button onClick={() => removeItem(id)}>Remove</button>
        </div>
    )
}

CardItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
}