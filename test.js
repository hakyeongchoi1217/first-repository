if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
  
  function successCallback(position) {
    const userLatitude = position.coords.latitude;
    const userLongitude = position.coords.longitude;
    checkLocation(userLatitude, userLongitude);
  }
  
  function errorCallback(error) {
    console.error("Error getting location:", error.message);
  }
  

  