import { registerMicroApps, start } from 'qiankun';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
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
