import { useDispatch } from 'react-redux';
import { update_product_name, update_product_price } from '../../features/product';
import { update_cart_item_name, update_cart_item_price } from '../../features/cart';
import PropTypes from 'prop-types';

import './Form.scss';

function Form({id, name, price}){
    const dispatch = useDispatch();

    function updateName(e, id){
        const updated_name = e.target.value;
        dispatch(update_product_name({id, updated_name}));
        dispatch(update_cart_item_name({id, updated_name}));
    }

    function updatePrice(e, id){
        const updated_price = parseFloat(e.target.value);
        dispatch(update_product_price({id, updated_price}))
        dispatch(update_cart_item_price({id, updated_price}))
    }

    return(
        <form>
            <div className='name'>
                <input 
                    name='name'
                    onChange={e => updateName(e, id)}
                    placeholder='Product Name'
                    type='text'
                    value={name}
                />
            </div>
            <div className='price'>
                <input 
                    name='price'
                    onChange={e => updatePrice(e, id)}
                    placeholder='9.99'
                    type='number'
                    value={price}
                />
            </div>
        </form>
    )
}

Form.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number
}

export default Form;