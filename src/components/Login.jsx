import React from 'react'
import Menu from './Menu'
import Navbar from './Navbar'
import Footer1 from './Footer1'
import FooterLast from './FooterLast'

const Login = () => {
  return (
    <>
    <Navbar/>
    <Menu/>
    <div className='bg-gradient-to-r from-[#0FC7B4] to-[#28D695]'>
        <div className='container w-full h-40  flex justify-center items-center text-white'>
            <div className='flex justify-center items-center flex-col leading-13'>
            <div className='font-medium text-4xl'>My account</div>
            <div>Home / My Account</div>
            
        </div>
        </div>
            
    <div className="bg-blue-50 flex items-center justify-center p-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Login Section */}
        <div className="p-8 rounded-xl">
          <h2 className="text-3xl font-semibold mb-6">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Username or email address *</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-sm px-4 py-1 bg-white mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700">Password *</label>
              <input
                type="password"
                className="w-full rounded-sm px-4 border border-gray-300 py-1 bg-white mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#e96e4f] to-[#f14114] text-sm text-white px-3 py-1 rounded-xs "
            >
              Log in
            </button>
            <div className="flex items-center mt-2">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-700">Remember me</label>
            </div>
            <div className="mt-2">
              <a href="#" className="text-gray-500">Lost your password?</a>
            </div>
          </form>
        </div>

        {/* Register Section */}
        <div className="p-8 rounded-xl">
          <h2 className="text-3xl font-semibold mb-6">Register</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Username *</label>
              <input
                type="text"
                className="w-full border border-gray-300 bg-white  rounded-md px-4 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email address *</label>
              <input
                type="email"
                className="w-full border border-gray-300 bg-white rounded-md px-4 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700">Password *</label>
              <input
                type="password"
                className="w-full border border-gray-300 bg-white rounded-md px-4 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <p className="text-[12px] text-gray-400 leading-5">
              Your personal data will be used to support your experience throughout this website,
              to manage access to your account, and for other purposes described in our privacy policy.
            </p>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#e96e4f] to-[#f14114] text-sm text-white px-3 py-1 rounded-xs "
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
    <Footer1/>
    <FooterLast/>
    </>
  )
}

export default Login