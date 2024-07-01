import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Routes
import Dashboard, { dashboardLoader } from "./assets/pages/Dashboard";
import Error from "./assets/pages/Error";
//Layouts
import Main, { mainLoader } from "./layouts/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    loader: mainLoader,
    errorElement: <Error />,
    children:[
      {
        index: true,
        element: <Dashboard/>,
        loader: dashboardLoader,
        errorElement: <Error />
      },
    ]
  },
  {
    path: "/",
    element: <Dashboard />,
    loader: dashboardLoader,
    errorElement: <Error />
  },
]);

function App() {
    return <div 
    className="App">
       <RouterProvider router={router} />
    </div>
  
}

export default App
