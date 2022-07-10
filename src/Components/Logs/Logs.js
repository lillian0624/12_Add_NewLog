// import App from ".././App"

import LogItem from "./LogItem/LogItem";
import "./Logs.css";
import Card from "../UI/Card/Card";

// 日志容器
const Logs = (props) => {
  // 将数据放入JSX中
  let logItemData = props.logsData.map((item, index) => (
    <LogItem
      onDelLog={() => props.onDelLog(index)}
      key={item.id}
      date={item.date}
      desc={item.desc}
      time={item.time}
    />
  ));

  if (logItemData.length === 0) {
    logItemData = <p className="no-logs">No item</p>;
  }

  return <Card className="logs">{logItemData}</Card>;
};
export default Logs;
