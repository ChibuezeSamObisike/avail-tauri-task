import {
  RouterProvider,
  RouterProviderProps,
  createBrowserRouter,
} from "react-router-dom";

import { FC } from "react";

import Home from "./Home";
import WalletChoser from "./WalletChoser";
import Existing from "./views-mobile/Existing";

const App: FC = () => {
  const router: RouterProviderProps["router"] = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/wallet-choser", element: <WalletChoser /> },
    { path: "/existing-user-checker-screen", element: <Existing /> },
    { path: "/seed-phrase-login", element: <WalletChoser /> },
    { path: "/private-key-login", element: <WalletChoser /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
