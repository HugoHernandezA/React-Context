import logo from './logo.svg';
import './App.css';
import User from './UsersContext';
import USERS from './users'
import UsersList from './UsersList'
import Theme from './ThemeContext'

const usersDis = USERS;
const Dark = "btn btn1"
const Light = "btn btn2"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <Theme theme={Dark} text={"Dark Theme"} />
        <Theme theme={Light} text={"Light Theme"} />
      </div>
        <UsersList users={usersDis}/>
      </header>
    </div>
  );
}

export default App;
