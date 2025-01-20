import { useState } from "react"

useState

const Login = () => {
    const [Password, setPassword] =useState('')
    const [Email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(Email,Password)

    }

  return (


  

    <>
      <div className='min-h-screen bg-gray-400 flex justify-center p-4 items-center '>
        <div className='w-full max-w-md bg-gradient-to-r from-gray-500 to-gray-700  p-8 rounded-br-xl rounded-tl-xl'>
            <h2 className='font-bold text-2xl text-center mb-2 text-white'>Login</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email" className='block text-lg font-medium text-white'>Email</label>
                    <input type="email" id="email"  placeholder='Enter Your Email' value={Email} onChange={(e) => setEmail(e.target.value)} 
                    className='w-full p-2 border border-blue-200 rounded-lg focus:outline-none'/>
                </div>

                <div  className='mb-4'>
                    <label htmlFor="password" className='block text-lg font-medium text-white'>Password</label>
                    <input type="password" id="password"  placeholder='Enter Your Password'  value={Password} onChange={(e) => setPassword(e.target.value)}
                    className='w-full p-2  border border-blue-200 rounded-lg focus:outline-none'
                    />
                </div>

                <button type='submit'  className='py-3 w-full bg-gradient-to-t from-gray-200 to-gray-500 rounded-lg text-md font-semibold text-white hover:bg-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-gray-500'>Login</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Login
