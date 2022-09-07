import React from "react";

import './App.css';
import user from './alya-back-end/user.json'
import Profile from './components/Profile/Profile';


console.log(user)

function App() {

  return (
    <Profile
      userName={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  )
}

export default App;
