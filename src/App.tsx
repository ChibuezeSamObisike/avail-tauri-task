import {
  RouterProvider,
  RouterProviderProps,
  createBrowserRouter,
} from "react-router-dom";

import { FC } from "react";

import Home from "./Home";
import WalletChoser from "./WalletChoser";

const App: FC = () => {
  const router: RouterProviderProps["router"] = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/wallet-choser", element: <WalletChoser /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
