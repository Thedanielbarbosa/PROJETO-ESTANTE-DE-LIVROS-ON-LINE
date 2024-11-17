// Importando o img
import Search from './../img/Search.svg';

import bookmenu from './../img/bookimg.svg';

import house from './../img/house.svg';

import gear from './../img/gear.svg';

import logobooks from './../img/books.png'

import {useState} from "react";

import SearchInput from './../SearchInput';

import { findAll } from "./../Api/libraryApi";

import fotoperfil from "./../img/Killua.jpg";
import { useNavigate } from 'react-router-dom';

export function Homepage(){

    const [books, setBooks] = useState ([]);
    const [ text, setText] = useState ('');
    const navigate = useNavigate();
    const navigate2 = useNavigate();
    const NextPageShealve = () => { navigate('/Shealve')}
    const NextPageHome = () => {navigate2('/')}

   
    

    return(
    
    <div className="GridBasicStructure">


        
        <div className = "MenuLateral">
            <div>
            <div className ="Logo">
                <a href= "#" className="logo"><img className='imglogo' src={logobooks}/>LIBRARY</a>
            </div>

            
                <div className="NavBar">
                    <ul>
                    <li className ="btnmenu"> <a  href= "#" onClick={NextPageHome} ><img className="bookimg" src={house}/>Home</a></li>
                    <li className ="btnmenu"><a  href= "#"><img className="bookimg" src={bookmenu}/> My library</a></li>
                    <li className ="btnmenu"><a  href= "#"><img className="bookimg" src={gear}/>Seting</a></li>
                    </ul>
                </div>
            </div>
                
                <div className ="Bookreading">
                    <div className = "mybookread">
                        <div>
                            <p>continue lendo</p>
                            <p>mycont</p>
                        </div>
                       
                        <div className='go'>
                            <img className='Perfil'src = {fotoperfil}/>
                            <p className='p'>Daniel</p>
                        </div>
                    </div>
                </div>
            
            

        </div>



        <div className="Conteudo">
          
            <div className ="Estante">

                <div className="Barsearch">
                    <div className="barcategoria">

                        <a href="#" onClick={async () =>{
                        const dados = await findAll();
                        setBooks(dados) ;
                        }}
                        >
                        All books
                        </a>

                        <a href="#"
                        
                        onClick={NextPageShealve}

                        >Shelves</a>
                    </div>
                    <div className ="Search">
                        <button className="button" ><img className="imgsearch" src={Search}/></button>

                        <SearchInput value={text} onChange={(search)=> setText(search)} />
                            
                        
                    </div>
                </div>
                

                <div className = "Pratileira">
                     
                        <div className ="books">
                           

                            
                        </div>

                        
                        
                </div>
                <div className = "Pratileira">
                       
                        <div className ="books">
                          

                            
                        </div>

                       
                        
                </div>

                <div className = "Pratileira">
                       
                        <div className ="books">
                           

                            
                        </div>

                        
                </div>

                

            </div>
        </div>


    </div>
    )   
}