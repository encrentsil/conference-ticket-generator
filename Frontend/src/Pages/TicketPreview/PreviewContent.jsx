import { useTicket } from "@/context/TicketProvider";
import React from "react";
import TicketCard from "./components/TicketCard";

const PreviewContent = () => {
  const { ticketData } = useTicket();
  const { fullName, email } = ticketData || {};

  return (
    <div
      className="
        relative flex flex-col items-center text-center 
        mt-14 sm:mt-20 md:mt-24 lg:mt-12 
        px-4 sm:px-6 lg:px-8 z-10
      "
    >
      {/* Heading */}
      <h1 className="font-Inconsolata text-secondary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug sm:leading-tight lg:leading-snug">
        Congrats,
        <span className="text-orange-500"> {fullName}</span>
        <br className="hidden sm:block" />
        Your ticket is ready.
      </h1>

      {/* Paragraph */}
      <p
        className="
          text-muted-foreground font-Inconsolata
          text-sm sm:text-base md:text-lg lg:text-xl
          max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl
          mx-auto 
          mt-6 sm:mt-8 md:mt-10 lg:mt-5
        "
      >
        We've emailed your ticket to{" "}
        <span className="text-orange-400">{email}</span> and will send updates
        in the run up to the event.
      </p>

      {/* Ticket Card */}
      <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-8">
        <TicketCard />
      </div>
    </div>
  );
};

export default PreviewContent;
