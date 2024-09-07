import PropTypes from 'prop-types';

function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={imageUrl} alt={name} />
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          Team: {team} <br />
          Nationality: {nationality} <br />
          Jersey Number: {jerseyNumber} <br />
          Age: {age}
        </p>
      </div>
    </div>
  );
}

// Default props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown Nationality",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/150"
};

// PropTypes
Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  imageUrl: PropTypes.string,
};

export default Player;
