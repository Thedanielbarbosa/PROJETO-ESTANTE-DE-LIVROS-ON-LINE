import './Css/SearchBar.css'
import './Css/Menu.css'
import './Css/Books.css'
import './Css/basicstyle.css'
import './Css/PratileiraLivros.css'
import './Css/Popup.css'


import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Shealve } from './PageShelves/Shealve';
import { Homepage } from './Home/Homepage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/'element={<Homepage/>}/>
         <Route path='/Shealve'element={<Shealve/>}/>
      </Routes>
    </BrowserRouter>
)
}

export default App;
