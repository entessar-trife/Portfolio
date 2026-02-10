import { Outlet } from "react-router-dom";
import "./App.css";
import HandleLoadingComponent from "./components/HandleLoadingComponent";
import ScrollComponent from "./components/ScrollComponent";

function App() {
  return (
    <HandleLoadingComponent>
      <ScrollComponent />
      <Outlet />
    </HandleLoadingComponent>
  );
}

export default App;
