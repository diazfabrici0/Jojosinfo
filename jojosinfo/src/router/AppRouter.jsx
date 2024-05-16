import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BandsRoutes } from "../routes/PersonajesRoutes";
import { ROUTES } from "../const/routes";
import { Details, Error, Galery, Home } from "../pages";

const router = createBrowserRouter([
    {
      element: <BandsRoutes />,
      children: [
        {
          path: ROUTES.home,
          element: <Home />,
        },
        {
          path: ROUTES.galery,
          element: <Galery />,
        },
        {
          path: ROUTES.details,
          element: <Details />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);
  
  export const AppRouter = () => {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  };