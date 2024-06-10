import React from "react";

interface Customer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  totalSpends: number;
  lastVisit: number;
}

interface PropsType {
  customers: Customer[];
}

const CustomerTable: React.FC<PropsType> = ({ customers }) => {
  return (
    <div className="overflow-x-auto">
      {customers.length === 0 ? (
        <p className="text-center text-gray-500">There is no customer in this range.</p>
      ) : (
        <div className="shadow overflow-hidden border-b border-yellow-300 sm:rounded-lg">
          <table className="min-w-full divide-y divide-yellow-200">
            <thead className="bg-yellow-300">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total Spends
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Last Visit
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customers.map((customer: Customer, index: number) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{customer.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{customer.totalSpends}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{customer.lastVisit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CustomerTable;
