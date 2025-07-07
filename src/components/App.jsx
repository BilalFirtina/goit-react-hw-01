import "./App.css";
import Profile from "./Profile/Profile";
import FriendList from "./Friends/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import userData from "../components/Profile/userData.json";
import friends from "../components/Friends/friends.json";
import transactions from "../components/TransactionHistory/Transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
