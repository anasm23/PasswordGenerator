import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Passwordgen from './components/Generator/passgen';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <Header />
    <Passwordgen />
    </div>
  )
}

export default App;
