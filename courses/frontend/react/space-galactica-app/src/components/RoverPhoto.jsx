export const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <div>
      <p>Date: {date}</p>
      <p>Rover: {roverName}</p>
      <img src={src} alt="rover" />
    </div>
  );
};