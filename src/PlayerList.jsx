
import Player from './Player';
import players from './assets/MockData';

function PlayerList() {
  return (
    <div className="flex flex-wrap justify-center">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
}

export default PlayerList;
