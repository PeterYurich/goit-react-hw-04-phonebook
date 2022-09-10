import React from "react";

import './App.css';
import user from './alya-back-end/user.json';
import Profile from './components/Profile/Profile';
import data from './alya-back-end/data.json';
import Statistics from './components/Statistics/Statistics';
import friends from './alya-back-end/friends';
import FriendList from './components/FriendList/FriendList';
import transactions from './alya-back-end/transactions';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {

  return (
    <div className="container">
      <h2>Task-1</h2>
      <Profile
      userName={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
      <h2>Task-2</h2>
      {/* <Statistics title="Upload stats" stats={data} /> */}
      <Statistics stats={data} />
      <h2>Task-3</h2>
      <FriendList friends={friends} />
      <h2>Task-4</h2>
      <TransactionHistory transactions={transactions} />
      </div>
  )
}

export default App;
