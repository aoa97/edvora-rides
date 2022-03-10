import StyledRide from "./styles/Rides.styled";

const Ride = () => {
  return (
    <StyledRide>
      {/* Left */}
      <div className="ride-map-details">
        <img src="/images/map.png" />

        <div className="ride-details">
          <p>
            Ride Id: <span>002</span>
          </p>
          <p>
            Origin Station: <span>20</span>
          </p>
          <p>
            station_path: <span>[20, 39, 40, 42, 54, 63, 72, 88, 98]</span>
          </p>
          <p>
            Date: <span>15th Feb 2022 16:33</span>
          </p>
          <p>
            Distance: <span>0</span>
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="ride-tags">
        <span className="ride-tag">City Name</span>
        <span className="ride-tag">State Name</span>
      </div>
    </StyledRide>
  );
};

export default Ride;
