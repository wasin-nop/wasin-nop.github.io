// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ActivityIcon from "./Components/ActivityIcon/ActivityIcon.jsx";
import ActivityForm from "./Components/ActivityForm/ActivityForm";
import Footer from "./Components/Footer/Footer";

function App() {
  const [activityType, setActivityType] = useState("running");
  return (
    <>
      <Navbar />
      <ActivityIcon setActivityType={setActivityType} />
      <ActivityForm
        activityType={activityType}
        setActivityType={setActivityType}
      />
      <Footer />
    </>
  );
}

export default App;
