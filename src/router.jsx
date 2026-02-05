import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/index.jsx";
import Dashboard from "./components/pages/dashboard/index.jsx";
import AccountsPage from "./components/pages/accounts/index.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/accounts",
        element: <AccountsPage />,
      },
      {
        path: "/brokers",
        element: <div>brokers page</div>,
      },
      {
        path: "/submissions",
        element: <div>submissions page</div>,
      },
      {
        path: "/organizations",
        element: <div>organizations page</div>,
      },
      {
        path: "/goals-and-rules",
        element: <div>goals and rules page</div>,
      },
      {
        path: "/admin",
        element: <div>admin page</div>,
      },
      {
        path: "/documents",
        element: <div>documents page</div>,
      },
      {
        path: "/transactions",
        element: <div>transactions page</div>,
      },
    ],
  },
]);
