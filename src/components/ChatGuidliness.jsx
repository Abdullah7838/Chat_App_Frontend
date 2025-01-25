
function ChatGuidlines() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Chat Guidelines
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Please follow these rules to ensure a safe and respectful environment for everyone.
        </p>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>
            <span className="font-bold">Be respectful:</span> Treat others with kindness and avoid using offensive language.
          </li>
          <li>
            <span className="font-bold">No spamming:</span> Avoid posting repetitive messages or unnecessary content.
          </li>
          <li>
            <span className="font-bold">No harassment:</span> Do not engage in personal attacks or harassment of any kind.
          </li>
          <li>
            <span className="font-bold">No hate speech:</span> Hate speech, discrimination, or promoting violence will not be tolerated.
          </li>
          <li>
            <span className="font-bold">Stay on-topic:</span> Ensure that your messages are relevant to the current conversation.
          </li>
          <li>
            <span className="font-bold">No advertising:</span> Refrain from sharing promotional content or links without permission.
          </li>
          <li>
            <span className="font-bold">Protect privacy:</span> Do not share personal information (yours or others’) in the chat.
          </li>
          <li>
            <span className="font-bold">Follow moderation:</span> Comply with requests or warnings from moderators and admins.
          </li>
        </ol>
        <div className="mt-6 text-center">
          <p className="text-red-500 font-medium">
            Violation of these guidelines may result in a temporary or permanent device ban.
          </p>
          <p className="text-gray-600 mt-2">
            Thank you for helping us create a safe and friendly chat environment!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatGuidlines;
