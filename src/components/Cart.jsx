const Cart = ({ cart, removeFromCart }) => {
    return (
      <div className="p-5 bg-gray-100">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center my-2">
                <div>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                 </div>
              <p>
                ${item.price} x {item.quantity} = ${item.price * item.quantity}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-2 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default Cart;
  