import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import { useSelector } from 'react-redux';

export default function Header() {
    const cart = useSelector((state) => state.cart.value).length;

    return (
        <header>
            <div id='logo'>
                <Link to='/'>PARADISA</Link>
            </div>
            <nav>
                <NavLink to='/cart' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Cart 
                {cart > 0 ? '('+cart+')' : '' }</NavLink>
                <NavLink to='/admin' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Admin</NavLink>
            </nav>
        </header>
    );
}