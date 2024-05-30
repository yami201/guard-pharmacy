"use client"


import { useUserLocationContext } from "@/context/user-location.context";
import { getClosestPharmacy } from "@/utils/getClosestPharmacy";
import { getRoute } from "@/utils/redirectToMaps";
import { useState } from "react";


const ClosestLocation = ({pharmacies}) => {
    const location = useUserLocationContext()
    const [closestPharmacy, setClosestPharmacy] = useState()


    const showClosestPharmacy = () => {
        setClosestPharmacy(getClosestPharmacy(pharmacies, location))
    }

    return (
        <div className="w-full flex flex-col items-center">
            <button onClick={showClosestPharmacy} className="bg-primary rounded-lg shadow text-white px-3 py-2 border transtion duration-300 border-primary hover:text-primary hover:bg-transparent">Closest Pharmacy to me</button>
            {closestPharmacy && (
                <>
                    <p  className="my-4">Closest Pharmacy to you is <span className="text-primary">{closestPharmacy.name}</span></p>
                    <button onClick={getRoute.bind(null,location,closestPharmacy)} className="border border-primary px-2 py-1 rounded-lg shadow transition duration-300 text-primary hover:text-white hover:bg-primary">View in Maps</button>
                </>
            ) }

        </div>
    );
}

export default ClosestLocation;