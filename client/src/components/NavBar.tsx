import { useEffect, useState } from "react";

export interface IAdmin {
  adminname: string;
  email: string;
  profilePic: string;
}

const NavBar = () => {
  const [admin, setAdmin] = useState<IAdmin | null>(null);

  useEffect(() => {
    const getAdmin = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/auth/login/success",
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        localStorage.setItem("admin", JSON.stringify(data.admin));
        setAdmin(data.admin);
      } catch (error) {
        console.log(error);
      }
    };
    getAdmin();
  }, []);

  const handleLogOut = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/logout", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      localStorage.removeItem("admin");
      setAdmin(null);
      window.location.href = "/login-register";
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  return (
    <nav className="bg-yellow-400 p-4 flex justify-between items-center mb-5">
      <div className="flex items-center">
        <div className="text-white font-bold text-xl">
          <a href="/">CRM Website</a>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="text-white">{admin?.adminname}</div>
        {!admin ? (
          <a href="/login-register">Login</a>
        ) : (
          <div className="flex gap-5">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <img
                src={admin?.profilePic}
                alt="profile"
                className="w-full h-full rounded-full"
              />
            </div>
            <button
              className="bg-red-500 p-2 text-white text-1xl font-bold rounded-lg"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
