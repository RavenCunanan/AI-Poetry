import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import PoemBox from './PoemBox.jsx';

function App() {
  useEffect(() => {
    document.title = "AI Poetry"; // Set the title here
  }, []); // This runs only once when the component mounts

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start', // Aligns at the start but allows a margin on top
        height: '100vh',
        margin: 0,
        padding: 0,
      }}
    >
      <div style={{ marginTop: '100px' }}>
        <PoemBox />
      </div>
    </div>
  );
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
