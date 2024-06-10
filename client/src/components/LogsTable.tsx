import React from "react";

interface MessageLog {
  id: number;
  serialNumber: number;
  message: string;
  customerName: string;
  status: string;
}

interface Props {
  messageLogs: MessageLog[];
}

const MessageLogTable: React.FC<Props> = ({ messageLogs }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-yellow-300">
            <th className="px-4 py-2">S.No</th>
            <th className="px-4 py-2">Message</th>
            <th className="px-4 py-2">Customer Name</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {messageLogs.map((log) => (
            <tr key={log.id}>
              <td className="border px-4 py-2 text-center">{log.serialNumber}</td>
              <td className="border px-4 py-2 text-center">{log.message}</td>
              <td className="border px-4 py-2 text-center">{log.customerName}</td>
              <td className="border px-4 py-2 text-center">
                <span
                  className={
                    log.status === "send"
                      ? "text-green-600 font-bold glow"
                      : "text-red-600 font-bold glow"
                  }
                >
                  {log.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MessageLogTable;
