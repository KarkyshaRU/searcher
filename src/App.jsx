import React from "react";

import { Search, Movies } from "./components";

const App = ({ isAuth, messageError, Login }) => {
  return (
    <div className="wrapper">
      <Search />
      <Movies />
    </div>
  );
};

export default App;
