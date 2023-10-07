"use client";
import React , {useState} from "react";
function Main() {
  const [formData, setFormData] = useState({
    location: '',
    minCustomers: '',
    maxCustomers: '',
    avgCookies: '',
  });
 
  const placeholderData = (e) => {
    e.preventDefault();

    const location = e.target.Location.value;
    const minCustomers = e.target.minCustomerPerHour.value;
    const maxCustomers = e.target.maxCustomerPerHour.value;
    const avgCookies = e.target.avgCookiesPerSale.value;
  setFormData({
    location,
    minCustomers,
    maxCustomers,
    avgCookies
  });
   
  }
    return(
        <>
         <main className="h-screen bg-orange-200">
      

      <div className="container mx-auto p-6 flex items-center justify-center ">

      <form onSubmit={placeholderData} className="w-full max-w-4xl p-4 bg-lime-900 rounded-lg shadow-md" >
      <div class=" flex items-center justify-center font-extralight text-xl">
    Create Cookie Stand
</div>
  <div className="mb-4">
    <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="location">
      Location:
    </label>
    <input
      className="appearance-none border rounded w-full py-2 px-3 text-lime-800 leading-tight focus:outline-none focus:shadow-outline"
      id="Location"
      name="Location"
      type="text"
      placeholder="Location"
    />
  </div>

  <div className="flex justify-between">
    <div className="w-1/4 mr-2">
      <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="maxCustomerPerHour">
        Max Customer Per Hour:
      </label>
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-lime-800 leading-tight focus:outline-none focus:shadow-outline"
        id="maxCustomerPerHour"
        name="maxCustomerPerHour"
        type="number"
        placeholder="Max Customer Per Hour"
      />
    </div>

    <div className="w-1/4 ml-2">
      <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="minCustomerPerHour">
        Min Customer Per Hour:
      </label>
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-lime-800 leading-tight focus:outline-none focus:shadow-outline"
        id="minCustomerPerHour"
        name="minCustomerPerHour"
        type="number"
        placeholder="Min Customer Per Hour"
      />
    </div>

    <div className="w-1/4 ml-2">
      <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="avgCookiesPerSale">
        Avg Cookies Per Sale:
      </label>
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-lime-800 leading-tight focus:outline-none focus:shadow-outline"
        id="avgCookiesPerSale"
        name="avgCookiesPerSale"
        type="text"
        placeholder="Avg Cookies Per Sale"
      />
    </div>
  </div>

  <div class=" mt-2 flex items-center justify-center">
    

  <button
    className="bg-orange-200 hover:bg-lime-600 text-lime-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    type="submit"
  >
    Submit
  </button>
  </div>

</form>



        
    </div>
    <div class=" flex items-center justify-center">
    <div className=" max-w-4xl container mx- p-2  rounded-lg  mt-4 text-lime-800">
      <h2 className="text-xl  font-bold mb-2  flex items-center justify-center">Last Created Cookie Stand:</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
</div>

   
 
</main>
    
        </>
    )
}
export default Main;