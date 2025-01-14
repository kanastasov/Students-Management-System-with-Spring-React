import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListTodoComponent from './components/ListTodoComponent';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TodoComponent from './components/TodoComponent';
import RegisterComponent from './components/RegisterComponent';

function App() {

  
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />

      <Routes>
        <Route path = '/' element = {    <ListTodoComponent />}></Route>
        <Route path = '/todos' element = {<ListTodoComponent />}></Route>
        <Route path = '/add-todo' element= {<TodoComponent />} ></Route>

        <Route path = '/update-todo/:id' element= {<TodoComponent />} ></Route>

        <Route path = '/register' element= {<RegisterComponent  />} ></Route>

      </Routes>
    
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
