"use client"
import { useState } from "react";


const Prueba = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
      setIsLoggedIn(true);
    };
  
    return (
      <header className="bg-black text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo text-2xl font-bold">El Rey León</div>
          {!isLoggedIn ? (
            <div className="auth-buttons space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={handleLogin}>
                Log in
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Sign up</button>
            </div>
          ) : (
            <div className="section-dropdown">
              <select className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                <option>Section</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
          )}
        </div>
      </header>
    );
}

export default Prueba
