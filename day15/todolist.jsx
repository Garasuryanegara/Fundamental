import { useState } from "react";

export default function TodoPage() {
  const [input, setInput] = useState();
  const [arrInput, setArrInput] = useState([]);

  function changeInput() {
    const date = document.getElementById("date").value;
    const activity = document.getElementById("activity").value;
    setInput(date + " " + activity);
  }
  //   useEffect(() => setInput(date + activity), [date, activity]);
  function add() {
    let tempArr = [...arrInput];
    tempArr.push(input);
    setArrInput([...arrInput]);
    setArrInput(tempArr);
    setInput(" ");
  }

  return (
    <div className="page">
      <div className="content">
        <input type="date" id="date" />
        <input
          style={{ backgroundColor: "blue", color: "white" }}
          id="activity"
          onChange={changeInput}
        ></input>
        <button onClick={add}>add</button>
        <ol>
          {arrInput.map((val) => (
            <li>{val}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
