import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Passwordgen from './components/Generator/passgen';
import Btn from './components/Button/button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div>
    <Header />
    <Passwordgen />
    <Btn />
    </div>
  )
}

export default App;
