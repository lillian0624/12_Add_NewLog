import Logs from "./Components/Logs/Logs";
import Card from "./Components/UI/Card/Card";
import LogsForm from "./Components/LogsForm/LogsForm";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [logsData, setLogsData] = useState([
    {
      id: "001",
      date: new Date(2021, 1, 20, 18, 30),
      desc: "learninig",
      time: 30,
    },
    {
      id: "002",
      date: new Date(2022, 2, 10, 12, 30),
      desc: "working",
      time: 20,
    },
    {
      id: "003",
      date: new Date(2022, 2, 11, 11, 30),
      desc: "exercising",
      time: 40,
    },
    {
      id: "004",
      date: new Date(2022, 2, 15, 10, 30),
      desc: "eating",
      time: 80,
    },
  ]);

  const saveLogHandler = (newLog) => {
    newLog.id = Date.now() + "";
    // console.log("App.js -->", newLog);
    // LogsData.push(newLog);
    setLogsData(...logsData, newLog);
  };

  return (
    <div className="app">
      <LogsForm onSaveLog={saveLogHandler} />
      <Card />
      <Logs logsData={logsData} />
    </div>
  );
};

export default App;
