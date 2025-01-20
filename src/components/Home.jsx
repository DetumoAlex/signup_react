import { products } from "../Product"
import ProductCart from "../components/ProductCart"

const Home = ({ addToCart}) => {
  return (
    <div className=" mx-5">
      <h1 className="my-5 text-3xl">List Products</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {products.map((Product, key) => (
        <ProductCart key={key} data={Product} addToCart={addToCart}/>
        ))}
      </div>
      
    </div>
  )
}

export default Home

