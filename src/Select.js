import bgTriangle from "./images/bg-triangle.svg";
import iconRock from "./images/icon-rock.svg";
import iconScissors from "./images/icon-scissors.svg";
import iconPaper from "./images/icon-paper.svg";

const Select = ({ selectPick }) => {
  return (
    <div className="selections">
      <img
        className="triangle"
        alt="background triangle"
        src={bgTriangle}
      ></img>
      <div onClick={() => selectPick("Paper")} className="circle circle-1">
        <div className="circle-center">
          <img alt="hand icon" src={iconPaper} className="" />
        </div>
      </div>
      <div onClick={() => selectPick("Scissors")} className="circle circle-2">
        <div className="circle-center">
          <img alt="hand icon" src={iconScissors} className="" />
        </div>
      </div>
      <div onClick={() => selectPick("Rock")} className="circle circle-3">
        <div className="circle-center">
          <img alt="hand icon" src={iconRock} className="" />
        </div>
      </div>
    </div>
  );
};

export default Select;
