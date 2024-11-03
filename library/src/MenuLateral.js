
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


                <button>Buscar</button>
                <div className="Pratileiras">

                    <div className = "EstanteReading">
                        Reading
                    </div>

                    <div className = "EstanteNext">
                        Next
                    </div>
                    
                    <div className = "EstanteFinished">
                        Finished
                    </div>
                </div>

            </div>
        </div>


    </div>
    )   
}