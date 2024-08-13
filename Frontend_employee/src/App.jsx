import Login from './components/Auth/Login'
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signup from './components/Auth/Signup'
import Layout from './components/Role/layout';
import Admin from './components/Role/admin';
import User from './components/Role/user';
import AddEmploye from './components/Employe/addEmploye';
import GetEmployee from './components/Employe/getEmploye';
import Editemploye from './components/Employe/editEmploye';
import DeleteEmploye from './components/Employe/deleteemploye';
// import PrivateRoute from './Routes/PrivateRoute';

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/> 
        <Route path='edit/:id' element={<Editemploye/>}/>
        <Route path='delete/:id' element={<DeleteEmploye/>}/>

         <Route path='/addEmploye' element={<AddEmploye/>}/>
         <Route path='/getEmployee' element={<GetEmployee/>}/>
       
           <Route path='user' element={<User/>}/>
        <Route path='admin' element={<Admin />} />
           {/* <Route path="/" element={<Home />} /> */}
       
       
   
       

 
      
      </Route>

    </Routes>

  )
}

export default App

