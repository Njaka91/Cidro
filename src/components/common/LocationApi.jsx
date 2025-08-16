import { AdvancedMarker, ControlPosition, Map } from "@vis.gl/react-google-maps";
import { APIProvider } from "@vis.gl/react-google-maps";
import { useMemo } from "react";

const LocationApi = () => {
  const API_KEY = import.meta.env.VITE_API_LOCATION_KEY;

  const officeLocation = useMemo(
    () => ({
      lat: -18.908871,
      lng: 47.522731,
    }),
    []
  );
  return (
    <APIProvider apiKey={API_KEY} language="en">
      <Map
        mapId="CABINET_DENTAIRE_MAP"
        mapTypeControl={true}
        mapTypeControlOptions={{
          position: ControlPosition.TOP_RIGHT,
          mapTypeIds: ["roadmap", "hybrid"],
        }}
        defaultCenter={officeLocation}
        defaultZoom={17}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
         <AdvancedMarker
          position={officeLocation}
          title="CIDRO Cabinet du DR Allain Razakatiana"
        ></AdvancedMarker>
      </Map>
    </APIProvider>
  );
};

export default LocationApi;
