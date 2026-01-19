import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MASHome from "./components/MASHome/MASHome";
import Food from "./components/Food/Food";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <MASHome />
            </Layout>
          }
        />
        <Route
          path="/food"
          element={
            <Layout>
              <Food />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
