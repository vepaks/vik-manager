import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../../../../shared/config/routeConfig/routeConfig";
import {Loader} from "../../../../shared/ui/Loader/";
import RouteGuard from "./RouteGuard";

const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <Loader/>
      }
    >
        <RouteGuard>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </RouteGuard>
    </Suspense>
  );
};

export default AppRouter;
