import '../App.css';
import Chat from './Chat';
import Login from './Login';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
        {user ? <Chat /> : <Login />}
    </div>
  );
}

export default Home;