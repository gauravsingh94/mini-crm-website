import { useState, useEffect } from "react";
import CustomerTable from "../components/CustomerCard";
import SendMessageForm from "../components/SendMessageForm";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AudienceDetailPage = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleFormClose = () => {
    setShowPopup(false);
  };
  const [audienceName, setAudienceName] = useState("");
  const [size, setSize] = useState(0);
  const [customers, setCustomers] = useState<[]>([]);
  const { audienceId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/audience/${audienceId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch audience data");
        }
        const data = await response.json();
        setCustomers(data.customer);
        setAudienceName(data.name);
        setSize(data.size);
      } catch (error) {
        console.error("Error fetching audience data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="text-center font-[10px]">{audienceName}</div>
      <div className="text-center font-[5px]">{size}</div>
      <div className="flex justify-between items-center">
        <div>
          <p>See logs of past messages.</p>
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5 mt-3"
            onClick={() => navigate(`/logs/${audienceId}`)}
          >
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
      <CustomerTable customers={customers} />

      {/* Popup form */}
      {showPopup && (
        <SendMessageForm
          handleFormClose={handleFormClose}
          audienceId={audienceId!}
        />
      )}
    </div>
  );
};

export default AudienceDetailPage;
