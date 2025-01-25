import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';
import Chat from './components/Chat';
import About from './components/About';
import ChatGuidliness from './components/ChatGuidliness';
export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Define routes for your components */}
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/about" element={<About />} />
          <Route path="/rules" element={<ChatGuidliness />} />
        </Routes>
      </div>
    </Router>
  );
}
