import './App.css';
import NavbarN from './Component/NavbarN/NavbarN';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {fetchAllQuestions} from "./actions/question"
function App() {
  const dispatch=useDispatch()

useEffect(() => {
  dispatch(fetchAllQuestions())
}, [dispatch])

  return (
   <div>
<NavbarN />
<Home />
<Footer />
   </div>
  );
}

export default App;
