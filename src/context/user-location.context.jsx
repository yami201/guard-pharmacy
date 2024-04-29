"use client"

const { createContext, useEffect, useState, useContext } = require("react");

const UserLocationContext = createContext()



const UserLocationProvider = ({ children }) => {
    const [userLocation, setUserLocation] = useState()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position.coords.latitude, position.coords.longitude)
                setUserLocation({
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                });
            }
        );
    },[])

    const value = {
        userLocation,
    }

    return (
        <UserLocationContext.Provider value={value}>
            {children}
        </UserLocationContext.Provider>
    );
}

export default UserLocationProvider


export const useUserLocationContext = () => {
    const {userLocation} = useContext(UserLocationContext)

    return userLocation
}