import React, { useState } from "react";

export default function TextFrom(props) {
  const [text, setText] = useState("");

  const handleOnClick = () => {
    // console.log("UpperCase btn Clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase!", "success");
  };

  // function for clear the text
  const onClear = () => {
    let cleartext = "";
    setText(cleartext);
    props.showAlert("All text has been cleared!", "success");
  };

  // function for  Speak the words you write
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Listen carefully!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  // function for Remove extra spaces
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces removed!", "success");
  };

  // function for copy text
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied all selected text!", "success");
  };

  const darkModeColors = {
    background: "#0c070c",
    text: "#FFFFFF",
    primary: "#3498db",
    secondary: "#2ecc71",
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? darkModeColors.text : "black" }}
      >
        <div className="mb-3 ">
          <h2 className="h4 pb-1 mb-4 border-bottom border-primary">
            <label htmlFor="myBox" className="form-label">
              {props.heading}
            </label>
          </h2>
          <textarea
            className="form-control"
            id="myBox"
            rows="6"
            placeholder="Enter Your Text ..."
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === "dark" ? darkModeColors.background : "white",
              color: props.mode === "dark" ? darkModeColors.text : "black",
            }}
          ></textarea>
        </div>

        <button
          disabled={text.trim() === ""}
          className="btn btn-outline-primary mx-2 my-2"
          onClick={handleOnClick}
        >
          Convert to UPPERCASE
        </button>

        <button
          disabled={text.trim() === ""}
          className="btn btn-outline-primary my-2 mx-2"
          onClick={handleCopy}
        >
          {" "}
          Copy Text
        </button>

        <button
          disabled={text.trim() === ""}
          className="btn btn-outline-primary my-2 mx-2"
          onClick={handleExtraSpace}
        >
          {" "}
          Remove ExtraSpace
        </button>

        <button
          disabled={text.trim() === ""}
          className="btn btn-outline-primary my-2 mx-2"
          type="submit"
          onClick={speak}
        >
          {" "}
          Speak
        </button>
        <button
          disabled={text.trim() === ""}
          className="btn btn-outline-danger my-2 mx-2"
          onClick={onClear}
        >
          {" "}
          Clear All
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? darkModeColors.text : "black" }}
      >
        {/* <h4 className="p-2 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
          Text Summary
        </h4> */}
        <h2 className="h4 pb-1 mb-4 border-bottom border-primary">
          <label htmlFor="myBox" className="form-label">
            Text Summary
          </label>
        </h2>

        <button type="button" className="btn btn-outline-secondary mb-2">
          Estimsted time to read all the words takes{" "}
          <span className="badge text-bg-primary">
            {text.trim() === ""
              ? 0
              : Math.ceil(0.08 * text.trim().split(" ").length)}
          </span>{" "}
          minutes{" "}
        </button>

        <ol
          className="list-group list-group-numbered"
          style={{
            backgroundColor:
              props.mode === "dark" ? darkModeColors.background : "white",
            color: props.mode === "dark" ? darkModeColors.text : "black",
          }}
        >
          <li
            className="list-group-item d-flex justify-content-between align-items-start"
            style={{
              backgroundColor:
                props.mode === "dark" ? darkModeColors.background : "white",
              color: props.mode === "dark" ? darkModeColors.text : "black",
            }}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Words</div>Your text contain number of
              words
            </div>
            <span className="badge bg-primary rounded-pill">
              {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}
            </span>
          </li>
          <li
            className="list-group-item d-flex justify-content-between align-items-start"
            style={{
              backgroundColor:
                props.mode === "dark" ? darkModeColors.background : "white",
              color: props.mode === "dark" ? darkModeColors.text : "black",
            }}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Charactors</div>
              Your text contain number of Charactor
            </div>
            <span className="badge bg-primary rounded-pill">
              {text.trim() === "" ? 0 : text.length}
            </span>
          </li>
        </ol>

        <div className="card text-right mt-3">
          <div
            className="card-body"
            style={{
              backgroundColor:
                props.mode === "dark" ? darkModeColors.background : "white",
              color: props.mode === "dark" ? darkModeColors.text : "black",
            }}
          >
            <h4 className="card-title">Preview</h4>
            <p className="card-text">
              {text.length > 0
                ? text
                : "Please Type in text box for Preview here..."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
