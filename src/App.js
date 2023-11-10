import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home';
import { createBrowserRouter, RouterProider, Route } from 'react-router-dom';

const router = createBrowserRouter ({
  {
    path:"/",
    element:<span>Home</span>
  },
  {
    path:""
  }
})

function App() {
  return (
    <Home />
  );
}

export default App;
