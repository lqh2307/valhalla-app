import SettingsPanel from './controls/settings-panel';
import { ToastContainer } from 'react-toastify';
import MainControl from './controls';
import { Box } from '@mui/material';
import React from 'react';
import Map from './map';

export const App = () => {
  return (
    <Box>
      <Map />
      <MainControl />
      <SettingsPanel />
      <ToastContainer
        position={'bottom-center'}
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={'touch'}
        pauseOnHover={true}
        theme={'light'}
      />
    </Box>
  );
};
