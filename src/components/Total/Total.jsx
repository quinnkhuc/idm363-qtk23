import { useSelector } from "react-redux";

export default function Total(){
    const cart = useSelector((state) => state.cart.value);

    function getTotal(){
        let totalPrice = 0
        cart.forEach(item => {
          totalPrice += item.price * item.quantity
        })
        return totalPrice
    }

    return(
        <p>Total: ${getTotal()}</p>
    )

}