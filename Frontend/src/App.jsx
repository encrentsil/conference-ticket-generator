import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layout/RootLayout";
import TicketUpload from "./Pages/TicketUpload/TicketUpload";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <TicketUpload />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
