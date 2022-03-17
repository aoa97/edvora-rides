import Ride from "../components/Ride";

// Ride that includes station code in [station_paths array] or

const NeasrestRides = ({ rides }) =>
  rides.map((ride, i) => <Ride key={i} ride={ride} />);

export default NeasrestRides;
