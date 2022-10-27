import ProductCard from '../ProductCard/ProductCard';
import { useSelector } from "react-redux";
import './Catalog.scss';
import uuid from 'react-uuid';

export default function Catalog(){
    const products = useSelector((state) => state.product.value);

    return(
        <div id="catalog" className='container'>
            {products.map((product) => (
            <ProductCard
                key={uuid()}
                id={product.id}
                name={product.name}
                price={product.price}
                imgURL={product.imgURL}
            />
            ))}
        </div>
    )
}