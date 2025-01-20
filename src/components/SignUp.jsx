import { useState } from "react"

useState 

const SignUp = () => {
    const [Username, setUsername] =useState('') 
    const [Password, setPassword] =useState('')
    const [Email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(Username,Email,Password)

    }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-orange-100 to-gray-300 flex justify-center items-center p-4 ">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center mb-6">SignUp</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-4 ">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                        <input type="text" id="username" name="username" placeholder="Enter Your Username" value={Username} onChange={(e) => setUsername(e.target.value) }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter Your Email Address" value={Email} onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter Your Paasword" value={Password} onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button type="submit" 
                    className="w-full py-3 bg-blue-500 font-semibold text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ">SignUp</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
