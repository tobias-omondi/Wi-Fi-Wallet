import React from "react";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Packages from "./components/Packages";
import Voucher from "./components/Voucher";
import background from "../src/assets/city-skyline-with-residential-district.jpg"; // Adjust the path as necessary

function App() {
  return (
    <div 
      className="min-h-[240vh] w-screen bg-cover bg-no-repeat:"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 z-0"></div>
      <div className="mr-10 relative z-10">
        <Homepage />
        <Packages />
        <Voucher />
        <Login />
      </div>
    </div>
  );
}

export default App;
