import React, { useState } from "react";

import Main from "./Components/Main";
import Book from "./Components/Book";
import ThankYou from "./Components/ThankYou";
import Navbar from "./Components/Navbar";



function App() {

  const [page, setPage] = useState(0);
  return (
    <div>
    <Navbar setPage={setPage} />
    {page === 0 ? <Main setPage={setPage} /> : null}
    {page === 1 ? <Book setPage={setPage} /> : null}
    {page === 2 ? <ThankYou /> : null}
  </div>
  );
}

export default App;
