// import App from ".././App"

import LogItem from "./LogItem/LogItem";
import "./Logs.css";
import Card from "../UI/Card/Card";
import LogFilter from "./LogFilter/LogFilter";
import { useState } from "react";

// 日志容器
const Logs = (props) => {
  const [year, setYear] = useState(2022);

  let filterData = props.logsData.filter(
    (item) => item.date.getFullYear() === year
  );

  const changeYearHandler = (year) => {
    setYear(year);
  };

  // 将数据放入JSX中
  let logItemData = filterData.map((item, index) => (
    <LogItem
      onDelLog={() => props.onDelLog(item.id)}
      key={item.id}
      date={item.date}
      desc={item.desc}
      time={item.time}
    />
  ));

  if (logItemData.length === 0) {
    logItemData = <p className="no-logs">No item</p>;
  }

  return (
    <Card className="logs">
      <LogFilter year={year} onYearChange={changeYearHandler} />
      {logItemData}
    </Card>
  );
};
export default Logs;
