import Header from "./Components/Header.jsx";
import Homescreen from "./screens/Homescreen.jsx";
 import Login from "./screens/Loginscreen.jsx"; 
 import Register from "./screens/Registerscreen.jsx";
import { Outlet } from "react-router-dom";
import store from "../store.js"; // Ensure store is correctly imported
import { Provider } from "react-redux"; // Import Provider from react-redux
import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <Provider store={store}> {/* Pass store to the Provider */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index={true} path={"/"} element={<Homescreen />} />
          <Route path={"/sign-in"} element={<Login />} />
          <Route path={"/register"} element={<Register />} /> 
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
