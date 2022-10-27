import { useDispatch, useSelector } from 'react-redux';
import { update_cart } from '../../features/cart';
import PropTypes from 'prop-types';
import './CartItem.scss'

export default function CardItem(item){
    const cart = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();

    function removeItem(index){
        let state = [...cart];
        state.splice(index, 1);
        dispatch(update_cart(state));
    }

    return(
        <>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button onClick={() => removeItem(item.index)}>Remove</button>
        </>
    )
}

CardItem.propTypes = {
    product: PropTypes.array
}