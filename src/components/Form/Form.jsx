import './Form.scss';
import { useDispatch, useSelector } from 'react-redux';
import { update_product } from '../../features/product';
import { update_cart } from '../../features/cart';
import PropTypes from 'prop-types';

function Form(product){
    const products = useSelector((state) => state.product.value);
    const cart = useSelector((state) => state.cart.value);

    const dispatch = useDispatch();

    function handleInputChange(e, id){

        //Update product
        const index = products.findIndex(product => product.id === id);

        const state = [...products];

        state[index] = {
            ...state[index],
            [e.target.name]: e.target.value
        }

        dispatch(update_product(state))
        
        //Update cart
        for(let i = 0; i < cart.length; i++){
            console.log(cart[i].id)
            if(id === cart[i].id){
                const cart_state = [...cart];
                cart_state[i] = {
                    ...cart_state[i],
                    [e.target.name]: e.target.value
                }
                dispatch(update_cart(cart_state))
            }
        }
    }


    return(
        <form>
            <div className='name'>
                <input 
                    name='name'
                    onChange={e => handleInputChange(e, product.id)}
                    placeholder='Product Name'
                    type='text'
                    value={product.name}
                />
            </div>
            <div className='price'>
                <input 
                    name='price'
                    onChange={e => handleInputChange(e, product.id)}
                    placeholder='9.99'
                    type='number'
                    value={product.price}
                />
            </div>
        </form>
    )
}

Form.propTypes = {
    product: PropTypes.array
}

export default Form;