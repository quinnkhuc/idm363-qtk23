import './ProductCard.scss';

function ProductCard(product){
    return(
        <div className='product'>
            <img src={product.imgURL} alt={product.name + ' Image'}></img>
            <p className='name'>{product.name}</p>
            <p className='price'>{product.price}</p>
            <button>Add to Cart</button>
        </div>
    )
}

export default ProductCard