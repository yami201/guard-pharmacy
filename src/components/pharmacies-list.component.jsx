"use client"

import { useUserLocationContext } from "@/context/user-location.context";
import { getDestination, getRoute } from "@/utils/redirectToMaps";

const PharmaciesList = ({ pharmacies }) => {
  const location = useUserLocationContext()

  const handleRedirection = (pharmacy) => {
    if(location) {
      getRoute(location, pharmacy.location)
    } else {
      getDestination(pharmacy.location)
    }
  }

  return (
    <ul className="w-full border border-primary rounded-xl mt-6">
      {pharmacies.map(pharmacy => (
        <li key={pharmacy.name} className="p-2 border-b border-gray-200 flex justify-between items-center w-full">
          <div className="w-3/4">
            <h3 className="text-lg ">{pharmacy.name}</h3>
            <p className="text-sm text-gray-600">{pharmacy.adress}</p>
            <span>{pharmacy.city}</span>
          </div>
          <button onClick={handleRedirection.bind(null,pharmacy)} className="w-1/4 border text-sm border-primary px-2 py-1 rounded-lg shadow transition duration-300 text-primary hover:text-white hover:bg-primary">View in Maps</button>
        </li>
      ))}


    </ul>
  );
}

export default PharmaciesList;