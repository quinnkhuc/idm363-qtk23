import Header from '../components/Header/Header';

import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firestore'
import uuid from 'react-uuid';
import ProductContainer from '../components/ProductContainer/ProductContainer';

export default function Product(){
    let params = useParams();

    const [product, setProduct] = useState([])

    useEffect(() => {
        const productRef = doc(db, 'products', params.productId);
        onSnapshot(productRef, (doc) => {
            setProduct({ 
                ...doc.data() 
            });
        });
    }, [])

    return(
        <>
            <Header />
            <ProductContainer 
                description={product.description}
                key={uuid()}
                id={product.id}
                name={product.name}
                price={parseFloat(product.price)}
                imgURL={product.imgURL}
            />
        </>
    )
}