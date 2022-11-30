import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';

export default function NotFound(){
    return(
        <>
            <Header />
            <div className='container' id='not-found'>
                <p>Page not found!</p>
                <Link to='/'>Return to the Homepage</Link>
            </div>
        </>
    )
}