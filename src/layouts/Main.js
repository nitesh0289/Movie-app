import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../components/shared/navbar";

function Main() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <NavBar />
      <section>
        <Outlet />
      </section>
    </Suspense>
  );
}

export default Main;
