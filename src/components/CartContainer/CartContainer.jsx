import CardItem from '../CartItem/CartItem';
import { useSelector } from 'react-redux';
import './CartContainer.scss';
import uuid from 'react-uuid';

export default function CartContainer(){
    const cart = useSelector((state) => state.cart.value);
    const products = useSelector((state) => state.product.value);

    const items = [];
    
    for(let i  = 0; i < cart.length; i++){
        for(let a = 0; a < products.length; a++){
            if(cart[i] === products[a].id){
                const item = {
                    name: products[a].name,
                    price: products[a].price*1
                }
                items.push(item);
            }
        }
    }

    let total = 0;

    for(let i=0; i < items.length; i++){
        total = Math.round((total + items[i].price) * 100) / 100;
    }

    return(
        <div id='cart-container' className='container'>
            <div>
                {items.map((item) => (
                <CardItem
                    key={uuid()}
                    index={items.map(item => item.name).indexOf(item.name)}
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