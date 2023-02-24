import "./App.css";
import { useSelector } from "react-redux";
import Detail from "./components/Detail";
import Chat from "./components/Chat";

function App() {
  const name = useSelector((state) => state?.user?.name);

  return (
    <div className="App">
      {
        name!==""  ?
        <Chat/>:
        <Detail/>
      }
    </div>
  );
}

export default App;
