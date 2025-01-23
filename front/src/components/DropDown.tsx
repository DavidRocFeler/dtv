import React from 'react'

const DropDown = () => {
  return (
    <select className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
    <option>Menu</option>
    <option>Home</option>
    <option>Wallet</option>
    <option>User</option>
    <option>Help</option>
    <option>Upload</option>
    <option>Log out</option>
  </select>
  )
}

export default DropDown
