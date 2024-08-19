import React from 'react';
import { Box, Container } from '@mui/material';
import ChatBox from './page';

function App() {
    return (
        <html>
          <body>
        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ChatBox />
        </Box>
        </body>
      </html>
    );
}

export default App;
