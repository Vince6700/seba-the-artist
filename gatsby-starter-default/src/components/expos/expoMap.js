import React from "react"
import PropTypes from "prop-types"
import { Map, GoogleApiWrapper } from "google-maps-react"

const ExpoMap = ({ lat, lng, google }) => {
  const fetchPlaces = (mapProps, map) => {
    const { google } = mapProps
    const geocoder = new google.maps.Geocoder()
    const infowindow = new google.maps.InfoWindow()
    const latlng = { lat: lat, lng: lng }
    geocoder.geocode({ location: latlng }, function (results, status) {
      if (status === "OK") {
        if (results[0]) {
          map.setZoom(16)
          var marker = new google.maps.Marker({
            position: latlng,
            map: map,
          })
          infowindow.setContent(results[0].formatted_address)
          infowindow.open(map, marker)
        } else {
          console.error("No results found")
        }
      } else {
        console.error("Geocoder failed due to: " + status)
      }
    })
  }

  return (
    <Map
      google={google}
      initialCenter={{
        lat: lat,
        lng: lng,
      }}
      style={{ height: "100%", width: "100%" }}
      zoom={16}
      onReady={fetchPlaces}
    />
  )
}

ExpoMap.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  google: PropTypes.any,
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBNfHt1ToOwAtTkbe5lV6h6QrHRy2v6irU",
})(ExpoMap)
