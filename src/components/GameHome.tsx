import { useState } from "react";
import monkey from "../assets/monkey.svg";
import start from "../assets/start.png";
import welcome from "../assets/welocome.png";
import yes from "../assets/yes.png";
import next from "../assets/next.png";
import left from "../assets/leftArrow.png";
import play from "../assets/play.png";
import pinkCard from "../assets/pinkCard.png";
import blue from "../assets/blue.png";
import match from "../assets/match.png";
import apple from "../assets/apple.png";
import orange from "../assets/orage.png";
const monkeyStyle: React.CSSProperties = {
  position: "absolute",
  width: "30%",
  height: "auto",
  left: "40%",

  // borderRadius: "48.49px 0px 0px 0px",
  opacity: 1,
};
const startStyle: React.CSSProperties = {
  position: "absolute",
  left: "65%",
  bottom: "-40%",
  width: "18%",
  opacity: 1,
};

const welcomeStyle: React.CSSProperties = {
  position: "absolute",
  left: "65%",
  width: "25%",
  top: "30%",
  opacity: 1,
};
const welcomeTextStyle: React.CSSProperties = {
  position: "fixed",
  left: "77%",
  width: "22%",
  top: "28%",
  transform: "translate(-50%, -50%)",
  fontSize: "26px",
  color: "#11AEC6",
  fontFamily: "Nunito",
  textAlign: "center",
  padding: "10px 20px",
  borderRadius: "5px",
  fontWeight: 800,
};
const leftArrowStyle: React.CSSProperties = {
  position: "absolute",
  left: "0%",
  top: "0%",
  width: "13%",
  opacity: 1,
};
const box: React.CSSProperties = {
  backgroundClip: "#f1f1f1",
  width: "30vh",
  height: "36vh",
  margin: "10vh",
  textAlign: "center",
  lineHeight: "75px",
  fontSize: "30px",
  backgroundColor: "white",
  borderRadius: "20%",
};
const boxList: React.CSSProperties = {
  opacity: "0px",
  display: "flex",
  flexWrap: "nowrap",
  position: "absolute",
  top: "30%",
  left: "10%",
  // position: "absolute",
  // left: "0%",
  // top: "0%",
  // width: "13%",
  // opacity: 1,
};
const boxListCard: React.CSSProperties = {
  opacity: "0px",
  display: "flex",
  flexWrap: "nowrap",
  position: "relative",
  left: "2%",
  justifyContent: "center",
  width: "100Vh",
  // position: "absolute",
  // left: "0%",
  // top: "0%",
  // width: "13%",
  // opacity: 1,
};
function GameHome() {
  const page = [
    { start, text: "Welcome Kiddo !" },
    { start: next, text: "Hi , I am Mizo ! \nand I love bananas 🤔 " },
    { start: yes, text: "Can you help me get\n some ? 🤔 " },
    { start: play, text: "" },
  ];
  const [startImage, setstartImage] = useState(0);
  const [card1, setCard1] = useState([2, 2, 2, 2, 2, 2]);
  const [card2, setCard2] = useState([2, 2, 2, 2, 2, 2]);
  const [count, setcount] = useState([
    { apple: 0, orange: 0 },
    { apple: 0, orange: 0 },
  ]);
  const back = startImage == 0 ? false : true;
  const welocome = startImage > 2 ? false : true;
  function decideClick(num: number) {
    console.log(welocome);
    setstartImage(num);
  }
  function clickcard(i: number, card: number) {
    const res = card == 1 ? [...card1] : [...card2];
    if (res[i] == 2) {
      card == 1 ? [...card1] : [...card2];
      const random = Math.round(Number(Math.random()));
      console.log(random);
      const resCoount = [...count];
      if (random == 0) {
        resCoount[card - 1].apple++;
      } else {
        resCoount[card - 1].orange++;
      }
      setcount(resCoount);
      res[i] = random;
      card == 1 ? setCard1(res) : setCard2(res);
    }
    const ans =
      count[0].apple + count[0].orange + count[1].apple + count[1].orange;
    console.log(ans);
    const applescore = Math.min(count[0].apple, count[1].apple);
    const OrageScore = Math.min(count[0].orange, count[1].orange);
    if (ans == 12) {
      alert(
        "you win wiith th score of " +
          (applescore + OrageScore) +
          " with apple: " +
          applescore +
          ",orage:" +
          OrageScore
      );
    }
  }
  return (
    <>
      {back && (
        <img
          src={left}
          style={leftArrowStyle}
          alt="Monkey Image"
          onClick={() => {
            if (startImage != 0) {
              decideClick(startImage - 1);
            }
          }}
        />
      )}
      {welocome && startImage < 3 && (
        <>
          <img src={welcome} style={welcomeStyle} alt="Monkey Image" />
          <span style={welcomeTextStyle}>{page[startImage].text}</span>
          <img src={monkey} style={monkeyStyle} alt="Monkey Image" />
        </>
      )}

      {page.length < startImage + 1 && (
        <>
          {" "}
          <div style={boxListCard}>
            {card1.map((elm, i) => (
              <img
                src={
                  elm == 2
                    ? i < 3
                      ? pinkCard
                      : blue
                    : card1[i] == 0
                    ? apple
                    : orange
                }
                alt="Pink Card"
                width="20%"
                height="60%"
                key={i}
                onClick={() => clickcard(i, 1)}
              />
            ))}
          </div>
          <div style={boxListCard}>
            {card2.map((elm, i) => (
              <img
                src={
                  elm == 2
                    ? i < 3
                      ? pinkCard
                      : blue
                    : card2[i] == 0
                    ? apple
                    : orange
                }
                alt="Pink Card"
                width="20%"
                height="60%"
                key={i}
                onClick={() => clickcard(i, 2)}
              />
            ))}
          </div>
        </>
      )}
      {page.length == startImage + 1 && (
        <div style={boxList}>
          <div style={box}>
            <img src={pinkCard} alt="Pink Card" width="90%" height="60%" />
            <div
              style={{
                marginTop: "-17%",
                lineHeight: "22px",
                fontSize: "24px",
                color: "#11AEC6",
              }}
            >
              Select a pink card.
            </div>
            <div
              style={{
                lineHeight: "22px",
                fontSize: "20px",
                color: "#A6C930",
              }}
            >
              It has images.
            </div>
          </div>
          <div style={box}>
            <img src={blue} alt="Pink Card" width="90%" height="60%" />
            <div
              style={{
                marginTop: "-17%",
                lineHeight: "22px",
                fontSize: "24px",
                color: "#11AEC6",
              }}
            >
              Select a blue card.
            </div>
            <div
              style={{
                lineHeight: "22px",
                fontSize: "20px",
                color: "#A6C930",
              }}
            >
              It has alphabets.
            </div>
          </div>
          <div style={box}>
            <img
              src={match}
              alt="Pink Card"
              width="90%"
              height="60%"
              style={{ backgroundColor: "rgb(189 186 186 / 0%)" }}
            />
            <div
              style={{
                marginTop: "-17%",
                lineHeight: "22px",
                fontSize: "24px",
                color: "#11AEC6",
              }}
            >
              Its a match !
            </div>
            <div
              style={{
                lineHeight: "22px",
                fontSize: "20px",
                color: "#A6C930",
              }}
            >
              otherwise retry :(
            </div>
          </div>
        </div>
      )}
      {page.length > startImage && (
        <img
          src={page[startImage].start}
          style={startStyle}
          alt="Start Image"
          onClick={() => {
            decideClick(startImage + 1);
          }}
        />
      )}
    </>
  );
}

export default GameHome;
