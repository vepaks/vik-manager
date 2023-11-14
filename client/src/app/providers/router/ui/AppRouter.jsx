import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../../../../shared/config/routeConfig/routeConfig";
import {Loader} from "../../../../shared/ui/Loader/";

const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <Loader/>
      }
    >
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
