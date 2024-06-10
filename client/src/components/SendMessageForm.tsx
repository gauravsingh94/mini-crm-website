interface PropsType {
    handleFormClose: () => void;
}

const SendMessageForm: React.FC<PropsType> = (props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg w-[50%] ">
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Type the message which you want to send
          </label>
          <textarea
            id="message"
            className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter the message"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-2 rounded' focus:outline-none focus:shadow-outline"
            onClick={() => props.handleFormClose()}
          >
            Close
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMessageForm;
