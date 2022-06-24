const getAddress = async (zipCode) => {
  const geocoder = new google.maps.Geocoder();
  const response = await geocoder.geocode({ address: zipCode });

  if(response.results) {
    return {
      lat: response.results[0].geometry.location.lat(),
      lng: response.results[0].geometry.location.lng(),
      city: response.results[0].address_components[3].long_name
    };
  }
};

const getDistance = async (origin, destination) => {
  /*
  const service = new google.maps.DistanceMatrixService();
  const request = {
    origins: [origin],
    destinations: [destination],
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
  };

  const resp = await service.getDistanceMatrix(request);
  console.log(resp);
*/
};

export default { getAddress, getDistance };
