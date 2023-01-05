import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const app = document.getElementById('root')

const root = createRoot(app)

root.render(<App />)
