import logo from "/assets/images/logo-full.svg";

const Navbar = () => {
  return (
    <header
      className="h-14 
      flex items-center justify-center 
      bg-transparent 
      absolute top-0 left-0 w-full z-50
      px-4 sm:px-6 lg:px-12"
    >
      <img
        src={logo}
        alt="logo"
        className="sm:h-6 h-8 lg:h-10 brightness-110 drop-shadow-md"
      />
    </header>
  );
};

export default Navbar;
