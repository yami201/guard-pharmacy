
export const getClosestPharmacy = (pharmacies, userLocation) => {
    let closestLocation = pharmacies[0];
    let shortestDistance = calculateDistance(userLocation, pharmacies[0].location);
  
    for (let i = 1; i < pharmacies.length; i++) {
      const distance = calculateDistance(userLocation, pharmacies[i].location);
      if (distance < shortestDistance) {
        shortestDistance = distance;
        closestLocation = pharmacies[i];
      }
    }

    return closestLocation;
  };
  
  const calculateDistance = (point1, point2) => {
    const lat1 = point1.lat;
    const lon1 = point1.long;
    const lat2 = point2.lat;
    const lon2 = point2.long;
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  };
  
  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };