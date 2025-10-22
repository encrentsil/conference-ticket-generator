import React from "react";
import PreviewContent from "./PreviewContent";

const TicketPreview = () => {
  return (
    <section
      className="
        relative min-h-screen flex flex-col items-center justify-start
        pt-10 sm:pt-12 md:pt-14 lg:pt-16
        overflow-hidden
        bg-[url('/assets/images/background-mobile.png')]
        sm:bg-[url('/assets/images/background-tablet.png')]
        lg:bg-[url('/assets/images/background-desktop.png')]
        bg-center bg-cover
      "
    >
      {/* Top-right squiggly pattern */}
      <img
        src='/assets/images/pattern-squiggly-line-top.svg'
        className='absolute top-12 right-0 w-40 sm:top-16 sm:w-56 lg:top-20 lg:w-80'
        alt='Top pattern'
      />

      {/* Bottom-left patterns */}
      <img
        src='/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg'
        className='absolute bottom-0 left-0 w-[65%] sm:w-[55%] lg:hidden'
        alt='Bottom pattern mobile-tablet'
      />
      <img
        src='/assets/images/pattern-squiggly-line-bottom-desktop.svg'
        className='absolute bottom-0 left-0 hidden lg:block w-[50%]'
        alt='Bottom pattern desktop'
      />

      {/* Pattern lines */}
      <img
        src='/assets/images/pattern-lines.svg'
        className='absolute inset-0 w-full h-full object-cover'
        alt='Pattern lines'
      />

      {/* Content */}
      <div className='relative w-full flex flex-col items-center z-10'>
        <img
          src='/assets/images/pattern-circle.svg'
          alt='Pattern circle'
          className='absolute top-[70%] sm:top-[63%] lg:top-[55%] right-6 sm:right-12 lg:right-[22rem] w-20 sm:w-32 lg:w-[12.5rem] pointer-events-none'
        />
        <PreviewContent />
      </div>
    </section>
  );
};

export default TicketPreview;
