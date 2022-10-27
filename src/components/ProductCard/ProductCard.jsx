import './ProductCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { update_cart } from '../../features/cart';
import PropTypes from 'prop-types';

function ProductCard(product){
    const cart = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();

    function updateCart(id){
        let item = id;
        let state = [...cart];
        state.push(item);
        dispatch(update_cart(state));
    }

    return(
        <div className='product'>
            <img src={product.imgURL} alt={product.name + ' Image'}></img>
            <p className='name'>{product.name}</p>
            <p className='price'>${product.price}</p>
            <button onClick={() => updateCart(product.id)}>Add to Cart</button>
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.array
}


export default ProductCard