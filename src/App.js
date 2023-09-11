import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (Message, type) => {
    setAlert({
      msg: Message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#11101c";
      showAlert("Dark mode has been enabled!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled!", "success");
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar
        title="TextUtils"
        aboutText="About me"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> Wrap your Route components with Routes */}
        {/* <Route exact path="/about" element={<About mode={mode}/>} /> */}
        {/* <Route exact path="/" element={<TextFrom heading="Enter Your Text and click on Button to Modified" mode={mode} showAlert={showAlert} />} /> */}
        <TextFrom
          heading="TextUtils - Word Counter | Charactor Counter | Remove ExtraSpaces | Copy | Speak Word"
          mode={mode}
          showAlert={showAlert}
        />
        {/* </Routes> */}
        <About mode={mode} />
        <Footer mode={mode} />
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
