import logo from './logo.svg';
import './App.css';
import ListStudentComponent from './components/ListStudentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterCompontn from './components/FooterCompontn';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import StudentComponent from './components/StudentComponent';
import ListDepartmentComponent from './components/ListDepartmentComponent';
import DepartmentComponent from './components/DepartmentComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            <Route path='/' element={<ListStudentComponent />}></Route>

             <Route path='/students' element={<ListStudentComponent />}></Route> 


             <Route path='/add-student' element={<StudentComponent />}></Route>

            <Route path='/edit-student/:id' element={<StudentComponent />}></Route>

            <Route path='/departments' element={<ListDepartmentComponent />}></Route>
            <Route path='/add-department' element={<DepartmentComponent />}></Route>

            <Route path='/edit-department/:id' element={<DepartmentComponent />}></Route>

          </Routes>
        
        <FooterCompontn/>
      </BrowserRouter>
    </div>

  );
}

export default App;
