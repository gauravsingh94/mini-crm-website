import React from "react";

interface Props {
  audienceName: string;
  size: number;
  createdAt: string;
}

const AudienceCard: React.FC<Props> = ({ audienceName, size, createdAt }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300 ease-in-out flex flex-row border border-gray-300">
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">{audienceName}</div>
        <p className="text-gray-700 text-base">Size: {size}</p>
        <p className="text-gray-700 text-base">Created At: {createdAt}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          View
        </button>
      </div>
    </div>
  );
};

export default AudienceCard;
