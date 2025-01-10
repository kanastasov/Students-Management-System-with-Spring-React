import logo from './logo.svg';
import './App.css';
import ListStudentComponent from './components/ListStudentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterCompontn from './components/FooterCompontn';

function App() {
  return (
    <div>
      <HeaderComponent />
      <ListStudentComponent />
      <FooterCompontn/>
    </div>

  );
}

export default App;
