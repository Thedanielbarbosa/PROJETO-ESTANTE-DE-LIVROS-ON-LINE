import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
    <div className = "Barralateral">

      <div className ="Logo">
        <a href= "#">library</a>
      </div>

      <div className="NavBar">
        <ul>
          <li><a href= "#">HOME</a></li>
          <li><a href= "#">My library</a></li>
          <li><a href= "#">Shop</a></li>
          <li><a href= "#">Seting</a></li>
        </ul>
      </div>

      <div className ="Bookreading">
        <p>continue lendo</p>
        <p>mycont</p>
        
      </div>
     

    </div>
    
    <div className="Conteundo">
      <div className ="Estante">
        <div className = "EstanteReading">
          livorX
        </div>

        <div className = "EstanteNext">
          livorY
        </div>
          
        <div className = "EstanteFinished">
          livoz
        </div>

      </div>
    </div>


  </div>
  
  );
}

export default App;
