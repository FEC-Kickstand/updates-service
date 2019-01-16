import React from 'react';
import Updates from './updates';
import MainNav from './mainNav';
import UpdateModal from './updateModal';

const App = () => (
  <div>
    <UpdateModal />
    <MainNav />
    <Updates />
  </div>
);

export default App;
