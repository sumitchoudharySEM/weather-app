import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import Testapp from './testapp';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
const app = (
  <StrictMode>
      <App />
      {/* <Testapp/> */}
  </StrictMode>
);

root.render(app);