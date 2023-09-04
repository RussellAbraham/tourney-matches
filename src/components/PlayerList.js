import Player from './Player';

function PlayerList(props) {
  const onePlayer = props.playerData[0];
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player gamerTag={onePlayer.gamerTag} firstName={onePlayer.firstName} lastName={onePlayer.lastName} wins={onePlayer.wins} />
      {/* Players will be shown here */}
    </section>
  );
}

export default PlayerList;