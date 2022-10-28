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
        <>
            <p>{name}</p>
            <p>{price}</p>
            <p>{quantity}</p>
            <button onClick={() => removeItem(id)}>Remove</button>
        </>
    )
}

CardItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
}