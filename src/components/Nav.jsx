import { GiWarlockHood } from "react-icons/gi"
import { RiShoppingCartLine } from "react-icons/ri"
import { Link } from "react-router-dom"


const Nav = ({cart}) => {
    const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <nav className="w-full py-4 px-10 flex justify-between items-center shadow-sm">
        <div className="text-2xl font-bold ">
            <Link to='/home' className="flex justify-center items-center underline">LockIT <GiWarlockHood/></Link>
        </div>

        <div className="flex items-center gap-6">
           <Link to='/signup' className="font-semibold hover:bg-gray-400 w-[70px] text-center rounded-lg h-[30px] hover:text-white">Signup</Link>
           <Link to='login' className="font-bold text-xl border w-[70px] text-center rounded-lg">Login</Link>
                <Link to='/cart' className='relative' aria-label="shopping cart" ><RiShoppingCartLine size={30}/>
                {itemCount > 0 && (
                    <span className="absolute top=1/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
                        {itemCount}
                    </span>
                )}
                
                </Link>
         </div>
        

      </nav>
    </>
  )
}

export default Nav
