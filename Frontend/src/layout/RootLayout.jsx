import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/constants/Navbar";
import { TicketProvider } from "@/context/TicketProvider";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <TicketProvider>
      <Navbar />
      <Outlet />

      {/* Toast container with glassmorphism & orange success */}
      <Toaster
        theme="light"
        position="top-right"
        toastOptions={{
          style: {
            backdropFilter: "blur(12px)",
            background: "rgba(255, 255, 255, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            color: "#fff",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          },
          className: "rounded-xl font-medium",
          success: {
            style: {
              background: "rgba(255, 165, 0, 0.2)",
              border: "1px solid rgba(255, 165, 0, 0.5)",
              color: "#FFA500",
              backdropFilter: "blur(14px)",
              boxShadow: "0 0 20px rgba(255, 165, 0, 0.4)",
            },
            iconTheme: {
              primary: "#FFA500",
              secondary: "transparent",
            },
          },
        }}
      />
    </TicketProvider>
  );
};

export default RootLayout;
