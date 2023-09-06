import React, { useState } from "react";

export default function About(props) {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });


  const darkModeColors = {
    background: "#0c070c",
    text: "#FFFFFF",
    primary: "#3498db",
    secondary: "#2ecc71",
  };

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? darkModeColors.text : "black" }}
    >
      <h2 className="h3 pb-1 mb-3 mt-4 border-bottom border-primary">
            <label htmlFor="myBox" className="form-label">
            About
            </label>
          </h2>
      <div
        className="accordion mb-3"
        id="accordionPanelsStayOpenExample"
        style={{
          backgroundColor:
            props.mode === "dark" ? darkModeColors.background : "white",
          color: props.mode === "dark" ? darkModeColors.text : "black",
        }}>
        <div
          className="accordion-item"
          style={{
            backgroundColor:
              props.mode === "dark" ? darkModeColors.background : "white",
            color: props.mode === "dark" ? darkModeColors.text : "black",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={{
                backgroundColor:
                  props.mode === "dark" ? darkModeColors.background : "white",
                color: props.mode === "dark" ? darkModeColors.text : "black",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              TextUtils gives you a way to analyze your text quickly and
              efficiently. Be it word count, Charactor count or reading time.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor:
              props.mode === "dark" ? darkModeColors.background : "white",
            color: props.mode === "dark" ? darkModeColors.text : "black",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{
                backgroundColor:
                  props.mode === "dark" ? darkModeColors.background : "white",
                color: props.mode === "dark" ? darkModeColors.text : "black",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor:
                  props.mode === "dark" ? darkModeColors.background : "white",
                color: props.mode === "dark" ? darkModeColors.text : "black",
              }}
            >
              TextUtils is a free Charactor counter tool that provides instant
              Charactor count & word count statistics for a given text.
              TextUtils reports the number of words and Charactor. Thus it is
              suitable for writing text with word / Charactor limit.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{
            backgroundColor:
              props.mode === "dark" ? darkModeColors.background : "white",
            color: props.mode === "dark" ? darkModeColors.text : "black",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{
                backgroundColor:
                  props.mode === "dark" ? darkModeColors.background : "white",
                color: props.mode === "dark" ? darkModeColors.text : "black",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              This word counter software work in any web browser such as Chrome,
              Firefox, Interet Explorer, Safari, Opera etc. It suits to count
              Charactor in facebook, blog, books, excel document, pdf document,
              essays etc.
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <button
          onClick={toggleStyle}
          type="button"
          className="btn btn-dark my-3"
          style={myStyle}
        >
          {btnText}
        </button>
      </div> */}
    </div>
  );
}
