import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Login from "./pages/Login";
import MarketPlace from "./pages/MarketPlace";
import { Provider, useDispatch, useSelector } from "react-redux";
import BasicTable from "./components/BasicTable";
import { Button } from "@mui/material";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Button sx={{marginTop:"200px"}} onClick={handleFetchData} variant="contained">Load</Button> */}
        <Routes>
          <Route path="" element={<Login/>}></Route>
          <Route path="login" element={<Login />} />
          <Route path="marketplace" element={<MarketPlace />}>
            <Route path="table" element={<BasicTable />} />
          </Route>
        </Routes>
      </div>
     </Provider>
  );
}

export default App;
