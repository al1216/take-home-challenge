import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Provider } from "./context/StoryContext";
import Main from "./Main";
import UploadPDFFile from "./UploadPDFFile";

function App() {
  return (
    <Provider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/upload" element={<UploadPDFFile />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
