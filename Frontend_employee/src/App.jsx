import Login from './components/Auth/Login'
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signup from './components/Auth/Signup'
import Layout from './components/Role/layout';
import Admin from './components/Role/admin';
import User from './components/Role/user';
import AddEmploye from './components/Employe/addEmploye';
// import PrivateRoute from './Routes/PrivateRoute';

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/> 
         <Route path='/addEmploye' element={<AddEmploye/>}/>
       
           <Route path='user' element={<User/>}/>
           <Route path='admin' element={<Admin/>}/>
       
   
       

 
      
      </Route>

    </Routes>

  )
}

export default App

