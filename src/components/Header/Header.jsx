import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Header.scss';

export default function Header() {
    const cart = useSelector((state) => state.cart.value);

    function getCartQuantity(){
        let total = 0;
        cart.forEach(item => {
            total += item.quantity;
        })
        return total;
    }

    return (
        <header>
            <div id='logo'>
                <Link to='/'>PARADISA</Link>
            </div>
            <nav>
                <NavLink to='/cart' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Cart ({getCartQuantity()})</NavLink>
                <NavLink to='/admin' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Admin</NavLink>
            </nav>
        </header>
    );
}