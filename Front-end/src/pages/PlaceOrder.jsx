import { Title } from "../components/Title"
import CartTotal from "../components/CartTotal"
import { assets } from "../assets/frontend_assets/assets"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const PlaceOrder = () => {

  const[method,setMethod] = useState('cod');
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"}/>
        </div>
        <div className="flex gap-3 ">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First Name" required aria-label="First Name" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last Name" required aria-label="Last Name" />
        </div>
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Enter Email" required aria-label="Email" />
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" required aria-label="Street" />
        <div className="flex gap-3 ">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" required aria-label="City" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" required aria-label="State" />
        </div>
        <div className="flex gap-3 ">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="ZipCode" required aria-label="Zip Code" pattern="\d{5}(-\d{4})?" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" required aria-label="Country" />
        </div>
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="tel" placeholder="Phone" required aria-label="Phone" />
      </div>

      {/* Right Side */}

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal/>
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"}text2={"METHOD"}/>
          {/* Payement method selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={()=> setMethod("Stripe")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "Stripe" ? 'bg-green-400': ""}`}></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe Logo" />
            </div>
            <div onClick={()=> setMethod("RazorPay")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "RazorPay" ? "bg-green-400" : ""}`}></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="Razorpay_Logo" />
            </div>
            <div onClick={()=> setMethod("cod")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-400":""}`}></p>
              <p className="text-gray-500 text-sm font-meduim mx-4">CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button onClick={()=>navigate("/orders")} className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder