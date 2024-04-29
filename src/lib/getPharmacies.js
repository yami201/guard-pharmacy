const pharmacies = [
  {
    name: "Pharmacie SLAMI",
    adress: "Lots jnane, 184 rue Al Hanae, Bd Sidi Maafa",
    city: "Oujda",
    location: {
      lat: 34.64875560027949, 
      long:  -1.8873447965545092,
    },
  },
  {
    name: "Pharmacie Afriquia",
    adress: "n° 14, Hay El Bekkay",
    city: "Oujda",
    location: {
      lat: 34.65170771010625,
      long: -1.8748013448961902,
    },
  },
  {
    name: "Pharmacie Le Jasmin",
    adress: "",
    city: "Oujda",
    location: {
      lat: 34.65635824596016,
      long: -1.8896491080596138,
    },
  },
  {
    name: "Pharmacie Parc Aicha",
    adress: "Av. Yacoub Al Mansour",
    city: "Oujda",
    location: {
      lat: 34.66812011571904,
      long: -1.9021840981543028,
    },
  },
  {
    name: "Pharmacie NOURA",
    adress: "",
    city: "Oujda",
    location: {
      lat: 34.69983841960572,
      long: -1.8695250431494035,
    },
  },
];

export const getPharmacies = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(pharmacies);
        }, 2000);
    })
};
