import iconRock from "./images/icon-rock.svg";
import iconScissors from "./images/icon-scissors.svg";
import iconPaper from "./images/icon-paper.svg";
const GameResult = ({
  youPick,
  housePick,
  transformY,
  currentPickAnimation,
  winner,
  retry,
}) => {
  console.log(winner);
  const rootStyles = getComputedStyle(document.documentElement);

  const pickRockValue = rootStyles.getPropertyValue("--shadow-height");

  const iconMap = {
    Rock: {
      icon: iconRock,
      style: {
        background: "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
        boxShadow: `0px ${pickRockValue} 0px #9d1733`,
        transform: `scale(1.4) translateY(${transformY}px)`,
      },
    },
    Paper: {
      icon: iconPaper,
      style: {
        background: "linear-gradient(hsl(230, 89%, 62%), hsl(230, 84%, 63%))",
        boxShadow: `0px ${pickRockValue} 0px #2947c1`,
        transform: `scale(1.4) translateY(${transformY}px)`,
      },
    },
    Scissors: {
      icon: iconScissors,
      style: {
        background: "linear-gradient(hsl(39, 89%, 49%), hsl(40, 74%, 64%))",
        boxShadow: `0px ${pickRockValue} 0px rgba(198, 108, 30, 255)`,
        transform: `scale(1.4) translateY(${transformY}px)`,
      },
    },
  };

  let youIcon = iconMap[youPick]?.icon || null;
  let houseIcon = iconMap[housePick]?.icon || null;

  let youStyle = null;
  let houseStyle = null;

  if (currentPickAnimation !== -1) {
    if (currentPickAnimation === 1) {
      youStyle = { ...iconMap["Rock"].style };
      youIcon = iconMap["Rock"].icon;
    } else if (currentPickAnimation === 2) {
      youStyle = { ...iconMap["Paper"].style };
      youIcon = iconMap["Paper"].icon;
    } else if (currentPickAnimation === 3) {
      youStyle = { ...iconMap["Scissors"].style };
      youIcon = iconMap["Scissors"].icon;
    }
    youStyle = {
      ...youStyle,
      opacity: ".5",
      background:
        "linear-gradient(hsla(336, 0%, 65%, 1),hsla(336, 0%, 51%, 1))",
      boxShadow: `0px ${pickRockValue} 0px hsla(336, 0%, 26%, 1)`,
    };
    houseStyle = {
      ...youStyle,
    };
    houseIcon = youIcon;
  } else {
    youStyle = iconMap[youPick]?.style || null;
    houseStyle = iconMap[housePick]?.style || null;
  }
  if (winner !== null) {
    youStyle = {
      ...youStyle,
      transform: `scale(1.4) translateY(${transformY}px) translateX(-85px)`,
      transition: "transform 1s",
    };
    houseStyle = {
      ...houseStyle,
      transform: `scale(1.4) translateY(${transformY}px) translateX(85px)`,
      transition: "transform 1s",
    };
  }

  return (
    <>
      <div
        style={winner !== null ? { visibility: "visible", opacity: "1" } : null}
        className="retry-box"
      >
        <p>
          {winner === "You"
            ? "YOU WIN"
            : winner === "Draw"
            ? "DRAW"
            : "YOU LOSE"}
        </p>
        <button onClick={retry}>PLAY AGAIN</button>
      </div>
      <div className="result-container">
        <div
          style={{ ...youStyle, cursor: "default" }}
          className="circle circle-result"
        >
          <div
            style={winner === "You" ? { opacity: 1 } : null}
            className="radial-win"
          ></div>
          <div className="circle-text">YOU PICKED</div>
          <div className="circle-center">
            <img alt={youPick} src={youIcon} />
          </div>
        </div>
        <div
          style={{ ...houseStyle, cursor: "default" }}
          className="circle circle-result"
        >
          <div
            style={winner === "House" ? { opacity: 1 } : null}
            className="radial-win"
          ></div>
          <div className="circle-text">THE HOUSE PICKED</div>
          <div className="circle-center">
            <img className="mirror-image" alt={housePick} src={houseIcon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GameResult;
