import Match from './Match';

function MatchList(props){
  const oneMatch = props.matchData[0];
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      <Match players={oneMatch.players} winner={oneMatch.winner} scoreDifference={oneMatch.scoreDifference} />
      {/* Matches will be shown here */}
    </section>
  );
}

export default MatchList;