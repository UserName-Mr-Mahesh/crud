import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import CreateUser from './Components/CreateUser';
import Users from './Components/Users';
import EditUser from './Components/EditUser';

const api ="http://localhost:5000/user";

function App() {
  return (
    <section>
        <BrowserRouter>
        <Home/>
        <Routes>
          <Route path='/' element={<CreateUser/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/edituser/:index' element={<EditUser/>}/>
        </Routes>
        </BrowserRouter>
    </section>
  );
}

export default App;
