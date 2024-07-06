
import Register from './pages/register'
import { Navigate, Route, Routes } from 'react-router'
import Login from './pages/login'
import Chat from './pages/chat'
import TextChat from './test'

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={'/register'} />}
      />
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/chat"
        element={<Chat />}
      />
      <Route
        path="/test"
        element={<TextChat />}
      />
      <Route path="*" element={<p>404 Not found</p>} />
    </Routes>
  )
}

export default App