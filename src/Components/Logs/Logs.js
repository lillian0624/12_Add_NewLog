// import App from ".././App"

import LogItem from "./LogItem/LogItem";
import "./Logs.css";
import Card from "../UI/Card/Card";

// 日志容器
const Logs = (props) => {
  // 将数据放入JSX中
  const logItemDate = props.logsData.map((item) => (
    <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time} />
  ));

  return (
    <Card className="logs">
      {
        logItemDate
        // logsData.map(item => <LogItem {...item}/> )
      }
    </Card>
  );
};
export default Logs;
