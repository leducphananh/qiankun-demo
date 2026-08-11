import { registerMicroApps, start } from 'qiankun';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import type { UserAppProps } from './types/micro-app';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

const userAppProps: UserAppProps = {
  user: {
    id: 1,
    name: 'Phan Anh',
    email: 'phananh@example.com',
  },
  theme: 'dark',
  onLogout: () => {
    console.log('Main App Logout');
  },
};

registerMicroApps([
  {
    name: 'user-app',
    entry: '//localhost:5174',
    container: '#subapp-container',
    activeRule: '/users',

    props: userAppProps,
  },
]);

start();
