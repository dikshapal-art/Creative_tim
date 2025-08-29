
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2 bg-white shadow-md transition-all duration-300">
      {/* Left side (menu links) */}
      <div className="flex items-center gap-6 text-gray-900 font-light text-sm md:text-base">
        <span className="cursor-pointer hover:text-blue-500">Home</span>
        <span className="cursor-pointer hover:text-blue-500">Company</span>
        <span className="cursor-pointer hover:text-blue-500">Portfolio</span>
        <span className="cursor-pointer hover:text-blue-500">Blog</span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4 mt-2 md:mt-0">
        <p className="text-gray-500">© 2025 Creative Tim, made with love for a better web</p>
      </div>
    </div>
  );
};

export default Footer;
