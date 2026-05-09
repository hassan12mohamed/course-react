import styles from "./Map.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCities } from "../Contexts/citiesContext";
import Button from "./Button";
import useGeolocation from "../hooks/useGeolocation";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";

import PropTypes from "prop-types";
import useUrlPosition from "../hooks/useUrlPosition";
export default function Map() {
  const { cities } = useCities();
  const [MapPosition, setMapPosition] = useState([40, 0]);
  const {
    isLoading: isLoadingPosition,
    position: positionGeolocation,
    getPosition,
  } = useGeolocation();
  const [mapLat, mapLng] = useUrlPosition();
  console.log(mapLat, mapLng);
  useEffect(() => {
    if (mapLat && mapLng) {
      setMapPosition([mapLat, mapLng]);
    }
  }, [mapLat, mapLng]);
  useEffect(() => {
    if (positionGeolocation) {
      setMapPosition([positionGeolocation.lat, positionGeolocation.lng]);
    }
  }, [positionGeolocation]);
  return (
    <div className={styles.mapContainer}>
      {!positionGeolocation && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Use Your Position"}
        </Button>
      )}
      <MapContainer
        center={MapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <p>
                <span>{city.emoji}</span> {city.cityName}
              </p>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={MapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

ChangeCenter.propTypes = {
  position: PropTypes.array.isRequired,
};
