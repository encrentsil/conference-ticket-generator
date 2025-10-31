import { createContext, useContext, useEffect, useState } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [ticketData, setTicketData] = useState(null);

  // Load saved data when the app starts
  useEffect(() => {
    const savedData = localStorage.getItem("ticketData");
    if (savedData) {
      try {
        setTicketData(JSON.parse(savedData));
      } catch (error) {
        console.error("Error loading ticketData:", error);
      }
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (ticketData !== null) {
      localStorage.setItem("ticketData", JSON.stringify(ticketData));
    }
  }, [ticketData]);

  // clear local storage
  const clearTicket = () => {
    localStorage.removeItem("ticketData");
    setTicketData(null);
  };

  return (
    <TicketContext.Provider value={{ ticketData, setTicketData }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTicket = () => useContext(TicketContext);
