import { registerMicroApps, start } from 'qiankun';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

registerMicroApps([
  {
    name: 'user-app',
    entry: '//localhost:5174',
    container: '#subapp-container',
    activeRule: '/users',
  },
]);

start();
