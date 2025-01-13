import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListTodoComponent from './components/ListTodoComponent';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />

      <Routes>
        <Route path = '/' element = {    <ListTodoComponent />}></Route>
        <Route path = '/todos' element = {<ListTodoComponent />}></Route>
      </Routes>
    
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
