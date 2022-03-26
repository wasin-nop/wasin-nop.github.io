import React, { useState } from "react";
import "./ActivityForm.css";

const ActivityForm = (props) => {
  const [activityName, setActivityName] = useState("");
  const [activityDate, setActivityDate] = useState("");
  const [activityDuration, setActivityDuration] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [value, setValue] = useState({ value: "" });

  const handleChangeActivityName = (e) => {
    setActivityName(e.target.value);
  };

  const handleChangeActivityDate = (e) => {
    setActivityDate(e.target.value);
  };

  const handleChangeActivityType = (e) => {
    props.setActivityType(e.target.value);
  };

  const handleChangeActivityDuration = (e) => {
    setActivityDuration(e.target.value);
  };

  const handleChangeActivityDescription = (e) => {
    setActivityDescription(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   alert("A name was submitted: " + setValue());
  //   e.preventDefault();
  // };

  return (
    <main className="container">
      <div className="form-container">
        <div className="form-width">
          <form>
            <div>
              <label for="activity-name" className="input-topic">
                Activity Name:
              </label>
              <br />
              <input
                type="text"
                className="form-control"
                id="activity-name"
                name="activity-name"
                placeholder="Keep running in Mt.Everest"
                value={activityName}
                onChange={handleChangeActivityName}
              />
            </div>
            <div>
              <label for="date" className="input-topic">
                Date:
              </label>
              <br />
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
                // value="2022-01-01"
                min="2022-01-01"
                // max="2022-12-31"
                value={activityDate}
                onChange={handleChangeActivityDate}
              />
            </div>
            <div>
              <label for="activity-type-choice" className="input-topic">
                Activity Type
              </label>
              <br />
              <select
                className="form-control"
                id="activity-type-choice"
                name="activity-type-choice"
                value={props.activityType}
                onChange={handleChangeActivityType}
              >
                <option value="running">Running</option>
                <option value="swimming">Swimming</option>
                <option value="cycling">Cycling</option>
                <option value="workout">Workout</option>
                <option value="yoga">Yoga</option>
                <option value="football">Football</option>
                <option value="ping-pong">Ping Pong</option>
                <option value="tennis">Tennis</option>
                <option value="basketball">Basketball</option>
                <option value="boxing">Boxing</option>
                <option value="golf">Golf</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label for="activity-duration" className="input-topic">
                Activity Duration
              </label>
              <br />
              <input
                type="text"
                className="form-control"
                id="activity-duration"
                name="activity-duration"
                placeholder="hr:min:sec"
                value={activityDuration}
                onChange={handleChangeActivityDuration}
              />
            </div>
            <div>
              <label for="description" className="input-topic">
                Described this journal
              </label>
              <br />
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="3"
                value={activityDescription}
                onChange={handleChangeActivityDescription}
              ></textarea>
            </div>
            <a href="#">
              <input
                type="button"
                className="submit-button"
                id="submit"
                value="Submit"
              />
            </a>
          </form>
        </div>
        <div>
          <img className="form-image" src="./running_at_sunset.jpg" alt="" />
        </div>
      </div>
    </main>
  );
};

export default ActivityForm;
