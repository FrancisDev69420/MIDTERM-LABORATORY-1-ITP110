import './App.css';
import Header from './Components/Header';
import Home from './Components/Home'; 
import About from './Components/About'; 
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />  
      <About /> 
      <Contact />
    </div>
  );
}

export default App;
