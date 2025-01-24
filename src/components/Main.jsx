import { Link } from "react-router-dom";
function Main() {
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-10">
        <div className="text-center font-black text-5xl xs:text-2xl text-gray-800 mb-10">
          World Chat App (Beta)
        </div>
  
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold text-gray-800">Welcome to World Chat</h2>
            <p className="text-gray-600">Connect with the world easily!</p>
          </div>
  
          <div className="flex justify-around mb-6">
            <Link to='/chat'><button className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full text-xl w-full sm:w-auto mb-4 sm:mb-0">
              Start Chat
            </button></Link>
            {/* <Link to='/login'><button className="text-white bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full text-xl w-full sm:w-auto">
              Login
            </button></Link> */}
          </div>
        </div>
  
        <div className="text-center mt-10">
          <p className="text-zinc-600">Want to know who we are?</p>
          <Link to="/about" className="text-blue-500 hover:text-blue-600">About us</Link>
        </div>
        <p className="text-gray-500 mt-4">version: 0.01</p>
      </div>
    );
  }
  
  export default Main;
  