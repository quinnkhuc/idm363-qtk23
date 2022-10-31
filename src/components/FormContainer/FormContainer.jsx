import Form from '../Form/Form'
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';

import './FormContainer.scss';

export default function FormContainer(){
    const products = useSelector((state) => state.product.value);

    return(
        <div id='form-container' className='container'>
          {products.map((product) => (
            <Form
              key={uuid()}
              id={product.id}
              name={product.name}
              price={parseFloat(product.price)}
            />
          ))}
        </div>
    )
}