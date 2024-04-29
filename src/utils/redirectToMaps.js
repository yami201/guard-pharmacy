export const getRoute = (origin, destination) => {
  console.log({ origin, destination });
  const url = `https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.long}&destination=${destination.lat},${destination.long}`;
  window.open(url, "_blank");
};

export const getDestination = (destination) => {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${destination.lat},${destination.long}`;
  window.open(url, "_blank");
};
