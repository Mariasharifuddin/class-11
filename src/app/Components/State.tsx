"use client";

import { useState } from "react";

const MyComponent = () => {
    const [count, setCount] = useState(0); // React hook jo client pe chalega

    return (
      
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="text-center">

         <h1 className="text-3xl mb-15">{count}</h1>
         <div className="flex justify-center gap-4">
            {/* Increment Button */}
            <button onClick={() => setCount(count + 1)}
              className="py-2 px-6 bg-red-950 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">

                Increment
            </button>
            
            {/* Decrement Button */}
            <button onClick={() => setCount(count - 1)} style={{ marginLeft: "20px" }} 
              className="py-2 px-6 bg-black text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">

                Decrement
            </button>
        
         {/* Reset Button */}
         <button
         onClick={() => setCount(0)}  style={{ marginLeft: "20px" }} // Reset the count to 0
         className="py-2 px-6 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
     >
         Reset
     </button>
 </div>
 </div>
 </div>
    );
};

export default MyComponent;
