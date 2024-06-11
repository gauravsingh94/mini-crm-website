
const NavBar = () => {

  return (
    <nav className="bg-yellow-400 p-4 flex justify-between items-center mb-5">

      <div className="flex items-center">
        <div className="text-white font-bold text-xl"><a href="/">CRM Website</a></div>
      </div>


      <div className="flex items-center space-x-4">
        <div className="text-white">Owner Name</div>
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
          <img

            alt="profile"
            className="w-full h-full rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;