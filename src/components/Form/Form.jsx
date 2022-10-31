import { useDispatch } from 'react-redux';
import { update_product_name, update_product_price } from '../../features/product';
import { update_cart_item_name, update_cart_item_price } from '../../features/cart';
import { getDoc, setDoc, doc } from 'firebase/firestore';
import { db } from '../../firestore';
import PropTypes from 'prop-types';

import './Form.scss';


function Form({id, name, price}){
    const dispatch = useDispatch();

    async function handleInputChange(e, id) {
        e.preventDefault()

        const updated_field = e.target.name;
        const updated_value = e.target.value;

        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);
        const docData = docSnap.data()

        if(updated_field === 'name'){
            dispatch(update_product_name({id, updated_value}));
            dispatch(update_cart_item_name({id, updated_value}));

            setDoc(docRef, {
                ...docData,
                name: updated_value
            })
        } else if(updated_field === 'price'){
            dispatch(update_product_price({id, updated_value}))
            dispatch(update_cart_item_price({id, updated_value}))

            setDoc(docRef, {
                ...docData,
                price: parseFloat(updated_value)
            })
        }
    }

    return(
        <form>
            <div className='name'>
                <input 
                    name='name'
                    onChange={e => handleInputChange(e, id)}
                    placeholder='Product Name'
                    type='text'
                    value={name}
                />
            </div>
            <div className='price'>
                <input 
                    name='price'
                    onChange={e => handleInputChange(e, id)}
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