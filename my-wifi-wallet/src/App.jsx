import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Packages from "./components/Packages";
import Voucher from "./components/Voucher";


function App() {

  return (
    <>
      <div className="mr-10">
        <Homepage />
        <Packages />
        <Voucher />
        <Login />
      </div>
    </>
  )
}

export default App
