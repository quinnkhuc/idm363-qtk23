import CardItem from '../CartItem/CartItem';
import { useSelector } from 'react-redux';
import './CartContainer.scss';
import uuid from 'react-uuid';

export default function CartContainer(){
    const cart = useSelector((state) => state.cart.value);

    let total = 0;

    for(let i=0; i < cart.length; i++){
        total = Math.round((total + cart[i].price) * 100) / 100;
    }

    return(
        <div id='cart-container' className='container'>
            <div>
                {cart.map((item) => (
                <CardItem
                    key={uuid()}
                    index={cart.map(item => item.name).indexOf(item.name)}
                    name={item.name}
                    price={item.price} 
                />
                ))}
            </div>
            <div>
                <p>{total > 0 ? 'Total: '+ total : 'Cart is Empty'}</p>
            </div>
        </div>
    )
}