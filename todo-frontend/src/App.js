import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListTodoComponent from './components/ListTodoComponent';

import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import TodoComponent from './components/TodoComponent';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';
import { isUserLoggedIn } from './services/AuthService';

function App() {

  function AuthenticatedRoute({children}) {
    const isAuth = isUserLoggedIn();
    if(isAuth){
      return children;
    }
    return <Navigate to="/" />
  }
  

  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />

      <Routes>
        <Route path = '/' element = {    <ListTodoComponent />}></Route>
        <Route path = '/todos' element = {
          <AuthenticatedRoute>
           <ListTodoComponent />
          </AuthenticatedRoute>
          }></Route>
        <Route path = '/add-todo' element= {
          <AuthenticatedRoute>
            <TodoComponent />
          </AuthenticatedRoute>
          } ></Route>

        <Route path = '/update-todo/:id' element= {
          <AuthenticatedRoute>
           <TodoComponent />
          </AuthenticatedRoute>} ></Route>

        <Route path = '/register' element= {
          
          <AuthenticatedRoute>
          <RegisterComponent  />
          </AuthenticatedRoute>
          } ></Route>

        <Route path = '/login' element= {
          <AuthenticatedRoute>
           <LoginComponent  />
          </AuthenticatedRoute>} ></Route>

      </Routes>
    
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
