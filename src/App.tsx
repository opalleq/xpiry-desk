import * as React from 'react';
import { Outlet } from 'react-router-dom';

const App = (): JSX.Element => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
