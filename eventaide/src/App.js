import React from 'react';
import Header from './homepageComponents/header';
import UpcomingEvents from './homepageComponents/upcomingevents';
import ExploreMoreEvents from './homepageComponents/ExploreMoreEvents';
function App() {
  return (
    <div className="App">
      <Header />
      <UpcomingEvents />
      <ExploreMoreEvents />
    </div>
  );
}

export default App;