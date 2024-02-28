import MainPage from "./pages/mainPage/mainPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <ToastContainer />
      <MainPage />
    </div>
  );
}

export default App;
