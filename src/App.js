
import Logs from "./Components/Logs/Logs";
import Card from './Components/UI/Card/Card';
import LogsForm from "./Components/LogsForm/LogsForm";
import './App.css';

const App = () => {
  return <div className="app">
       <LogsForm/>
    <Card/>
      <Logs />
    </div>;
};


export default App;
