import React, { useContext, useRef, useState } from "react";
import MyContext from "../../context/MyContext";
import "./Home.scss";

export default function Home(props) {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const { setUserEmail } = useContext(MyContext);
  const inputVal = useRef("");

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  return (
    <div className="homepage">
      <div className="fancyborder"></div>
      <div className="hero">
        <h1 className="hero__title">Posts</h1>
        <h2 className="hero__subtitle">🧱 Read anywhere 🐀 Post anytime 🚱</h2>
        <h2>Enter your email to contribute to the wall</h2>
        <form className="hero__form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            ref={inputVal}
            placeholder="Email address"
            className="emailBox"
            style={{ marginRight: "2rem" }}
          />
          <button
            className="startBtn"
            type="submit"
            onClick={() => {
              const email = inputVal.current.value;
              if (validateEmail(email)) {
                setUserEmail(email);
                console.log(email);
                setTimeout(() => {
                  props.history.push("/register");
                }, 1000);
              } else {
                setError("Please enter a valid email (example@mail.com)");
                console.log(error);
              }
            }}
          >
            <span>Get Started</span>
          </button>
        </form>
        {error && (
          <div className="infoWarning">
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
}
