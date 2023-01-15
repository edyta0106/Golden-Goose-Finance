import "./App.css";
import PageContainer from "./components/PageContainer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <PageContainer />
      </Router>
    </>
  );
}

export default App;
