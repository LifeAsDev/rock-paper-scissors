const RectangleScore = ({ score }) => {
  return (
    <div className="rectangle">
      <div className="wordsContainer">
        <div>ROCK</div>
        <div>PAPER</div>
        <div>SCISSORS</div>
      </div>
      <div className="scoreContainer">
        <p>SCORE</p>
        {score}
      </div>
    </div>
  );
};

export default RectangleScore;
