import React from "react";
import TicketForm from "./components/TicketForm";

const HeroContent = () => {
  return (
    <section className="relative flex flex-col items-center text-center mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8 z-10">
      {/* Heading */}
      <h1 className="font-Inconsolata text-secondary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug sm:leading-tight lg:leading-snug">
        Your Journey to Coding Conf
        <br className="hidden sm:block" /> 2025 Starts Here!
      </h1>

      {/* Description */}
      <p className="text-muted-foreground font-Inconsolata text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4 mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
        Secure your spot at next year's biggest coding conference.
      </p>

      {/* Ticket Form */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        <TicketForm />
      </div>
    </section>
  );
};

export default HeroContent;
