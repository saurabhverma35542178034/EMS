import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
// import AuthContext from './Context/AuthContext.jsx'
// import TaskContext from './Context/TaskContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AuthContext>
      <TaskContext> */}
      <AuthProvider>
          <App />
      </AuthProvider>    
    {/* </TaskContext>
    </AuthContext> */}
  </StrictMode>,
)