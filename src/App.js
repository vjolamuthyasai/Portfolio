import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from './routes';
import './style.css';
const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
