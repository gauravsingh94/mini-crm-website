import axios from "axios";
import { useState } from "react";

export interface IAdmin {
  adminname: string;
  email: string;
  profilePic: string;
}

const LoginRegisterPage = () => {
  const [admin, setAdmin] = useState<IAdmin | null>(null);

  const handleOnClick = () => {
    window.open("http://localhost:3000/auth/google/callback", "_self");
  };

  const getAdmin = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/auth/login/success",
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("admin", JSON.stringify(response.data.admin));

      setAdmin(response.data.admin);
    } catch (error) {
      if (error.response.status === 401) {
        alert("Unauthorized!! Login");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        {admin ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">{admin.adminname}</h1>
            <img
              src={admin.profilePic}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4"
              referrerPolicy="no-referrer"
            />
            <button
              onClick={() => setAdmin(null)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg w-full hover:bg-red-600 transition"
            >
              Remove User
            </button>
          </div>
        ) : (
          <div className="text-center">
            <button
              onClick={handleOnClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full mb-4 hover:bg-blue-600 transition"
            >
              Sign in with Google
            </button>
            <button
              onClick={getAdmin}
              className="bg-green-500 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600 transition"
            >
              Get User
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginRegisterPage;
