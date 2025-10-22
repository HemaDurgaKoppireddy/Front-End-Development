import React from "react";
import CountUp from "react-countup";
import Tilty from "react-tilty";
import doreamon from "./assets/doreamon.webp";
import { ToastContainer, toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";
import { Rings } from "react-loader-spinner";
import Confetti from "react-confetti";

function Features() {

  const notify = () => toast("Wow so easy!");

  return (
    <>
      <h1>
        <CountUp start={0} end={100} delay={0}>
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
      </h1>

      <Tilty>
        <img src={doreamon} alt="image" />
      </Tilty>

      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>

      <RotatingLines />

      <Confetti 
      width={window.innerWidth}
      height={window.innerHeight}
      numberOfPieces={300} 
      wind={0} 
      gravity={1} />
    </>
  );
}

export default Features;
