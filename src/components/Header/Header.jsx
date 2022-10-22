import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
    return (
        <header>
            <div id='logo'>
                <Link to='/'>PARADISA</Link>
            </div>
            <nav>
                <Link to='/cart'>Cart</Link>
                <Link to='/admin'>Admin</Link>
            </nav>
        </header>
    );
}