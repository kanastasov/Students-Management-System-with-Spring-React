import logo from './logo.svg';
import './App.css';
import ListStudentComponent from './components/ListStudentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterCompontn from './components/FooterCompontn';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            <Route path='/' element={<ListStudentComponent />}></Route>

            {/* <Route path='/students' element={<ListStudentComponent />}></Route> */}

          </Routes>
        
        <FooterCompontn/>
      </BrowserRouter>
    </div>

  );
}

export default App;
