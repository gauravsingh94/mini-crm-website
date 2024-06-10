import React from "react";

interface PropsType {
  serialNumber: number;
  name: string;
  email: string;
  totalSpends: number;
  lastVisit: number; 
}

const CustomerTable: React.FC<PropsType> = ({
  serialNumber,
  name,
  email,
  totalSpends,
  lastVisit,
}) => {
  return (
    <div className="overflow-x-auto">
      <div className="shadow overflow-hidden border-b border-yellow-300 sm:rounded-lg">
        <table className="min-w-full divide-y divide-yellow-200">
          <thead className="bg-yellow-300">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Spends
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Visit
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">{serialNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap">{name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{totalSpends}</td>
              <td className="px-6 py-4 whitespace-nowrap">{lastVisit}</td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap">{serialNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap">{name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{totalSpends}</td>
              <td className="px-6 py-4 whitespace-nowrap">{lastVisit}</td>
            </tr><tr>
              <td className="px-6 py-4 whitespace-nowrap">{serialNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap">{name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{totalSpends}</td>
              <td className="px-6 py-4 whitespace-nowrap">{lastVisit}</td>
            </tr><tr>
              <td className="px-6 py-4 whitespace-nowrap">{serialNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap">{name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{totalSpends}</td>
              <td className="px-6 py-4 whitespace-nowrap">{lastVisit}</td>
            </tr><tr>
              <td className="px-6 py-4 whitespace-nowrap">{serialNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap">{name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{totalSpends}</td>
              <td className="px-6 py-4 whitespace-nowrap">{lastVisit}</td>
            </tr><tr>
              <td className="px-6 py-4 whitespace-nowrap">{serialNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap">{name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{totalSpends}</td>
              <td className="px-6 py-4 whitespace-nowrap">{lastVisit}</td>
            </tr><tr>
              <td className="px-6 py-4 whitespace-nowrap">{serialNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap">{name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{totalSpends}</td>
              <td className="px-6 py-4 whitespace-nowrap">{lastVisit}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;
