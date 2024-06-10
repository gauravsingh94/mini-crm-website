import MessageLogTable from "../components/LogsTable";

const MessageLogsPage = () => {
    const messageLogs = [
        {
          id: 1,
          message: "Hey Ramesh, 10% off!",
          customerName: "Ramesh Babu",
          serialNumber: 1,
          status: "send",
        },
        {
          id: 1,
          message: "Hey Ramesh, 10% off!",
          customerName: "Ramesh Babu",
          serialNumber: 1,
          status: "send",
        },
        {
          id: 1,
          message: "Hey Ramesh, 10% off!",
          customerName: "Ramesh Babu",
          serialNumber: 1,
          status: "send",
        },
        {
          id: 1,
          message: "Hey Ramesh, 10% off!",
          customerName: "Ramesh Babu",
          serialNumber: 1,
          status: "send",
        }, 
      ];
      return (
        <div className="container mx-auto">
          <MessageLogTable messageLogs={messageLogs} />
        </div>
      );
}

export default MessageLogsPage