import { Title } from "../components/Title"

const PlaceOrder = () => {
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
      
    </div>
  )
}

export default PlaceOrder