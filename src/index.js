import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";

const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<GridLoader />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
);
