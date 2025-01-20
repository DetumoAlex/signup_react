import { RiShoppingCartLine } from "react-icons/ri";


const ProductCart = (props) => {
    const {id, name, price, image} = props.data;
    const {addToCart} = props;

  return (
    <div className="bg-white p-5 rounded-xl shadow-lg mx-5 ">
     <img src={image} alt="{name}" />
     <h3 className="text-2xl py-3 text-center font-medium uppercase">{name}</h3>

     <div className="flex justify-between items-center">
        <p className="text-2xl font-medium">
            $<span>{price}</span>
        </p>
        <button 
            onClick={() => addToCart({id, name, price,image})}
        className="bg-gray-300 p-2 rounded-lg text-sm hover:bg-gray-500 flex"><RiShoppingCartLine size={20}/> Add To Cart</button>
     </div>
    </div>
  )
}

export default ProductCart
