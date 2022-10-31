import { useSelector } from "react-redux";
import './Total.scss'

export default function Total(){
    const cart = useSelector((state) => state.cart.value);

    function getTotal(){
        let totalPrice = 0
        cart.forEach(item => {
          totalPrice += item.price * item.quantity
          
        })
        return(Math.round(totalPrice * 100)/100)
    }

    return(
        <p id='total'>
            <span>Total: </span>${getTotal()}
        </p>
    )

}