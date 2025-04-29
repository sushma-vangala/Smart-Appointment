import React from 'react'
import ULogin from '../components/ULogin'
import Alogin from '../components/ALogin'

const Login = () => {
  return (
    <div className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-center gap-8 p-4">
      {/* User Login Form */}
      <div className="min-w-[340px] sm:min-w-96 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-center mb-4">User</h2>
        <ULogin />
      </div>

      {/* Admin/Provider Login Form */}
      <div className="min-w-[340px] sm:min-w-96 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-center mb-4">Admin/Provider</h2>
        <Alogin />
      </div>
    </div>
  )
}

export default Login
