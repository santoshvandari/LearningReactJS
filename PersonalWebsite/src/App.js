import './App.css';
import profileImage from './img/img.jpg'
import MainBody from './Components/mainbody'
import {SocialMedia} from './Components/socialmedia'
function App() {
  return (
    <>
    <MainBody imageurl={profileImage}/>
    <SocialMedia/>
    </>
    );
}

export default App;
