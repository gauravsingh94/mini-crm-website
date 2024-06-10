import { useState } from "react";
import { CreateAudienceForm } from "../components/CreateAudienceForm";
import AudienceCard from "../components/AudienceCard";

const AudiencePage = () => {
  const [showForm, setShowForm] = useState(false);

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
        <AudienceCard
          audienceName="Sample Name"
          createdAt="12 June"
          size={10}
        />
      </div>
    </div>
  );
};

export default AudiencePage;
