
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NotificationProvider } from './pages/components/notification.jsx';
import NotificationComponent from './pages/components/NotificationComponent.jsx';
import ParticlesComponent from './particles.jsx';

createRoot(document.getElementById('root')).render(
  <div id='main'>
   <ParticlesComponent id="particles-js" />
  <NotificationProvider>
    <NotificationComponent /> {/* Show notifications globally */}
    <App />
  </NotificationProvider>
 
  </div>
)
