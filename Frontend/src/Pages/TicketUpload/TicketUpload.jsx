import HeroContent from "./HeroContent";

const TicketUpload = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[url('/assets/images/background-mobile.png')] sm:bg-[url('/assets/images/background-tablet.png')] lg:bg-[url('/assets/images/background-desktop.png')] bg-center bg-cover">
      {/* Top-right squiggly pattern */}
      <img
        src="/assets/images/pattern-squiggly-line-top.svg"
        className="absolute top-12 right-0 w-40 sm:top-16 sm:w-56 lg:top-20 lg:w-80"
        alt="Top pattern"
      />

      {/* Bottom-left squiggly pattern */}
      {/* Mobile / Tablet version */}
      <img
        src="/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg"
        className="absolute bottom-0 left-0 w-[65%] sm:w-[55%] lg:hidden"
        alt="Bottom pattern mobile-tablet"
      />

      {/* Desktop version */}
      <img
        src="/assets/images/pattern-squiggly-line-bottom-desktop.svg"
        className="absolute bottom-0 left-0 hidden lg:block w-[50%]"
        alt="Bottom pattern desktop"
      />

      {/* Optional pattern lines in center */}
      <img
        src="/assets/images/pattern-lines.svg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Pattern lines"
      />

      {/* Hero content + circle wrapper */}
      <div className="relative w-full flex flex-col items-center z-10">
        {/* Pattern circle positioned near Full Name input */}
        <img
          src="/assets/images/pattern-circle.svg"
          alt="Pattern circle"
          className="absolute top-[75%] sm:top-[68%] lg:top-[60%] right-6 sm:right-12 lg:right-[22rem] w-20 sm:w-32 lg:w-[12.5rem] pointer-events-none"
        />

        <HeroContent />
      </div>
    </section>
  );
};

export default TicketUpload;
