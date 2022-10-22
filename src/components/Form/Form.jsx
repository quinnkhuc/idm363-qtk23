import './Form.scss';

function Form(product){
    return(
        <form>
            <div className='name'>
                <input 
                    name='product_name'
                    placeholder='Product Name'
                    type='text'
                    value={product.name}
                />
            </div>
            <div className='price'>
                <input 
                    name='price'
                    placeholder='9.99'
                    type='number'
                    value={product.price}
                />
            </div>
        </form>
    )
}

export default Form;