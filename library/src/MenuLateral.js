import Search from './img/Search.svg';
import bookmenu from './img/bookimg.svg';
import house from './img/house.svg';
import gear from './img/gear.svg';
import books from './img/books.png'

import { findAll } from "./MenuLateralApi";
export function MenuLatetal(){


    return(
    
    <div className="App">
        
        <div className = "Barralateral">

            <div className ="Logo">
                <a href= "#" className="logo"><img className='imglogo' src={books}/>LIBRARY</a>
            </div>

            <div className="NavBar">
                <ul>
                <li className ="btnmenu"><a  href= "#"><img className="bookimg" src={house}/>Home</a></li>
                <li className ="btnmenu"><a  href= "#"><img className="bookimg" src={bookmenu}/> My library</a></li>
                <li className ="btnmenu"><a  href= "#"><img className="bookimg" src={gear}/>Seting</a></li>
                </ul>
            </div>

            <div className ="Bookreading">
                <div className = "mybookread">
                    <div>
                        <p>continue lendo</p>
                        <p>mycont</p>
                    </div>
                    
                    <img src = ''/>
                </div>
            </div>
            

        </div>
        
        <div className="Conteundo">
          
            <div className ="Estante">

                <div className="Barsearch">
                    <div className="barcategoria">
                        <a href="#">All books</a>
                        <a href="#">Shelves</a>
                    </div>
                    <div className ="Search">
                        <button className="button" ><img className="imgsearch" src={Search}/></button>
                        <input className="input" type="text"  
                        placeholder="Search" />
                        
                    </div>
                </div>
                <div className="Pratileiras">

                    <div className = "EstanteReading">
                        Reading
                        <div className ="books">
                            <div className = "b">
                                book
                            </div>
                            <div className = "b">
                                book
                            </div>
                            <div className = "b">
                                book
                            </div>
                            <div className = "b">
                                book
                            </div>
                            <div className = "b">
                                book
                            </div>
                            <div className = "b">
                                book
                            </div>
                        </div>
                        
                        <div className ="pratileira">

                        </div>
                    </div>

                    <div className = "EstanteNext">
                        Next
                        <div className ="books">
                            <div className = "b">
                                book
                            </div>
                            <div className = "b">
                                book
                            </div>
                            <div className = "b">
                                book
                            </div>
                            <div className = "b">
                                book
                            </div>
                            <div className = "b">
                                book
                            </div>
                            <div className = "b">
                                book
                            </div>
                        </div>
                        <div className ="pratileira">

                        </div>
                    </div>
                    
                    <div className = "EstanteFinished">
                        Finished
                        <div className ="books">
                            <div className = "b">
                                book
                            </div>
                            <div className = "b">
                                book
                            </div>
                            <div className = "b">
                                book
                            </div>
                            <div className = "b">
                                book
                            </div>
                            <div className = "b">
                                book
                            </div>
                            <div className = "b">
                                book
                            </div>
                        </div>
                        <div className ="pratileira">

                        </div>
                    </div>
                </div>

            </div>
        </div>


    </div>
    )   
}