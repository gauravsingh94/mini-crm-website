import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface AudiencePageProps {
  handleCloseForm: () => void;
}

export const CreateAudienceForm: React.FC<AudiencePageProps> = (props) => {
  const navigate = useNavigate();

  const [AudienceName, setAudienceName] = useState("");
  const [minTotalSpends, setMinTotalSpends] = useState("1");
  const [maxTotalSpends, setMaxTotalSpends] = useState("9999999");
  const [maxVisits, setMaxVisits] = useState("9999999");
  const [notVisitedInLastMonths, setNotVisitedInLastMonths] = useState("0");
  const [customers, setCustomers] = useState<[]>([]);

  console.log(customers);

  const handleSubmit = () => {
    fetch(
      `http://localhost:3000/customer/filter?minTotalSpends=${minTotalSpends}&maxVisits=${maxVisits}&maxTotalSpends=${maxTotalSpends}&notVisitedInLastMonths=${notVisitedInLastMonths}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCustomers(data);
        const newData = {
          name: AudienceName,
          customer: data, 
          size: data.length, 
        };
  
        fetch("http://localhost:3000/audience/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newData),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            navigate(data._id);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 lg:w-[50%] sm:w-[60%]">
        <h2 className="text-xl font-bold mb-4">Create Audience</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="audienceName"
          >
            Audience Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="audienceName"
            type="text"
            onChange={(e) => setAudienceName(e.target.value)}
            placeholder="Enter audience name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="minSpend"
          >
            Min Spend:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="minSpend"
            type="number"
            onChange={(e) => setMinTotalSpends(e.target.value)}
            placeholder="Enter min spend"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="maxSpend"
          >
            Max Spend:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="maxSpend"
            type="number"
            onChange={(e) => setMaxTotalSpends(e.target.value)}
            placeholder="Enter max spend"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="maxVisits"
          >
            Max Visits:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="maxVisits"
            type="number"
            onChange={(e) => setMaxVisits(e.target.value)}
            placeholder="Enter max visits"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="notVisits"
          >
            Not Visits in Months:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="notVisits"
            type="number"
            onChange={(e) => setNotVisitedInLastMonths(e.target.value)}
            placeholder="Enter not visits in months"
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={props.handleCloseForm}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Close
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
