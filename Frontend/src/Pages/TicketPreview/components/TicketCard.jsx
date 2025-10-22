import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import logoMark from "/assets/images/logo-mark.svg";
import { useTicket } from "@/context/TicketProvider";
import { Github } from "lucide-react";

const TicketCard = () => {
  const { ticketData } = useTicket();
  const {
    fullName,
    email,
    github,
    ticketId,
    event = "Coding Conf",
    date = "Jan 31, 2025 / Austin, TX",
    avatar = "/assets/images/image-avatar.jpg",
  } = ticketData || {};

  return (
    <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto px-4">
      <Card
        className="
          relative overflow-hidden rounded-2xl
          border border-white/10
          bg-gradient-to-r from-[#1a102d] via-[#291b48] to-[#482a72]
          text-white font-Inconsolata
          shadow-[0_8px_25px_rgba(0,0,0,0.4)]
          transition-transform duration-300 hover:scale-[1.02]
          w-full
          h-full
        "
      >
        <div className="flex flex-col sm:flex-row h-full">
          {/* Left Section */}
          <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
            {/* Logo + Event Info */}
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logoMark}
                alt="Event Logo"
                className="w-6 sm:w-8 md:w-10 object-contain opacity-90"
              />
              <div className="flex flex-col">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-tight">
                  {event}
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/70 mt-1">
                  {date}
                </p>
              </div>
            </div>

            {/* Attendee Info */}
            <div className="flex items-center gap-4 sm:gap-6">
              <Avatar className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 ring-2 ring-white/25 flex-shrink-0">
                <AvatarImage src={avatar} alt={fullName} />
                <AvatarFallback>{fullName?.[0]}</AvatarFallback>
              </Avatar>

              <div className="flex flex-col justify-center gap-1">
                {fullName && (
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
                    {fullName}
                  </div>
                )}
                {email && (
                  <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-white/70">
                    {email}
                  </div>
                )}
                {github && (
                  <div className="flex items-center gap-1 sm:gap-2 text-[9px] sm:text-xs md:text-sm lg:text-base text-white/60 mt-1">
                    <div className="bg-white rounded-full p-[2px] flex items-center justify-center">
                      <Github size={14} className="text-black" />
                    </div>
                    <span>{github}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Stub */}
          <div className="relative sm:w-28 lg:w-36 w-full flex-shrink-0 flex items-center justify-center bg-gradient-to-b from-[#2E1A4B] to-[#6D2B73]">
            {/* Dashed border line */}
            <div className="hidden sm:block absolute left-0 top-4 bottom-4 border-l-2 border-dashed border-white/25" />

            {/* Top Cutout */}
            <div className="hidden sm:block absolute -left-3 top-5 w-6 h-6 bg-[#0f0722] rounded-full border border-white/10" />

            {/* Bottom Cutout */}
            <div className="hidden sm:block absolute -left-3 bottom-5 w-6 h-6 bg-[#0f0722] rounded-full border border-white/10" />

            {/* Ticket ID - dynamically centered & scaled */}
            {ticketId && (
              <div className="absolute inset-0 flex items-center justify-center sm:[writing-mode:vertical-rl] sm:rotate-180">
                <span className="text-white/60 font-semibold tracking-wider text-[clamp(8px,2vw,14px)]">
                  #{ticketId}
                </span>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TicketCard;
