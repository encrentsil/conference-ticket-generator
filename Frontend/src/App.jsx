import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layout/RootLayout";
import TicketUpload from "./Pages/TicketUpload/TicketUpload";
import TicketPreview from "./Pages/TicketPreview/TicketPreview";

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
        {
          path: "ticket",
          element: <TicketPreview />,
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
