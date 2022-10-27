import { useSelector } from 'react-redux';
import './CartContainer.scss';
import uuid from 'react-uuid';
import Total from '../Total/Total';
import CardItem from '../CartItem/CartItem';

export default function CartContainer(){
    const cart = useSelector((state) => state.cart.value);

    return(
        <div id='cart-container' className='container'>
            <div>
                {cart.map((item) => (
                <CardItem
                    key={uuid()}
                    id={item.id}
                    name={item.name}
                    price={item.price} 
                    quantity={item.quantity}
                />
                ))}
            </div>
            <Total />
        </div>
    )
}