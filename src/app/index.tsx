import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import { Router } from 'components/router';

/**
 * App's root
 * @returns `App` component
 */
export const App = () => (
  <BrowserRouter>
    <CssBaseline />
    <Router />
  </BrowserRouter>
);
