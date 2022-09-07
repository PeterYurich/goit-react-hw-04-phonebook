import React from "react";

import './App.css';
import user from './alya-back-end/user.json';
import Profile from './components/Profile/Profile';
import data from './alya-back-end/data.json';
import Statistics from './components/Statistics/Statistics';


console.log(user)

function App() {

  return (
    <><Profile
      userName={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
      {/* <Statistics title="Upload stats" stats={data} /> */}
      <Statistics stats={data} /></>
  )
}

export default App;
