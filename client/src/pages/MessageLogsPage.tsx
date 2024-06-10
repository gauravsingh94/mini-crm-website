import { useParams } from "react-router-dom";
import MessageLogTable from "../components/LogsTable";
import { useEffect, useState } from "react";

const MessageLogsPage = () => {
  const { audienceId } = useParams();
  const [messageLogs, setMessageLogs] = useState([]);
  console.log(messageLogs)
  useEffect(() => {
    fetch(`http://localhost:3000/logs/${audienceId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMessageLogs(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <MessageLogTable messageLogs={messageLogs} />
    </div>
  );
};

export default MessageLogsPage;
