import Form from '../Form/Form'
import { useSelector } from 'react-redux';
import './FormContainer.scss';
import uuid from 'react-uuid';

export default function FormContainer(){
    const products = useSelector((state) => state.product.value);

    return(
        <div id='form-container' className='container'>
          {products.map((product) => (
            <Form
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