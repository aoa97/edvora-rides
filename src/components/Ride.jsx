import StyledRide from "./styles/Rides.styled";

const Ride = ({ ride }) => {
  return (
    <StyledRide>
      {/* Left */}
      <div className="ride-map-details">
        <img src="/images/map.png" />

        <div className="ride-details">
          <p>
            Ride Id: <span>{ride.id}</span>
          </p>
          <p>
            Origin Station: <span>{ride.origin_station_code}</span>
          </p>
          <p>
            station_path: <span>[{String(ride.station_path)}]</span>
          </p>
          <p>
            Date: <span>{ride.date}</span>
          </p>
          <p>
            Distance: <span>0</span>
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="ride-tags">
        <span className="ride-tag">{ride.city}</span>
        <span className="ride-tag">{ride.state}</span>
      </div>
    </StyledRide>
  );
};

export default Ride;
