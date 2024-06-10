import { useState } from "react";
import CustomerTable from "../components/CustomerCard";
import SendMessageForm from "../components/SendMessageForm";

const AudienceDetailPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleFormClose = () => {
    console.log("clicked");         
    setShowPopup(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <p>See logs of past messages.</p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5 mt-3">
            Logs
          </button>
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setShowPopup(true)}
          >
            Send Message
          </button>
        </div>
      </div>
      <CustomerTable
        serialNumber={1}
        name="Customer 1"
        email="customer1@123"
        lastVisit={10}
        totalSpends={10000}
      />

      {/* Popup form */}
      {showPopup && <SendMessageForm handleFormClose={handleFormClose} />}
    </div>
  );
};

export default AudienceDetailPage;
