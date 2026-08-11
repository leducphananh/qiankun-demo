import { StrictMode } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import {
  qiankunWindow,
  renderWithQiankun,
  type QiankunProps,
} from 'vite-plugin-qiankun/dist/helper';
import App from './App.tsx';
import './index.css';

let root: Root | null = null;

function render(props: QiankunProps = {}) {
  const { container } = props;

  const mountNode = container
    ? container.querySelector('#root')
    : document.querySelector('#root');

  if (!mountNode) {
    throw new Error('Root element not found');
  }

  root = createRoot(mountNode);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

renderWithQiankun({
  mount(props) {
    console.log('[user-app] mount');
    render(props);
  },
  bootstrap() {
    console.log('[user-app] bootstrap');
  },
  unmount() {
    console.log('[user-app] unmount');
    root?.unmount();
    root = null;
  },
  update(props: QiankunProps) {
    console.log('[user-app] update', props);
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
