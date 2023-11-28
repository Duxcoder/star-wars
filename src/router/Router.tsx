import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Layout from "../components/Layout";
import UncontrolledForm from "../pages/UncontrolledForm";
import ReactHookForm from "../pages/ReactHookForm";
import { Path } from "../lib/constants";

export const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Main,
      },
      {
        path: Path.Uncontrolled,
        Component: UncontrolledForm,
      },
      {
        path: Path.ReactHookForm,
        Component: ReactHookForm,
      },
    ],
  },
]);
