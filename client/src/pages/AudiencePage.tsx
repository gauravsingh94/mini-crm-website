import AudienceCard from "../components/AudienceCard";

const AudiencePage = () => {
  return (
    <>
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5 mt-5">
        Create Audience
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <AudienceCard
          audienceName="Sample Name"
          createdAt="12 june"
          size={10}
        />
        <AudienceCard
          audienceName="Sample Name"
          createdAt="12 june"
          size={10}
        />
        <AudienceCard
          audienceName="Sample Name"
          createdAt="12 june"
          size={10}
        />
        <AudienceCard
          audienceName="Sample Name"
          createdAt="12 june"
          size={10}
        />
      </div>
    </>
  );
};

export default AudiencePage;
