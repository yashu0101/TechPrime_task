import React, { Suspense, useEffect } from "react";
import routes from "../../shared/routes/AdminRoutes";
import { Routes, Navigate, Route } from "react-router-dom";
import { selectUser } from "../../app/slices/AuthSlice";
import { useSelector } from "react-redux";

const SidebarRoutes = () => {
  const loggedUser = useSelector(selectUser);

  return (
    <>
      <Suspense
        fallback={
          <>
            <h2>Loading....</h2>
          </>
        }
      >
        <Routes>
          {Array.isArray(routes) &&
            routes.map(({ path, hasSubRoutes, component }, i) => (
              <>
                <Route
                  key={path + "-" + i}
                  path={hasSubRoutes ? `${path}/*` : path}
                  element={component}
                />
              </>
            ))}
        </Routes>
      </Suspense>
    </>
  );
};

export default SidebarRoutes;
