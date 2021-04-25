import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import OrdersTable from "./OrdersTable";

const App = () => {
  return (
    <div className="ui container">
      <h3>Main Beach Restaurant</h3>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Route path="/" exact component={OrdersTable} />
      </BrowserRouter>
    </div>
  );
};

export default App;
