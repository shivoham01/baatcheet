import { createRoot } from 'react-dom/client'
import { MessageProvider } from './context api/messageContext.jsx'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <HashRouter>
        <MessageProvider>
            <App />
        </MessageProvider>
    </HashRouter>
) 