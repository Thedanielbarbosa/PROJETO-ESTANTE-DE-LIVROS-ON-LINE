import Search from './img/Search.svg';
export function MenuLatetal(){
    return(
    
    <div className="App">
        
        <div className = "Barralateral">

            <div className ="Logo">
                <a href= "#" className="logo">library</a>
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

                <div className="Barsearch">
                    <div className="barcategoria">
                        <a href="#">all books</a>
                        <a href="#">pratileiras</a>
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