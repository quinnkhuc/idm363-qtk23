import './Form.scss';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../features/product';

function Form(product){
    const products = useSelector((state) => state.product.value);
    const dispatch = useDispatch();

    function handleInputChange(e){
        let state = [...products];
        state[e.target.id] = {
            ...product,
            [e.target.name]: e.target.value,
        };
        dispatch(update(state));
    }

    return(
        <form>
            <div className='name'>
                <input 
                    id={product.id}
                    name='name'
                    onChange={event => handleInputChange(event)}
                    placeholder='Product Name'
                    type='text'
                    value={product.name}
                />
            </div>
            <div className='price'>
                <input 
                    id={product.id}
                    name='price'
                    onChange={event => handleInputChange(event)}
                    placeholder='9.99'
                    type='number'
                    value={product.price}
                />
            </div>
        </form>
    )
}

export default Form;