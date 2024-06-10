import { useState, useEffect } from "react";
import { CreateAudienceForm } from "../components/CreateAudienceForm";
import AudienceCard from "../components/AudienceCard";

interface AudienceType {
  _id: string;
  name: string;
  createdAt: string;
  size: number;
}

const AudiencePage = () => {
  const [showForm, setShowForm] = useState(false);
  const [audiences, setAudiences] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/audience/all")
      .then((response) => response.json())
      .then((data) => {
        setAudiences(data);
      })
      .catch((error) => {
        console.error("Error fetching audience data:", error);
      });
  }, []);
  
  const handleCreateAudience = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="px-5 py-5">
      <button
        onClick={handleCreateAudience}
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5"
      >
        Create Audience
      </button>
      {showForm && <CreateAudienceForm handleCloseForm={handleCloseForm} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {audiences.map((audience: AudienceType) => (
          <AudienceCard
            key={audience._id}
            audienceName={audience.name}
            createdAt={new Date(audience.createdAt).toLocaleDateString()}
            size={audience.size}
          />
        ))}
      </div>
    </div>
  );
};

export default AudiencePage;
